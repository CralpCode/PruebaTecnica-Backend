import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VentaService } from './venta.service';

@Controller('venta')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

 

  @Get('anio')
  obtenerAnioVenta() {
    return this.ventaService.obtenerAnioVenta();
  }
}
