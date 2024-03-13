import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { config } from 'src/config/configuration';
import { AuthService } from '../auth.service';
import { Request } from 'express';

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refresh'),
      ignoreExpiration: false,
      secretOrKey: config().secretKey,
      passReqToCallback: true
    });
  }

  async validate(req: Request, payload: any) {
    const accessToken = req.body.refresh
    const user = await this.authService.validateRefreshToken(accessToken, payload.username)
    if (!user) throw new UnauthorizedException()
    const result = {
      ...payload.sub,
      username: payload.username
    }
    return result
  }
}
