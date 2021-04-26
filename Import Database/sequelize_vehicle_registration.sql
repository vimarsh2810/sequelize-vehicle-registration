-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: sequelize_jwt
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stateName` varchar(30) NOT NULL,
  `dateCreated` datetime NOT NULL,
  `dateModified` datetime NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `stateName` (`stateName`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (1,'Alabama','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(2,'Alaska','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(3,'American Samoa','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(4,'Arizona','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(5,'Arkansas','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(6,'California','2020-10-05 09:18:00','2011-10-05 09:18:00',1),(7,'Colorado','2011-10-05 09:18:00','2011-11-05 09:18:00',1),(8,'Connecticut','2020-10-05 09:18:00','2011-10-05 09:18:00',1),(9,'Delaware','2020-10-05 09:18:00','2011-10-05 09:18:00',1),(10,'District Of Columbia','2020-10-05 09:18:00','2011-10-05 09:18:00',1),(11,'Federated States Of Micronesia','2011-10-05 09:18:00','2015-10-05 09:18:00',1),(12,'Florida','2011-10-05 09:18:00','2015-10-05 09:18:00',1),(13,'Georgia','2011-10-05 09:18:00','2015-10-05 09:18:00',1),(14,'Guam','2011-10-05 09:18:00','2015-10-05 09:18:00',1),(15,'Hawaii','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(16,'Idaho','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(17,'Illinois','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(18,'Indiana','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(19,'Iowa','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(20,'Kansas','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(21,'Kentucky','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(22,'Louisiana','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(23,'Maine','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(24,'Marshall Islands','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(25,'Maryland','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(26,'Massachusetts','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(27,'Michigan','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(28,'Minnesota','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(29,'Mississippi','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(30,'Missouri','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(31,'Montana','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(32,'Nebraska','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(33,'Nevada','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(34,'New Hampshire','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(35,'New Jersey','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(36,'New Mexico','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(37,'New York','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(38,'North Carolina','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(39,'North Dakota','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(40,'Northern Mariana Islands','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(41,'Ohio','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(42,'Oklahoma','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(43,'Oregon','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(44,'Palau','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(45,'Pennsylvania','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(46,'Puerto Rico','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(47,'Rhode Island','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(48,'South Carolina','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(49,'South Dakota','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(50,'Tennessee','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(51,'Texas','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(52,'Utah','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(53,'Vermont','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(54,'Virgin Islands','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(55,'Virginia','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(56,'Washington','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(57,'West Virginia','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(58,'Wisconsin','2011-10-05 09:18:00','2011-10-05 09:18:00',1),(59,'Wyoming','2011-10-05 09:18:00','2011-10-05 09:18:00',1);
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `email` varchar(65) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `accessToken` varchar(255) DEFAULT NULL,
  `stateId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `stateId` (`stateId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`stateId`) REFERENCES `states` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'yash','yash@xyz.com','123456',1,NULL,1),(2,'het','het@xyz.com','123456',1,'',2),(3,'dev','dev@xyz.com','123456',1,'',3),(4,'parv','parv@xyz.com','123456',1,NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicleregistrations`
--

DROP TABLE IF EXISTS `vehicleregistrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicleregistrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `registrationDate` datetime NOT NULL,
  `expiryDate` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  `vehicleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `vehicleId` (`vehicleId`),
  CONSTRAINT `vehicleregistrations_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `vehicleregistrations_ibfk_2` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicleregistrations`
--

LOCK TABLES `vehicleregistrations` WRITE;
/*!40000 ALTER TABLE `vehicleregistrations` DISABLE KEYS */;
INSERT INTO `vehicleregistrations` VALUES (1,'2021-04-26 05:55:51','2041-04-19 00:00:00',1,1),(2,'2021-04-26 05:56:04','2040-04-29 00:00:00',1,2),(3,'2021-04-26 05:56:52','2050-04-29 00:00:00',2,3),(4,'2021-04-26 05:57:02','2052-04-19 00:00:00',2,4);
/*!40000 ALTER TABLE `vehicleregistrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `type` varchar(15) NOT NULL,
  `registered` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles`
--

LOCK TABLES `vehicles` WRITE;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` VALUES (1,'Apache xyz','Sports bike',1),(2,'FZS V3','Sports bike',1),(3,'CB Shine','Commuter bike',1),(4,'Activa 6G','Mopad',1),(5,'Aviator','Mopad',0),(6,'Access','Mopad',0),(7,'RS200','Sports bike',0);
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'sequelize_jwt'
--

--
-- Dumping routines for database 'sequelize_jwt'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-26 11:34:54
