import { Producto } from "src/modulos/producto/entities/producto.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Venta {
    @PrimaryGeneratedColumn()
    CodigoVenta: number;
    
    @Column({type: 'date'})
    Fecha : Date;

    @Column()
    CodigoProducto: number;

    @ManyToOne(() => Producto, (producto) => producto.ventas,{
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'CodigoProducto'})
    producto: Producto;

}
