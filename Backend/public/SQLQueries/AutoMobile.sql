
use sql6508240;
drop database AutoMobile_Comapany;
GRANT TRIGGER ON sql6508240.* TO sql6508240@sql6.freesqldatabase.com;
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

CREATE TABLE `sales` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `customer_id` INT,
  `dealer_id` INT,
  `purchase_date` timestamp default current_timestamp,
  `prices` numeric(12,2)
);
create trigger `sale_purchases_date` before insert
    on `sales`
    for each row 
    set new.`purchase_date` = now();

CREATE TABLE `car` (
  `id` INT AUTO_INCREMENT,
  `VIN` varchar(20),
  `name` varchar(50) Not null,
  `url` varchar(300) Not null unique, 
  `price` decimal(10,2) not null,
  `customer_id` int,
  `model_id` int,
  `option_id` int,
  `inventory_id` int,
  PRIMARY KEY (`id`, `VIN`)
);
CREATE TABLE `model` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `url` varchar(200) unique,
  `name` varchar(30) unique,
  `year` date,
  `body_style` varchar(20),
  `brand_id` INT
);

CREATE TABLE `brand` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `url` varchar(200) unique not null,
  `name` varchar(20) unique not null
  );

CREATE TABLE `dealer` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20) Not null,
  `address` varchar(20) NOT NULL,
  `phone` varchar(15) NOT NULL unique,
  `inventory_id` INT
);

CREATE TABLE `options` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `color` varchar(20) NOT NULL,
  `engine_id` int,
  `specs_id` int,
  `model_id` int
);


CREATE TABLE `engine` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `power` varchar(50),
  `torque` varchar(50),
  `speed` varchar(20),
  `fuel_type` varchar(40)
);

CREATE TABLE `specs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `front_sus` varchar(100),
  `rear_sus` varchar(100),
  `front_brake` varchar(100),
  `rear_brake` varchar(100)
);

CREATE TABLE `inventory` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20) not null,
  `address` varchar(20) not null
);

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

-- DATA INSERT for Testing

--  Customer

-- Dealer
insert  into dealer(name,address,phone) values
("Sandip Chhetri","Hetauda","98562"),
("TaraNath Chhetri","Kritipur","9856289"),
("Sudharshan Chhetri","Prabat","9856285");


-- brand
insert into brand(`name`,`url`) values 
( "Audi","https://www.izmostock.com/wp-content/uploads/2015/12/audi.gif"),
("BMW","https://www.izmostock.com/wp-content/uploads/2015/12/bmw.png"),
("Tesla","https://www.izmostock.com/wp-content/uploads/2015/12/tesla.jpg"),
("Lamborghini","https://www.izmostock.com/wp-content/uploads/2015/12/lamborghini.jpg"),
("Honda","https://www.izmostock.com/wp-content/uploads/2015/12/honda.gif"),
("Suzuki","https://www.izmostock.com/wp-content/uploads/2015/12/suzuki.gif"),
("Toyota","https://www.izmostock.com/wp-content/uploads/2015/12/toyota.gif"),
('Abarth', 'https://www.izmostock.com/wp-content/uploads/2015/12/abarth.jpg');


-- Model

insert into model(url,name,year,body_style,brand_id) values
('https://www.auto-data.net/images/f97/Audi-A1-allstreet-GB_1.jpg', 'A1', '2014-01-01', 'Hatchback', 1)
, ('https://www.auto-data.net/images/f35/Audi-A2-Typ-8Z_1.jpg', 'A2', '2022-01-01', 'Crossover', 1)
, ('https://www.auto-data.net/images/f29/Audi-PB18-e-tron.jpg', 'PB18', '2014-10-11', 'Hatchback', 1)
,('https://www.auto-data.net/images/f13/BMW-X7-G07.jpg', 'X7', '2020-10-20', 'SUV', 2),
('https://www.auto-data.net/images/f82/Tesla-Model-3-facelift-2020.jpg', 'Model 3', '2020-01-01', 'Sedan, Fastback', 3),
('https://www.auto-data.net/images/f49/Abarth-124-GT_1.jpg', '124 Spider', '2018-01-01', 'Roadster', 8);

-- options
insert into specs( id, front_sus, rear_sus, front_brake, rear_brake) values
(1, 'Independent, Spring McPherson, with stabilizer', 'Semi-independent, coil spring', 'Ventilated discs', 'Disc'),
(2, 'Double wishbone', 'Multi-link independent', 'Ventilated discs', 'Disc'),
(4, 'Independent, Spring McPherson, with stabilizer', 'Torsion', 'Ventilated discs', 'Disc');


-- Car
insert into car(VIN,name,url,model_id,option_id,inventory_id) values
("WAUAF98E17A024459","Audi A1 SportBack","audi-a1-sportback-2018.png",1,1,1),
("WAUAF98E17A034459","Audi PB18 concept","Audi-PB18-e-tron.png",3,3,1),
("WAUAF98E17A054459","Audi A1 allstreet","Audi-A1-allstreet-GB_1.png",1,4,1),
("WBAWB73509P044425","BMW X7 Steptronic","BMW-X7-G07-facelift-2022_3.jpg",4,2,2),
("WAUAF98E17A064459","Audi A1 citycarver","Audi-A1-Citycarver.png",1,1,1),
("WAUAF98E17A074459","2000 A2 (Typ 8Z)","Audi-A2-Typ-8Z_1.png",2,null,1);

-- engine


insert into engine (id,power,torque,speed,fuel_type) values
(1, '116', '250', '200', 'Diesel Commonrail'),
(2, '340', '700', '245', 'Diesel'),
(4, '150', '250', '215', 'Petrol (Gasoline)');


-- specs

insert into specs (front_sus,rear_sus,front_brake,rear_brake) values
("Independent, Spring McPherson, with stabilizer","Semi-independent, coil spring","Ventilated discs","Disc"),
("Double wishbone","Multi-link independent","Ventilated discs","Disc"),
("Double wishbone","Double wishbone","Ventilated discs","Ventilated discs"),
("Independent, Spring McPherson, with stabilizer","Torsion","Ventilated discs","Disc");

-- option



-- Options
insert into options( id, color, engine_id, specs_id, model_id) values
(1, "Blue", 1, 1, 1),
(2, "White", 2, 2, 4),
(4, "Black", 4, 4, 1);

-- inventory

insert into inventory(id, name, address) values
(1, 'Audi ShowRoom', 'Pokhara NayaBazar'),
(2, 'BMW ShowRoom', 'Kathmandu Kritipur'),
(4, 'Tesla Showroom kathmandu', 'Kathmandu Bagbazar'),
(5, "Brother's Abarth Showroom", 'Hetauda');

-- Dealer

insert into dealer(id, name, address, phone, inventory_id) values
(1, 'Sandip Chhetri', 'Hetauda', '98562', 1),
(2, 'TaraNath Chhetri', 'Kritipur', '9856289', 4),
(3, 'Sudharshan Chhetri', 'Prabat', '9856285', 4),
(5, 'Himmat chhetri', 'pokhara', '981456756', 2),
(978, 'Khem Raj Paneru', 'pokhara', '9814567568', 2),
(983, 'Prashant Gurung', 'Pokhara,newRoad', '98562378', 1),
(986, 'Mirta Chhetri', 'Chitwan ', '9846286392', 1),
(988, 'Aman Chhetri', 'Hetauda . 5 Basamadi', '057523425', 5),
(989, 'Aswin Karki', 'chitwan , 5 sauraha', '9856237412', 5);

-- car

insert into car (id, VIN, name, url, price, customer_id, model_id, option_id, inventory_id) values
(2, 'WAUAF98E17A034459', 'Audi PB18 concept', 'Audi-PB18-e-tron.png', 3985660.00, NULL, 3, 1, 1
),
(3, 'WAUAF98E17A054459', 'Audi A1 allstreet', 'Audi-A1-allstreet-GB_1.png', 5098231.00, NULL, 1, 4, 1
),
(4, 'WBAWB73509P044425', 'BMW X7 Steptronic', 'BMW-X7-G07-facelift-2022_3.png', 13000999.00, NULL, 4, 2, 2
),
(5, 'WAUAF98E17A064459', 'Audi A1 citycarver', 'Audi-A1-Citycarver.png', 8963010.00, NULL, 1, 1, 1
),
(6, 'WAUAF98E17A074459', '2000 A2 (Typ 8Z)', 'Audi-A2-Typ-8Z_1.png', 8909999.00, NULL, 2, 1, 1
);



-- Some Queries


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



ALTER TABLE `inventory` 
DROP FOREIGN KEY `inventory_ibfk_1`;

ALTER TABLE `inventory` 
DROP COLUMN `dealer_id`,
DROP INDEX `dealer_id` ;



show columns from model;
drop table model;

create trigger `brand_date_created` before insert
    on `brand`
    for each row 
    set new.`date_created` = now();
        

ALTER TABLE `model` 
CHANGE COLUMN `name` `name` VARCHAR(20) NULL ,
ADD UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE;
;


