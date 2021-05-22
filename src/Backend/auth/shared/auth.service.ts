import { UsuarioService } from './../../usuario/usuario.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService { 

constructor(
    private userService: UsuarioService,
    private jwtService: JwtService,
){ }

async validateUser(userEmail: string, userPassword: string) {
    const user = await this.userService.getByEmail(userEmail);
    if (user && user.password === userPassword) {
      const { _id, nome, email } = user;
      return { id: _id, nome, email };
    }

    return null;
  }
  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


}
