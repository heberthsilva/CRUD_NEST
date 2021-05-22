import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { UsuarioModule } from '../usuario/usuario.module';

import { LocalStrategy } from './shared/local.strategy';
import { AuthService } from './shared/auth.service';
import { JwtStrategy } from './shared/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './shared/constants';

@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '10m' },
          }),
    ],
    controllers: [
        AuthController
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
    ],
})
export class AuthModule { }
