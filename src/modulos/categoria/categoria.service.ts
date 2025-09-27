import { Injectable } from '@nestjs/common';
import { Categoria } from './entities/categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {

   constructor(
    @InjectRepository(Categoria) 
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}
  
  async obtenerCategorias(): Promise<string[]>{
    const resultados = await this.categoriaRepository.find({
      select: ['nombre'],
    });

    return resultados.map(categoria => categoria.nombre);
  }

}
