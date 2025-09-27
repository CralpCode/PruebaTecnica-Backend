import { Producto } from "src/modulos/producto/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
  
  @PrimaryGeneratedColumn({ name: 'CodigoCategoria' }) 
  id: number; 

  @Column({ name: 'nombre' })
  nombre: string;

  @OneToMany(() => Producto, (producto) => producto.categoria)
  productos: Producto[]
}
