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

-- alter table model modify column year year;
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
  `phone` varchar(15) NOT NULL unique
);
show columns from dealer;
drop table dealer;


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
  `address` varchar(20) not null,
  `dealer_id` int
);
show columns from inventory;
drop table inventory;

ALTER TABLE `customer` ADD FOREIGN KEY (`dealer_id`) REFERENCES `dealer` (`id`) on delete set  null;
ALTER TABLE `sales` ADD FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) on delete cascade;
ALTER TABLE `sales` ADD FOREIGN KEY (`dealer_id`) REFERENCES `dealer` (`id`) on delete cascade;




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

-- Car
insert into car(VIN,name,url) values
("WAUAF98E17A024459","Audi A1 SportBack","https://www.auto-data.net/images/f24/file8100663.jpg"),
("WBAWB73509P044425","BMW X7 Steptronic","https://www.auto-data.net/images/f13/BMW-X7-G07.jpg");
select * from car;


-- brand
insert into brand(`name`) values ( "Audi"),
("BMW"),
("Honda"),
("Lamborghini"),
("Suzuki"),
("Toyota"),
("Tesla");

select * from brand;

-- Model

insert into model(name,year,body_style,brand_id) values("A1",2014,"Hatchback",1),
("X7",2020,"SUV",2);
select * from model;




-- engine

insert into engine (modification,power,torque,speed,fuel_type) values ("1.6 TDI (116 Hp) S tronic","116 Hp @ 1500-3250 rpm","250 Nm @ 1500-3000 rpm","200","Diesel Commonrail"),("40d (340 Hp) xDrive MHEV Steptronic","340 Hp @ 4400 rpm","700 Nm @ 1750-2250 rpm.","245","Diesel");


select * from engine;

-- specs

insert into specs (front_sus,rear_sus,front_brake,rear_brake) values
("Independent, Spring McPherson, with stabilizer","Semi-independent, coil spring","Ventilated discs","Disc"),
("Double wishbone","Multi-link independent","Ventilated discs","Disc");

select * from specs;
-- option
insert into options(model_id,description,engine_id ,specs_id) values
(1,"Low aggressive front three",1,1),
(2,"The Internal combustion engine (ICE) and the electric motor permanently drive the four wheels of the car with the ability to work only in mixed mode",2,2);

select * from specs;

-- Some Queries
SET foreign_key_checks = 0;
SET foreign_key_checks = 1;

UPDATE customer SET dealer_id = 1 WHERE id=2;
UPDATE customer SET dealer_id = 2 WHERE id=1;

select c.name ,b.name,VIN from customer as c join purchase as p on c.id=p.customer_id join car as b on b.id=p.car_id;

delete from customer where id=1;
delete from car where id=1;







