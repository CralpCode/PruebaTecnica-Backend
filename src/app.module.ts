import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductoModule } from './modulos/producto/producto.module';
import { CategoriaModule } from './modulos/categoria/categoria.module';
import { Producto } from './modulos/producto/entities/producto.entity';
import { Categoria } from './modulos/categoria/entities/categoria.entity';
import { VentaModule } from './modulos/venta/venta.module';
import { Venta } from './modulos/venta/entities/venta.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'carlos',
      password: '12345678',
      database: 'PruebaTecnica',
      entities: [Producto, Categoria, Venta],
      synchronize: true,
    }),
    ProductoModule,
    CategoriaModule,
    VentaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
