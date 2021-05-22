import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { produtoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: produtoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  } 

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(id, updateProdutoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoService.remove(id);
  }
}
