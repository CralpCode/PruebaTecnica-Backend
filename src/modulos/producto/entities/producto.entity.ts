import { on } from "events";
import { Categoria } from "src/modulos/categoria/entities/categoria.entity";
import { Venta } from "src/modulos/venta/entities/venta.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    CodigoProducto: number;

    @Column({length: 255, unique: true})
    Nombre: string;

    @Column()
    CodigoCategoria: number;

    @ManyToOne(() => Categoria, (categoria) => categoria.productos,{
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'CodigoCategoria'})
    categoria: Categoria;
    
    @OneToMany(() => Venta, venta => venta.producto)
    ventas: Venta[];
}
