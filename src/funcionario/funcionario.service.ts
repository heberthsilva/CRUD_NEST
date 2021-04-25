import { Funcionario } from './entities/funcionario.entity';
import { Inject, Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { Model } from 'mongoose';

@Injectable()
export class FuncionarioService {
  constructor(
      @Inject('FUNC_MODEL')
      private funcModel: Model<Funcionario>,
  ) {}

  async create(createFuncDto: CreateFuncionarioDto): Promise<Funcionario> {
    const createdFunc = new this.funcModel(createFuncDto);
    return await createdFunc.save();
  }

  async findAll(): Promise<Funcionario[]> {
    return await this.funcModel.find().exec();
  }

  async findOne(id: string) {
    return await this.funcModel.findOne({ _id: id }).exec();
  }
  

  async update(id: string, updateFuncionarioDto: UpdateFuncionarioDto) {
    return await this.funcModel.updateOne({ _id: id }, updateFuncionarioDto).exec();
    //return this.findOne(id);
  }

  async remove(id: string) {
    return await this.funcModel.remove({ _id: id }).exec();
  }
}
