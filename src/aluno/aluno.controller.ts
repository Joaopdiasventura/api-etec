import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  async create(@Body() createAlunoDto: CreateAlunoDto) {
    if (await this.alunoService.findByName(createAlunoDto.nome))
      throw new BadRequestException('Já existe um aluno com esse nome');
    return { message: await this.alunoService.create(createAlunoDto) };
  }

  @Get()
  async findAll() {
    return await this.alunoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const aluno = await this.alunoService.findOne(id);
    if (!aluno) throw new NotFoundException('Aluno não encontrado');
    return aluno;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAlunoDto: UpdateAlunoDto,
  ) {
    const aluno = await this.alunoService.findOne(id);
    if (!aluno) throw new NotFoundException('Aluno não encontrado');
    if ('id' in updateAlunoDto) {
      const { id, ...data } = updateAlunoDto;
      updateAlunoDto = data;
    }
    return { message: await this.alunoService.update(id, updateAlunoDto) };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const aluno = await this.alunoService.findOne(id);
    if (!aluno) throw new NotFoundException('Aluno não encontrado');
    return { message: await this.alunoService.remove(id) };
  }
}
