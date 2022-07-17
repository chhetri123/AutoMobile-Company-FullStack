create database AutoMobile_Company;
use AutoMobile_Company;
drop database AutoMobile_Comapany;
show tables;
CREATE TABLE `customer` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20)  Not null,
  `address` varchar(30) Not null,
  `email` varchar(50) Not null unique,
  `phone` int8  Not null unique, 
  `gender` varchar(10)not null,
  `annual_income` numeric(10,2),
  `dealer_id` INT 
);
show columns from customer;
drop table customer;

CREATE TABLE `sales` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `customer_id` INT,
  `dealer_id` INT,
  `purchase_date` datetime default CURRENT_TIMESTAMP,
  `prices` numeric(12,2)
);

show columns from sales;
drop table sales;


CREATE TABLE `car` (
  `id` INT AUTO_INCREMENT,
  `VIN` varchar(20),
  `name` varchar(20) Not null,
  `url` varchar(300) Not null unique, 
  `customer_id` int,
  `model_id` int,
  `option_id` int,
  `inventory_id` int,
  PRIMARY KEY (`id`, `VIN`)
);

show columns from car;
drop table car;


CREATE TABLE `model` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `url` varchar(200) unique NOT NULL,
  `name` varchar(20) not null,
  `year` year,
  `body_style` varchar(20),
  `brand_id` INT
);

-- alter table model add  url varchar(200) not null;
show columns from model;
drop table model;

CREATE TABLE `brand` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `url` varchar(200) unique not null,
  `name` varchar(20) unique not null
  );
  
show columns from brand;
drop table brand;


CREATE TABLE `dealer` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20) Not null,
  `address` varchar(20) NOT NULL,
  `phone` varchar(15) NOT NULL unique,
  `inventory_id` INT
);
show columns from dealer;
drop table dealer;
ALTER TABLE `dealer` 
ADD COLUMN `inventory_id` INT NULL AFTER `phone`;


CREATE TABLE `options` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `color` varchar(20) NOT NULL,
  `engine_id` int,
  `specs_id` int,
  `model_id` int
);
alter table options modify column model_id int;
show columns from options;
drop table options;

CREATE TABLE `engine` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `power` varchar(20),
  `torque` varchar(20),
  `speed` varchar(20),
  `fuel_type` varchar(20)
);
show columns from engine;
drop table engine;

alter table options modify column description varchar(150);



CREATE TABLE `specs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `front_sus` varchar(100),
  `rear_sus` varchar(100),
  `front_brake` varchar(100),
  `rear_brake` varchar(100)
);
show columns from specs;
drop table specs;


CREATE TABLE `inventory` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20) not null,
  `address` varchar(20) not null
);
ALTER TABLE `inventory` 
DROP FOREIGN KEY `inventory_ibfk_1`;

ALTER TABLE `inventory` 
DROP COLUMN `dealer_id`,
DROP INDEX `dealer_id` ;

show columns from inventory;
drop table inventory;

ALTER TABLE `customer` ADD FOREIGN KEY (`dealer_id`) REFERENCES `dealer` (`id`) on delete set  null;
ALTER TABLE `sales` ADD FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) on delete cascade;
ALTER TABLE `sales` ADD FOREIGN KEY (`dealer_id`) REFERENCES `dealer` (`id`) on delete cascade;

ALTER TABLE `dealer` ADD FOREIGN KEY (`inventory_id`) references `inventory` (`id`) on delete set null;


ALTER TABLE `car` ADD FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) on delete set null;

ALTER TABLE `car` ADD FOREIGN KEY (`model_id`) REFERENCES `model` (`id`) on delete cascade;

ALTER TABLE `car` ADD FOREIGN KEY (`option_id`) REFERENCES `options` (`id`) on delete set null;

ALTER TABLE `car` ADD FOREIGN KEY (`inventory_id`) REFERENCES `inventory` (`id`) on delete set null;

ALTER TABLE `model` ADD FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) on delete cascade;

ALTER TABLE `options` ADD FOREIGN KEY (`engine_id`) REFERENCES `engine` (`id`) on delete set null;

ALTER TABLE `options` ADD FOREIGN KEY (`specs_id`) REFERENCES `specs` (`id`) on delete set null;

ALTER TABLE `options` ADD FOREIGN KEY (`model_id`) REFERENCES `model` (`id`) on delete cascade;
 -- alter table model modify column yar year;-- 

ALTER TABLE `inventory` ADD FOREIGN KEY (`dealer_id`) REFERENCES `dealer` (`id`) on delete set null;
-- DATA INSERT for Testing

--  Customer

insert INTO customer(name, address, email, phone,gender,annual_income) VALUES
("Manish Chhetri","Pokhara","Chhetri@gmail.com","98111851","Male","850000")
,("Kritam Chhetri","Syangja","Chhetri123@gmail.com","999289","Male","8500900");

select * from customer;

-- Dealer
insert  into dealer(name,address,phone) values
("Sandip Chhetri","Hetauda","98562"),
("TaraNath Chhetri","Kritipur","9856289"),
("Sudharshan Chhetri","Prabat","9856285");

select * from dealer;

-- brand
insert into brand(`name`,`url`) values 
( "Audi","https://www.izmostock.com/wp-content/uploads/2015/12/audi.gif"),
("BMW","https://www.izmostock.com/wp-content/uploads/2015/12/bmw.png"),
("Tesla","https://www.izmostock.com/wp-content/uploads/2015/12/tesla.jpg"),
("Lamborghini","https://www.izmostock.com/wp-content/uploads/2015/12/lamborghini.jpg"),
("Honda","https://www.izmostock.com/wp-content/uploads/2015/12/honda.gif"),
("Suzuki","https://www.izmostock.com/wp-content/uploads/2015/12/suzuki.gif"),
("Toyota","https://www.izmostock.com/wp-content/uploads/2015/12/toyota.gif");

select * from brand;

-- Model

insert into model(name,year,body_style,url,brand_id) values
("A1",2014,"Hatchback","https://www.auto-data.net/images/f97/Audi-A1-allstreet-GB_1.jpg",1),
("A2",2022,"Crossover","https://www.auto-data.net/images/f35/Audi-A2-Typ-8Z_1.jpg",1),
("PB18",2014,"Hatchback","https://www.auto-data.net/images/f29/Audi-PB18-e-tron.jpg",1),
("X7",2020,"SUV","https://www.auto-data.net/images/f13/BMW-X7-G07.jpg",2);
truncate table model;
select * from model;

-- Car
insert into car(VIN,name,url,model_id,option_id,inventory_id) values
("WAUAF98E17A024459","Audi A1 SportBack","audi-a1-sportback-2018.png",1,1,1),
("WAUAF98E17A034459","Audi PB18 concept","Audi-PB18-e-tron.png",3,3,1),
("WAUAF98E17A054459","Audi A1 allstreet","Audi-A1-allstreet-GB_1.png",1,4,1),
("WBAWB73509P044425","BMW X7 Steptronic","BMW-X7-G07-facelift-2022_3.jpg",4,2,2),
("WAUAF98E17A064459","Audi A1 citycarver","Audi-A1-Citycarver.png",1,1,1),
("WAUAF98E17A074459","2000 A2 (Typ 8Z)","Audi-A2-Typ-8Z_1.png",2,null,1);
truncate table car;
select * from car;

-- engine

insert into engine (power,torque,speed,fuel_type) values
 ("116","250","200","Diesel Commonrail"),
 ("340","700","245","Diesel"),
 ("238","830","280","Electric Power"),
("150","250","215","Petrol (Gasoline)");

truncate table engine;
select * from engine;

-- specs

insert into specs (front_sus,rear_sus,front_brake,rear_brake) values
("Independent, Spring McPherson, with stabilizer","Semi-independent, coil spring","Ventilated discs","Disc"),
("Double wishbone","Multi-link independent","Ventilated discs","Disc"),
("Double wishbone","Double wishbone","Ventilated discs","Ventilated discs"),
("Independent, Spring McPherson, with stabilizer","Torsion","Ventilated discs","Disc");
select * from specs;
-- option
insert into options(model_id,color,engine_id ,specs_id) values
(1,"Blue",1,1),
(4,"White",2,2),
(3,"Sliver",3,3),
(1,"Black",4,4);


select * from specs;



-- inventory
insert into inventory (name,address,dealer_id) values
 ('Audi ShowRoom','Pokhara NayaBazar',1),
('BMW ShowRoom','Kathmandu Kritipur',2);


-- Some Queries
SET foreign_key_checks = 0;
SET foreign_key_checks = 1;

UPDATE customer SET dealer_id = 1 WHERE id=2;
UPDATE customer SET dealer_id = 2 WHERE id=1;

select c.name ,b.name,VIN from customer as c join purchase as p on c.id=p.customer_id join car as b on b.id=p.car_id;

delete from customer where id=1;
delete from car where id=1;
select * from model;
select * from car ;
select * from model where model.brand_id=1;
select * from car where model_id=1;

select * from car join model on model.id=car.model_id join options on options.id=car.option_id ;
select * from inventory;
select * from (options join engine on engine.id=options.engine_id) join specs on specs.id= options.specs_id where options.id=2;
select I.name,address,I.dealer_id from car join inventory as I on car.inventory_id=I.id where car.id=4;
select * from dealer where id=1;
select * from dealer;









