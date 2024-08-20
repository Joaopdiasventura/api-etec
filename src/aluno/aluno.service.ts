import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class AlunoService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createAlunoDto: CreateAlunoDto) {
    await this.prisma.aluno.create({ data: createAlunoDto });
    return 'Aluno criado com sucesso';
  }

  async findAll() {
    return await this.prisma.aluno.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.aluno.findUnique({ where: { id } });
  }

  async update(id: number, updateAlunoDto: UpdateAlunoDto) {
    await this.prisma.aluno.update({ where: { id }, data: updateAlunoDto });
    return 'Aluno atualizado com sucesso';
  }

  async remove(id: number) {
    await this.prisma.aluno.delete({ where: { id } });
    return 'Aluno deletado com sucesso';
  }
}
