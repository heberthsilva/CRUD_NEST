import {Inject, Injectable} from '@nestjs/common';
import {CreateVendaDto} from './dto/create-venda.dto';
import {UpdateVendaDto} from './dto/update-venda.dto';
import {Model} from "mongoose";
import {Venda} from "./entities/venda.entity";

@Injectable()
export class vendaService {
  constructor(
      @Inject('VENDA_MODEL')
      private vendaModel: Model<Venda>,
  ) {}

  async create(createVendaDto: CreateVendaDto): Promise<Venda> {
    const createdVenda = new this.vendaModel(createVendaDto);
    return createdVenda.save();
  }

  async findAll(): Promise<Venda[]> {
    return this.vendaModel.find().exec();
  }

  async findOne(id: string) {
    return this.vendaModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateVendaDto: UpdateVendaDto) {
    return this.vendaModel.updateOne({ _id: id }, updateVendaDto).exec();
  }

  async remove(id: string) {
    return this.vendaModel.remove({ _id: id }).exec();
  }
}
