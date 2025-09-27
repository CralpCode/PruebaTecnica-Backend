import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilterProductoDto } from './dto/filter-producto.dto';

@Injectable()
export class ProductoService {

  constructor(
      @InjectRepository(Producto) 
      private readonly productoRepository: Repository<Producto>,
    ) {}

  async obtenerProductoCategoriaAnio(filterDto : FilterProductoDto) : Promise<Producto[]> {
     
   const { categoria, anio } = filterDto;

    const queryBuilder = this.productoRepository.createQueryBuilder('producto');

    queryBuilder.select('producto.Nombre', 'nombre');

    if (categoria) {
      queryBuilder
        .innerJoin('producto.categoria', 'cat') 
        .andWhere('cat.Nombre = :categoria', { categoria });
    }

    if (anio) {
      queryBuilder
        .innerJoin('producto.ventas', 'venta') 
        .andWhere('YEAR(venta.Fecha) = :anio', { anio });
    }

   
    queryBuilder.distinct(true);

    const rawResults = await queryBuilder.getRawMany();

    return rawResults.map(item => item.nombre);
    
  }

}
