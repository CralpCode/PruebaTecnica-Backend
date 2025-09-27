import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { FilterProductoDto } from './dto/filter-producto.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post('categoria-anio')
  obtenerProductoCategoriaAnio(@Body() filterDto: FilterProductoDto) {
    return this.productoService.obtenerProductoCategoriaAnio(filterDto);
  }

}
