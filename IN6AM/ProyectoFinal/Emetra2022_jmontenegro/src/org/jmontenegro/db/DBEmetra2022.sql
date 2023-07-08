/**
Nombre: Juan Francisco Montenegro Aguirre
Carné: 2018457
Código Técnico: IN5AM
Fecha de Creación: 26/09/2022
Fechas de modificaciones: 26/09/2022
**/

drop database if exists DBEmetra2022;
create database DBEmetra2022;
use DBEmetra2022;

create table Vecinos(
	NIT VARCHAR(15) not null,
    DPI BIGINT(13) not null,
    nombres varchar(100) not null,
    apellidos varchar(100) not null,
    direccion varchar(200) not null,
    municipalidad varchar(45) not null,
    codigoPostal int not null,
    telefono varchar(8) not null,
    primary key (NIT)
);

create table Vehiculos(
	placa VARCHAR(15) not null,
    marca VARCHAR(45) not null,
    modelo VARCHAR(45) not null,
    tipoDeVehiculo VARCHAR(60) not null,
    Vecinos_NIT VARCHAR(15) not null,
    primary key (placa),
    constraint FK_Vecinos_Vehiculos foreign key (Vecinos_NIT)
		references Vecinos (NIT)
);

-- PROCEDIMIENTOS ALMACENADOS PARA LA ENTIDAD VECINOS
	-- AGREGAR
    
Delimiter $$
create procedure sp_AgregarVecino(in NITV varchar(15), in DPIV bigInt(13), in nombresV varchar(100), in apellidosV varchar(100), in direccionV varchar(200), in municipalidadV varchar(45), in codigoPostalV int, in telefonoV varchar(8))
	Begin
		insert into Vecinos(NIT, DPI, nombres, apellidos, direccion, municipalidad, codigoPostal, telefono)
			values(NITV, DPIV, nombresV, apellidosV, direccionV, municipalidadV, codigoPostalV, telefonoV);
    End$$

Delimiter ;


	-- LISTAR
    
Delimiter $$
create procedure sp_ListarVecinos()
	Begin
			Select
			V.NIT,
			V.DPI,
			V.nombres,
			V.apellidos,
			V.direccion,
			V.municipalidad,
			V.codigoPostal,
			V.telefono
			from Vecinos V ;
	End$$
Delimiter ;

	-- EDITAR
Delimiter $$
create procedure sp_EditarVecino(in NITV varchar(15), in DPIV bigInt(13), in nombresV varchar(100), in apellidosV varchar(100), in direccionV varchar(200), in municipalidadV varchar(45), in codigoPostalV int, in telefonoV varchar(8))
	begin
		update Vecinos set
			DPI=DPIV,
			nombres = nombresV,
			apellidos = apellidosV,
			direccion = direccionV,
			municipalidad = municipalidadV,
			codigoPostal = codigoPostalV,
			telefono = telefonoV
				where NIT = NITV ;
    End$$
Delimiter ;

	-- ELIMINAR
Delimiter $$
create procedure sp_EliminarVecino(in NITV varchar(15))
	Begin
		delete from Vecinos where NIT = NITV;
    End$$
Delimiter ;

	-- LLAMADAS A PROCEDIMIENTOS DE VECINOS
	call sp_AgregarVecino('1','001','Juan','Mendez','2calle 2-21','Guatemala','502','12345678');
    call sp_AgregarVecino('2','002','Diego','Hernandez','1calle 6-34','Guatemala','502','87654321');
    call sp_EditarVecino('2','123','Juan Diego','Hernan','2calle 6-34','Mixco','501','86754321');
    call sp_EliminarVecino('1');
    call sp_ListarVecinos();

-- PROCEDIMIENTOS ALMACENADOS PARA LA ENTIDAD VEHICULOS
	-- AGREGAR

Delimiter $$
create procedure sp_AgregarVehiculo(in placaV varchar(15), in marcaV varchar(45), in modeloV varchar(45), in tipoDeVehiculoV varchar(60), in Vecinos_NITV varchar(15))
	begin
		insert into Vehiculos(placa, marca, modelo, tipoDeVehiculo, Vecinos_NIT)
			values(placaV, marcaV, modeloV, tipoDeVehiculoV, Vecinos_NITV);
    End$$
Delimiter ;

	-- LISTAR

Delimiter $$
create procedure sp_ListarVehiculos()
	Begin
		Select 
        VE.placa,
        VE.marca,
        VE.modelo,
        VE.tipoDeVehiculo,
        VE.Vecinos_NIT
			from Vehiculos VE;
    End$$
Delimiter ;

	-- EDITAR

Delimiter $$
create procedure sp_EditarVehiculo(in placaV varchar(15), in marcaV varchar(45), in modeloV varchar(45), in tipoDeVehiculoV varchar(60), in Vecinos_NITV varchar(15))
	Begin
		update vehiculos set
        marca = marcaV,
        modelo = modeloV,
        tipoDeVehiculo = tipoDeVehiculoV,
        Vecinos_NIT = Vecinos_NITV
			where placa = placaV;
        
    End$$
Delimiter ;

	-- Eliminar
    
Delimiter $$
create procedure sp_EliminarVehiculo(in placaV varchar(15))
	Begin
		delete from Vehiculos where placa = placaV;
    End$$
Delimiter ;

	-- LLAMADA A PROCEDIMIENTOS DE VEHICULOS
    call sp_AgregarVehiculo('p001','honda','2023','particular','2');
    call sp_AgregarVehiculo('p002','Toyota','2021','particular','2');
    call sp_EditarVehiculo('p001','Honda','2022','DeTrabajo','2');
    call sp_EliminarVehiculo('p002');
    call sp_ListarVehiculos();
    
 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';