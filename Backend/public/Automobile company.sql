create database AutoMobile_Company;
use AutoMobile_Company;
drop database AutoMobile_Comapany;
show tables;
CREATE TABLE `customer` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varcharacter(20) not null,
  `address` varcharacter(30) not null,
  `email` varcharacter(50) unique ,
  `phone` int8 unique not null,
  `gender` varchar(10) ,
  `annual_income` int,
  `dealer_id` INT
);
show columns from customer;
drop table customer;


CREATE TABLE `purchase` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `customer_id` int,
  `car_id` INT,
  `purchase_date`datetime default CURRENT_TIMESTAMP
);
drop table purchase;
show columns from purchase;


CREATE TABLE `car` (
  `id` INT AUTO_INCREMENT,
  `VIN` varchar(20) ,
  `name` varchar(20)not null,
  `url` varchar(150) not null,
  `model_id` int,
  `option_id` int,
  PRIMARY KEY (`id`, `VIN`)
);
show columns from car;
drop table car;
CREATE TABLE `model` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20) not null,
  `year` datetime ,
  `body_style` varchar(20) not null,
  `brand_id` INT
);

show columns from model;

CREATE TABLE `brand` (
  `id`INT PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20)
);

CREATE TABLE `dealer` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `address` varchar(20) NOT NULL,
  `phone` varchar(15) NOT NULL unique
);
show columns from dealer;
drop table dealer;
CREATE TABLE `option` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `description` varchar(50),
  `engine_id` int,
  `specs_id` int,
  `model_id` varchar(20)
);

CREATE TABLE `engine` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `modification` varchar(30),
  `power` varchar(20),
  `torque` varchar(20),
  `speed` varchar(20),
  `fuel_type` varchar(20)
);

CREATE TABLE `specs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `front_sus` varchar(30),
  `rear_sus` varchar(30),
  `front_brake` varchar(30),
  `rear_brake` varchar(30)
);

ALTER TABLE `customer` ADD FOREIGN KEY (`dealer_id`) REFERENCES `dealer` (`id`);

ALTER TABLE `purchase` ADD FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);

ALTER TABLE `purchase` ADD FOREIGN KEY (`car_id`) REFERENCES `car` (`id`);

ALTER TABLE `car` ADD FOREIGN KEY (`model_id`) REFERENCES `model` (`id`);

ALTER TABLE `option` ADD FOREIGN KEY (`id`) REFERENCES `car` (`option_id`);

ALTER TABLE `brand` ADD FOREIGN KEY (`id`) REFERENCES `model` (`brand_id`);

ALTER TABLE `option` ADD FOREIGN KEY (`engine_id`) REFERENCES `engine` (`id`);

ALTER TABLE `option` ADD FOREIGN KEY (`specs_id`) REFERENCES `specs` (`id`);

ALTER TABLE `option` ADD FOREIGN KEY (`model_id`) REFERENCES `model` (`id`);

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

-- Purchase 
truncate table purchase;
insert into purchase(`customer_id`,
  `car_id`) values (1,2),(2,1);
select * from purchase;

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





-- Some Queries
UPDATE customer SET dealer_id = 1 WHERE id=2;
UPDATE customer SET dealer_id = 2 WHERE id=1;

select c.name ,b.name,VIN from customer as c join purchase as p on c.id=p.customer_id join car as b on b.id=p.car_id;









