/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 10.4.22-MariaDB : Database - ipurse
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ipurse` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `ipurse`;

/*Table structure for table `about_list` */

DROP TABLE IF EXISTS `about_list`;

CREATE TABLE `about_list` (
  `aboutList_id` int(11) NOT NULL AUTO_INCREMENT,
  `aboutList_num` int(11) NOT NULL,
  `aboutList_desc` varchar(255) NOT NULL,
  PRIMARY KEY (`aboutList_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

/*Data for the table `about_list` */

insert  into `about_list`(`aboutList_id`,`aboutList_num`,`aboutList_desc`) values 
(1,1,'Very reasonable price'),
(2,2,'Worldwide distribution of products'),
(3,3,'We are a bunch of game enthusiasts.'),
(4,4,'We do provide high-quality service.'),
(5,5,'We have an excellent source of information to provide.'),
(6,6,'We adore video games!');

/*Table structure for table `about_us` */

DROP TABLE IF EXISTS `about_us`;

CREATE TABLE `about_us` (
  `aboutUs_id` int(11) NOT NULL AUTO_INCREMENT,
  `aboutUs_desc` text NOT NULL,
  `aboutUs_imgName` varchar(255) NOT NULL,
  `aboutUs_img` varchar(255) NOT NULL,
  PRIMARY KEY (`aboutUs_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

/*Data for the table `about_us` */

insert  into `about_us`(`aboutUs_id`,`aboutUs_desc`,`aboutUs_imgName`,`aboutUs_img`) values 
(1,'Gaming is not a crime. “Don\'t wish it were easier, wish you were better”','about','about.jpg');

/*Table structure for table `address` */

DROP TABLE IF EXISTS `address`;

CREATE TABLE `address` (
  `address_id` int(11) NOT NULL AUTO_INCREMENT,
  `address_loc` varchar(255) NOT NULL,
  `address_icon` varchar(255) NOT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

/*Data for the table `address` */

insert  into `address`(`address_id`,`address_loc`,`address_icon`) values 
(1,'Parma Via Moderna','glyphicon glyphicon-map-marker'),
(2,'Sant\'Agata Bolognese','glyphicon glyphicon-map-marker'),
(3,'BO, Italy','glyphicon glyphicon-map-marker'),
(4,'Manila, Philippines','glyphicon glyphicon-map-marker');

/*Table structure for table `blogs` */

DROP TABLE IF EXISTS `blogs`;

CREATE TABLE `blogs` (
  `blog_id` int(11) NOT NULL AUTO_INCREMENT,
  `blog_title` varchar(255) NOT NULL,
  `blog_creator` varchar(255) NOT NULL,
  `blog_date` date NOT NULL,
  `blog_comments` varchar(255) NOT NULL,
  `blog_likes` varchar(255) NOT NULL,
  `blog_desc` text NOT NULL,
  `blog_img` varchar(255) NOT NULL,
  PRIMARY KEY (`blog_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `blogs` */

insert  into `blogs`(`blog_id`,`blog_title`,`blog_creator`,`blog_date`,`blog_comments`,`blog_likes`,`blog_desc`,`blog_img`) values 
(1,'Quisque in lectus erat','Admin','2022-05-14','20 Comments','300 Likes','Aliquam suscipit neque massa, eu maximus felis gravida vel. Vestibulum lacinia risus risus, ut iaculis felis fermentum id. Cras at vulputate velit, vitae vestibulum augue. Etiam lorem nunc, mattis ac dignissim sit amet, varius et ex. Phasellus eleifend nibh justo, pulvinar cursus sapien commodo non.','ng1.jpg'),
(2,'In finibus vel metus','Admin','2022-04-21','25 Comments','310 Likes','Aliquam suscipit neque massa, eu maximus felis gravida vel. Vestibulum lacinia risus risus, ut iaculis felis fermentum id. Cras at vulputate velit, vitae vestibulum augue. Etiam lorem nunc, mattis ac dignissim sit amet, varius et ex. Phasellus eleifend nibh justo, pulvinar cursus sapien commodo non.','ng2.jpg'),
(3,'Nam eget ligula eu','Admin','2022-05-28','100 Comments','500 Likes','Aliquam suscipit neque massa, eu maximus felis gravida vel. Vestibulum lacinia risus risus, ut iaculis felis fermentum id. Cras at vulputate velit, vitae vestibulum augue. Etiam lorem nunc, mattis ac dignissim sit amet, varius et ex. Phasellus eleifend nibh justo, pulvinar cursus sapien commodo non.','ng3.jpg');

/*Table structure for table `collections` */

DROP TABLE IF EXISTS `collections`;

CREATE TABLE `collections` (
  `collection_id` int(11) NOT NULL AUTO_INCREMENT,
  `collection_title` varchar(255) NOT NULL,
  `collection_desc` text NOT NULL,
  `collection_img` varchar(255) NOT NULL,
  `collection_grid` varchar(255) NOT NULL,
  PRIMARY KEY (`collection_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `collections` */

insert  into `collections`(`collection_id`,`collection_title`,`collection_desc`,`collection_img`,`collection_grid`) values 
(1,'Gaming','Gaming is the act of playing electronic games, whether on consoles, computers, mobile phones, or another media entirely.','c1.png','collection-grid-2'),
(2,'Mind Games','A set of premeditated behaviors or replies designed to have a psychological effect on another person, usually for entertainment','c2.png','collection-grid-4'),
(3,'Gadgets','A little mechanical or electrical gadget or instrument, especially one that is inventive or innovative','c3.png','collection-grid-6');

/*Table structure for table `contacts` */

DROP TABLE IF EXISTS `contacts`;

CREATE TABLE `contacts` (
  `contact_id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_list` varchar(255) NOT NULL,
  `contact_icon` varchar(255) NOT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

/*Data for the table `contacts` */

insert  into `contacts`(`contact_id`,`contact_list`,`contact_icon`) values 
(1,'iPurse@mail.com','glyphicon glyphicon-envelope'),
(2,'+63912345678','glyphicon glyphicon-earphone'),
(3,'Caloocan, Philippines','glyphicon glyphicon-map-marker'),
(4,'8997623','glyphicon glyphicon-phone-alt');

/*Table structure for table `email` */

DROP TABLE IF EXISTS `email`;

CREATE TABLE `email` (
  `email_id` int(11) NOT NULL AUTO_INCREMENT,
  `email_acc` varchar(255) NOT NULL,
  `email_icon` varchar(2525) NOT NULL,
  PRIMARY KEY (`email_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `email` */

insert  into `email`(`email_id`,`email_acc`,`email_icon`) values 
(1,'info@example.com','glyphicon glyphicon-envelope'),
(2,'iPurse@gmail.com','glyphicon glyphicon-envelope');

/*Table structure for table `footer` */

DROP TABLE IF EXISTS `footer`;

CREATE TABLE `footer` (
  `footer_id` int(11) NOT NULL AUTO_INCREMENT,
  `footer_desc` text NOT NULL,
  `footer_img` varchar(255) NOT NULL DEFAULT 'f1.png',
  PRIMARY KEY (`footer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

/*Data for the table `footer` */

insert  into `footer`(`footer_id`,`footer_desc`,`footer_img`) values 
(1,'iPurse will provide you with excellent service, high-quality items, and prompt worldwide shipping.','f1.png');

/*Table structure for table `game_imgs` */

DROP TABLE IF EXISTS `game_imgs`;

CREATE TABLE `game_imgs` (
  `game_id` int(11) NOT NULL AUTO_INCREMENT,
  `game_img` varchar(255) NOT NULL,
  PRIMARY KEY (`game_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `game_imgs` */

insert  into `game_imgs`(`game_id`,`game_img`) values 
(1,'g1.jpg'),
(2,'g2.jpg'),
(3,'g3.jpg'),
(4,'g4.jpg'),
(5,'g5.jpg'),
(6,'g6.jpg'),
(7,'g7.jpg'),
(8,'g8.jpg');

/*Table structure for table `games` */

DROP TABLE IF EXISTS `games`;

CREATE TABLE `games` (
  `game_id` int(11) NOT NULL AUTO_INCREMENT,
  `game_title` varchar(255) NOT NULL,
  `game_desc` text NOT NULL,
  `game_desigr` varchar(255) NOT NULL,
  `game_dev` varchar(255) NOT NULL,
  `game_req` text NOT NULL,
  `game_img` varchar(255) NOT NULL,
  `game_smDialog` varchar(255) NOT NULL,
  PRIMARY KEY (`game_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `games` */

insert  into `games`(`game_id`,`game_title`,`game_desc`,`game_desigr`,`game_dev`,`game_req`,`game_img`,`game_smDialog`) values 
(1,'Game-1','Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa.','Sed Perst','Martina','2GB Hard Disk Space\r\nWindows 10\r\nIntel i5 10th gen above','g1.jpg','small-dialog'),
(2,'Game-2','Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa.','Vivamus','Quentin','3GB Hard Disk Space','g2.jpg','small-dialog2'),
(3,'Game-3','Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa.','Venenatis','Stanley','1GB Hard Disk Space','g3.jpg','small-dialog3'),
(4,'Game-4','Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa.','Interdum','Spielberg','3GB Hard Disk Space','g4.jpg','small-dialog4'),
(5,'Game-5','Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa.','Faucibus','Cameron','2GB Hard Disk Space','g5.jpg','small-dialog5'),
(6,'Game-6','Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa.','Tincidunt','Jackson','4GB Hard Disk Space','g6.jpg','small-dialog6'),
(7,'Game-7','Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa.','Vestibulum','Daniel','2GB Hard Disk Space','g7.jpg','small-dialog7'),
(8,'Game-8','Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa.','Vehicula ligula','Cyrill','3GB Hard Disk Space','g8.jpg','small-dialog8');

/*Table structure for table `members` */

DROP TABLE IF EXISTS `members`;

CREATE TABLE `members` (
  `member_id` int(11) NOT NULL AUTO_INCREMENT,
  `member_name` varchar(255) NOT NULL,
  `member_title` varchar(255) NOT NULL,
  `member_desc` text NOT NULL,
  `member_liLink` varchar(255) NOT NULL,
  `member_gLink` varchar(255) NOT NULL,
  `member_twtLink` varchar(255) NOT NULL,
  `member_fbLink` varchar(255) NOT NULL,
  `member_img` varchar(255) NOT NULL,
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `members` */

insert  into `members`(`member_id`,`member_name`,`member_title`,`member_desc`,`member_liLink`,`member_gLink`,`member_twtLink`,`member_fbLink`,`member_img`) values 
(1,'Mariya Thomas','Product & Content Administrator','Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.','#linkedin','#google','#twitter','#facebook','t1.jpg'),
(2,'Dino Jass','Sales & Marketing','Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.','#linkedin','#google','#twitter','#facebook','t2.jpg'),
(3,'Michael Doe','Customer Services','Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.','#linkedin','#google','#twitter','#facebook','t3.jpg'),
(4,'Rita James','Order Processing & Fulfilment','Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.','#linkedin','#google','#twitter','#facebook','t4.jpg');

/*Table structure for table `new_games` */

DROP TABLE IF EXISTS `new_games`;

CREATE TABLE `new_games` (
  `newGame_id` int(11) NOT NULL AUTO_INCREMENT,
  `newGame_name` varchar(255) NOT NULL,
  `newGame_img` varchar(255) NOT NULL,
  PRIMARY KEY (`newGame_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

/*Data for the table `new_games` */

insert  into `new_games`(`newGame_id`,`newGame_name`,`newGame_img`) values 
(1,'ng1','ng1.jpg'),
(2,'ng2','ng2.jpg'),
(3,'ng3','ng3.jpg'),
(4,'ng4 ','ng4.jpg'),
(5,'ng5','ng5.jpg'),
(6,'ng6 ','ng6.jpg'),
(7,'ng7','ng7.jpg'),
(8,'ng8 ','ng8.jpg'),
(15,'Mario Kart','Mario Kart.jpg');

/*Table structure for table `news` */

DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL AUTO_INCREMENT,
  `news_title` varchar(255) NOT NULL,
  `news_desc` text NOT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

/*Data for the table `news` */

insert  into `news`(`news_id`,`news_title`,`news_desc`) values 
(1,'Ti20 Team OG vs Navi','Ana easily carried the game by going 1v4 on enemy\'s base!'),
(2,'New games coming out soon!','Please wait for further more details'),
(3,'New games are rising!','A lot of genre of games has been out there it just a month!');

/*Table structure for table `phone` */

DROP TABLE IF EXISTS `phone`;

CREATE TABLE `phone` (
  `phone_id` int(11) NOT NULL AUTO_INCREMENT,
  `phone_num` varchar(11) NOT NULL,
  `phone_icon` varchar(255) NOT NULL,
  PRIMARY KEY (`phone_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `phone` */

insert  into `phone`(`phone_id`,`phone_num`,`phone_icon`) values 
(1,'+1 (734) 12','glyphicon glyphicon-earphone'),
(2,'+1 (739) 64','glyphicon glyphicon-earphone'),
(3,'+6391234567','glyphicon glyphicon-earphone');

/*Table structure for table `services` */

DROP TABLE IF EXISTS `services`;

CREATE TABLE `services` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `service_title` varchar(255) NOT NULL,
  `service_desc` text NOT NULL,
  `service_icon` varchar(255) NOT NULL,
  PRIMARY KEY (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

/*Data for the table `services` */

insert  into `services`(`service_id`,`service_title`,`service_desc`,`service_icon`) values 
(1,'Quality Service','We provide high-quality services all over the world, and we guarantee that our customers will be delighted.','glyphicon glyphicon-random '),
(2,'Global Shipment','\nWe can send anywhere in the globe with no hassles and promise speedy arrival with a low shipping price.','glyphicon glyphicon-random'),
(3,'Reasonable Costs','You will have no regrets if you purchase our products/games at a fair price.','glyphicon glyphicon-yen'),
(4,'Timely Information','We guarantee that you will receive up-to-date news with exact information in a flash.','glyphicon glyphicon-object-align-right');

/*Table structure for table `slider` */

DROP TABLE IF EXISTS `slider`;

CREATE TABLE `slider` (
  `slider_id` int(11) NOT NULL AUTO_INCREMENT,
  `slider_imgName` varchar(255) NOT NULL,
  `slider_img` varchar(255) NOT NULL,
  PRIMARY KEY (`slider_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

/*Data for the table `slider` */

insert  into `slider`(`slider_id`,`slider_imgName`,`slider_img`) values 
(1,'banner1','banner1.jpg'),
(2,'banner2','banner2.jpg'),
(15,'banner3','banner3.jpg'),
(17,'banner4','banner4.jpg');

/*Table structure for table `trend` */

DROP TABLE IF EXISTS `trend`;

CREATE TABLE `trend` (
  `trend_id` int(11) NOT NULL AUTO_INCREMENT,
  `trend_title` varchar(255) NOT NULL,
  `trend_img` varchar(255) NOT NULL,
  PRIMARY KEY (`trend_id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4;

/*Data for the table `trend` */

insert  into `trend`(`trend_id`,`trend_title`,`trend_img`) values 
(1,'Racing Games','tg1.jpg'),
(2,'3D Games','tg2.jpg'),
(4,'Toy Games','tg4.jpg'),
(17,'Action Games','Action Games.jpg');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
