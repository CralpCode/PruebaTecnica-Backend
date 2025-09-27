import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VentaService {

  constructor(
      @InjectRepository(Venta) 
      private readonly ventaRepository: Repository<Venta>,
  ) {}

  async obtenerAnioVenta() {
    const query = `
      SELECT DISTINCT EXTRACT(YEAR FROM Fecha) AS year
      FROM venta
      ORDER BY year DESC;
    `;

    const resultados = await this.ventaRepository.query(query);

    return resultados.map(item => Number(item.year));
  }

  
}
