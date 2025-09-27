import { IsString, IsNumberString, IsOptional } from 'class-validator';

export class FilterProductoDto {
  @IsOptional()
  @IsString()
  readonly categoria?: string;

  @IsOptional()
  @IsNumberString() 
  readonly anio?: string;
}