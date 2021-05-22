import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { JwtAuthGuard } from './../auth/shared/jwt-auth.guard';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
      @Param('id') id: string,
      @Body() updateClienteDto: UpdateClienteDto,
  ) {
    return this.clienteService.update(id, updateClienteDto);
     }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteService.remove(id);
  } 
}
