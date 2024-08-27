import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateAlunoDto {
  @IsNotEmpty({ message: "Campo 'nome' não pode vir vazio" })
  @IsString({ message: "Campo 'nome' precisa ser uma string" })
  nome: string;
  @IsNotEmpty({ message: "Campo 'aprovado' não pode vir vazio" })
  @IsBoolean({ message: "Campo 'aprovado' precisa ser um valor booleano" })
  aprovado: boolean;
}
