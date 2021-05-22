import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionarioService.create(createFuncionarioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.funcionarioService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.funcionarioService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFuncionarioDto: UpdateFuncionarioDto,
  ) {
    return this.funcionarioService.update(id, updateFuncionarioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.funcionarioService.remove(id);
  }
}
