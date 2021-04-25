import { Cliente } from './entities/cliente.entity';
import { Inject, Injectable } from '@nestjs/common';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';
import { Model } from 'mongoose';

@Injectable()
export class ClienteService {
  constructor(
      @Inject('CLI_MODEL')
      private cliModel: Model<Cliente>,
  ) {}

  async create(createCliDto: CreateClienteDto): Promise<Cliente> {
    const createdCli = new this.cliModel(createCliDto);
    return await createdCli.save();
  }

  async findAll(): Promise<Cliente[]> {
    return await this.cliModel.find().exec();
  }

  async findOne(id: string) {
    return await this.cliModel.findOne({ _id: id }).exec();
  }
  

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    return await this.cliModel.updateOne({ _id: id }, updateClienteDto).exec();
    //return this.findOne(id);
  }

  async remove(id: string) {
    return await this.cliModel.remove({ _id: id }).exec();
  }
}
