import {Inject, Injectable} from '@nestjs/common';
import {CreateProdutoDto} from './dto/create-produto.dto';
import {UpdateProdutoDto} from './dto/update-produto.dto';
import {Model} from "mongoose";
import {Produto} from "./entities/produto.entity";

@Injectable()
export class produtoService {
  constructor(
      @Inject('PRODUTO_MODEL')
      private produtoModel: Model<Produto>,
  ) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    const createdProduto = new this.produtoModel(createProdutoDto);
    return createdProduto.save();
  }

  async findAll(): Promise<Produto[]> {
    return this.produtoModel.find().exec();
  }

  async findOne(id: string) {
    return this.produtoModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateProdutoDto: UpdateProdutoDto) {
    return this.produtoModel.updateOne({ _id: id }, updateProdutoDto).exec();
  }

  async remove(id: string) {
    return this.produtoModel.remove({ _id: id }).exec();
  }
}
