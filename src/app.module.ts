import { Module } from '@nestjs/common';
import { AlunoModule } from './aluno/aluno.module';

@Module({
  imports: [AlunoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
