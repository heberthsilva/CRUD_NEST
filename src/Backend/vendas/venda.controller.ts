import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { vendaService } from './venda.service';
import { CreateVendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';

@Controller('venda')
export class VendaController {
  constructor(private readonly vendaService: vendaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createVendaDto: CreateVendaDto) {
    return this.vendaService.create(createVendaDto);
  } 

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.vendaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendaService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendaDto: UpdateVendaDto) {
    return this.vendaService.update(id, updateVendaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendaService.remove(id);
  } 
}
