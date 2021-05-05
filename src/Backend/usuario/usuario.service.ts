import { Usuario } from './entities/usuario.entity';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Model } from 'mongoose';

@Injectable()
export class UsuarioService {
  constructor(
      @Inject('USR_MODEL')
      private usrModel: Model<Usuario>,
  ) {}

  async create(createUsrDto: CreateUsuarioDto): Promise<Usuario> {
    const createdUsr = new this.usrModel(createUsrDto);
    return await createdUsr.save();
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usrModel.find().exec();
  }

  async findOne(id: string) {
    return await this.usrModel.findOne({ _id: id }).exec();
  }
  

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.usrModel.updateOne({ _id: id }, updateUsuarioDto).exec();
    //return this.findOne(id);
  }

  async remove(id: string) {
    return await this.usrModel.remove({ _id: id }).exec();
  }
}
