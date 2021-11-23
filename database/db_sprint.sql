-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: db_sprint
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Accion');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imgrefs`
--

DROP TABLE IF EXISTS `imgrefs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imgrefs` (
  `id` int(11) NOT NULL,
  `imgref1` varchar(100) NOT NULL,
  `imgref2` varchar(100) NOT NULL,
  `imgref3` varchar(100) NOT NULL,
  `imgref4` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imgrefs`
--

LOCK TABLES `imgrefs` WRITE;
/*!40000 ALTER TABLE `imgrefs` DISABLE KEYS */;
INSERT INTO `imgrefs` VALUES (1,'tribes1.jpg','tribes2.jpg','tribes3.jpg','tribes4.jpg');
/*!40000 ALTER TABLE `imgrefs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(480) NOT NULL,
  `discount` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `imgref_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_FK` (`genre_id`),
  KEY `productos_FK_1` (`imgref_id`),
  CONSTRAINT `productos_FK` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`),
  CONSTRAINT `productos_FK_1` FOREIGN KEY (`imgref_id`) REFERENCES `imgrefs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Tribes of Midgard',333,'Un juego increible para jugar',30,1,1),(2,'Battlefield',900,'Battlefield™ 2042 es un juego de disparos en primera persona que marca el regreso de la icónica guerra total de la franquicia. Adáptate en un mundo del futuro cercano transformado por el desorden y vence en campos de batalla cambiantes con la ayuda de tu escuadrón y un arsenal innovado',70,1,1),(3,'Grand Theft Auto V',700,'¡Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolución de 4K y disfrutar del juego a 60 fotogramas por segundo.',15,1,1),(4,'New World',999,'Explora un electrizante videojuego MMO de mundo abierto. Forja tu destino en Aeternum, una isla sobrenatural donde hallarás toda clase de peligros y oportunidades.',10,1,1),(5,'The Ascent',900,'The Ascent es un shooter RPG de acción individual y cooperativo ambientado en un mundo ciberpunk. El Grupo Ascensión, la megacorporación a la que todos pertenecen, ha quebrado. ¿Sobrevivirás sin él?',10,1,1),(6,'Chivalry: MW',2000,'Asedia castillos y asalta pueblos en Chivalry: Medieval Warfare, un trepidante slasher medieval en primera persona que se centra en las batallas multijugador.',30,1,1),(7,'Mass Effect',3000,'Mass Effect™ Legendary Edition incluye el contenido básico para un jugador y más de cuarenta artículos descargables de Mass Effect, Mass Effect 2 y Mass Effect 3, además de armas, armaduras y paquetes promocionales remasterizados y optimizados en 4K Ultra HD.',30,1,1),(8,'Days Gone',1500,'Conduce y lucha en Estados Unidos, un lugar letal tras una pandemia.Como Deacon St. John, un motociclista errante y cazarrecompensas que viaja por el camino averiado y lucha por sobrevivir a la vez que busca una razón para vivir en este juego de acción y aventura en un mundo abierto',15,1,1);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `nickname` varchar(15) NOT NULL,
  `pais` varchar(15) NOT NULL,
  `edad` int(11) NOT NULL,
  `img` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_sprint'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-23 12:33:48
