import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { config } from 'src/config/configuration';
import { AuthJwtTokenData } from '../auth..model';
import { Request } from 'express';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config().secretKey,
      passReqToCallback: true
    });
  }

  async validate(req: Request, payload: AuthJwtTokenData) {
    const accessToken = req.get('Authorization')?.replace('Bearer', '').trim() as string
    const user = await this.authService.validateToken(accessToken, payload.username)
    if (!user) throw new UnauthorizedException()
    
    const result = {
      ...payload.sub,
      username: payload.username,
      accessToken: accessToken
    }
    return result
  }
}
