import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { config } from 'src/config/configuration';
import { AuthJwtTokenData } from '../auth.model';
import { AuthService } from '../auth.service';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config().secretKey,
      passReqToCallback: true
    });
  }

  async validate(req: Request, payload: AuthJwtTokenData) {
    const token = req.headers.authorization?.replace('Bearer', '').trim() ?? ''
    this.authService.expiredTokenCheck(payload.exp as number)
    return await this.authService.validateUserToken(token, payload.username)
  }
}
