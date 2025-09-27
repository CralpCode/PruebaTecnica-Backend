create Database PruebaTecnica;

use PruebaTecnica;

create table categoria(
	CodigoCategoria int primary key auto_increment,
	Nombre varchar(255) not null unique,
    Estado boolean not null
);

create table producto(
	CodigoProducto int primary key auto_increment,
	Nombre varchar(255) not null,
	CodigoCategoria int not null,
    Estado boolean not null,
	FOREIGN KEY (CodigoCategoria) REFERENCES categoria(CodigoCategoria)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

create table venta(
	CodigoVenta int primary key auto_increment,
	Fecha date,
	CodigoProducto  int not null,
    Estado boolean not null,
	FOREIGN KEY (CodigoProducto) REFERENCES producto(CodigoProducto) 
    ON DELETE RESTRICT 
    ON UPDATE CASCADE
);

INSERT INTO categoria (Nombre, Estado) VALUES 
('Ropa', true),
('Juguetes', true),
('Zapatos', true),
('Dispositivo Electrónico', true),
('Utiles', true);

INSERT INTO producto (Nombre, CodigoCategoria, Estado) VALUES
('Blusa Azul', 1, true),
('Pelota', 2, true),
('Pantalon de Lona', 1, true),
('Telefono', 4, true),
('Lapiz', 5, true),
('Sueter Negro', 1, true),
('Laptop', 4, true),
('Botas cafes', 3, true),
('Television', 4, true),
('Cuaderno', 5, true);


INSERT INTO venta (Fecha, CodigoProducto, Estado) VALUES 
('2018-03-05', 1, true),
('2018-03-25', 2, true),
('2018-07-24', 3, true),
('2018-10-05', 4, true),
('2018-11-21', 2, true),
('2018-12-03', 1, true),
('2019-01-30', 5, true),
('2019-03-22', 10, true),
('2019-04-05', 9, true),
('2019-05-25', 8, true),
('2019-07-17', 7, true),
('2019-09-13', 6, true),
('2020-01-19', 1, true),
('2020-02-20', 2, true),
('2020-05-13', 3, true),
('2020-06-19', 9, true),
('2020-07-23', 6, true);


INSERT INTO venta(Fecha, CodigoProducto, Estado) VALUES
('2019-01-10', 4, true),
('2019-02-15', 5, true),
('2019-03-10', 6, true),
('2019-04-20', 7, true),
('2019-06-11', 3, true),
('2019-07-01', 2, true),
('2019-08-18', 1, true),
('2019-09-25', 8, true),
('2019-10-13', 9, true),
('2019-12-31', 10, true);
