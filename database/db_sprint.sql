CREATE DATABASE  IF NOT EXISTS `db_sprint` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `db_sprint`;
-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: db_sprint
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.20-MariaDB

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
INSERT INTO `genres` VALUES (1,'Acción');
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
  PRIMARY KEY (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imgrefs`
--

LOCK TABLES `imgrefs` WRITE;
/*!40000 ALTER TABLE `imgrefs` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
INSERT INTO `productos` VALUES 
(1,'Tribes of Midgard',333,'Un juego increible para jugar',30,2020-12-16 12:00:00,1,1),
(2,'Battlefield',900,'Battlefield™ 2042 es un juego de disparos en primera persona que marca el regreso de la icónica guerra total de la franquicia. Adáptate en un mundo del futuro cercano transformado por el desorden y vence en campos de batalla cambiantes con la ayuda de tu escuadrón y un arsenal innovado',70, "2020-12-20 12:40:12",1,2),
(3,'Grand Theft Auto V',700,'¡Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolución de 4K y disfrutar del juego a 60 fotogramas por segundo.',15, "2020-12-16 16:55:16",1,3),
(4,'New World',999,'Explora un electrizante videojuego MMO de mundo abierto. Forja tu destino en Aeternum, una isla sobrenatural donde hallarás toda clase de peligros y oportunidades.',10,2021-1-25 6:15:50,1,4),
(5,'The Ascent',900,'The Ascent es un shooter RPG de acción individual y cooperativo ambientado en un mundo ciberpunk. El Grupo Ascensión, la megacorporación a la que todos pertenecen, ha quebrado. ¿Sobrevivirás sin él?',10, "2020-08-12 15:20:41",1,5),
(6,'Chivalry: MW',2000,'Asedia castillos y asalta pueblos en Chivalry: Medieval Warfare, un trepidante slasher medieval en primera persona que se centra en las batallas multijugador.',30,2020-12-16 10:05:12,1,6),
(7,'Mass Effect',3000,'Mass Effect™ Legendary Edition incluye el contenido básico para un jugador y más de cuarenta artículos descargables de Mass Effect, Mass Effect 2 y Mass Effect 3, además de armas, armaduras y paquetes promocionales remasterizados y optimizados en 4K Ultra HD.',30, "2021-2-12 12:01:00",1,7),
(8,'Days Gone',1500,'Conduce y lucha en Estados Unidos, un lugar letal tras una pandemia.Como Deacon St. John, un motociclista errante y cazarrecompensas que viaja por el camino averiado y lucha por sobrevivir a la vez que busca una razón para vivir en este juego de acción y aventura en un mundo abierto',15, "2021-01-20 14:00:16",1,8),
(9, "Predator: Hunting Grounds", 500  "¡Disfruta de este juego de disparos multijugador asimétrico* donde se enfrentan humanos y depredador. Solo recuerda: ¡o cazas o te cazan! Forma parte de un grupo comando y completa las misiones antes de que el depredador te encuentre. O juega como el depredador y caza a tus presas", 30, "2021-03-21 14:20:02", 1, 9),
(10, "Apex Legends Founders edition", 1500, "Apex Legends es el galardonado juego de disparos de héroes gratuito de Respawn Entertainment. Controla un elenco en aumento de personajes con habilidades poderosas y disfruta del juego estratégico por escuadrones y de la dinámica de juego innovadora del nuevo Battle Royale.", 10, "2020-12-25 14:20:07", 1, 10),
(11, "Team Fortress 2", 1500, "Las distintas clases proporcionan una amplia gama de habilidades tácticas y personalidades. Constantemente actualizado con nuevos modos de juego, mapas, equipo y, lo más importante, ¡sombreros!", 5, "2021-07-20 12:06:10", 1, 11), 
(12, "Rogue Company", 2000, "¡Únete a más de 20 millones de jugadores en Rogue Company, el mejor juego de disparos táctico en tercera persona! Conviértete en un mercenario y usa poderosas armas, artefactos de alta tecnología y habilidades decisivas. Acepta la misión y disfruta de modos de juego 4v4 y 6v6", 25,"2021-05-06 16:06:01", 1, 12),
(13, "Dota 2", 750, "Cada día, millones de jugadores de todo el mundo entran en batalla como uno de los más de cien héroes de Dota. Y no importa si es su décima o su milésima hora de juego: siempre hay algo nuevo que descubrir.", 22, "2021-08-22 12:40:50", 1, 13),
(14, "Horizon Zero Dawn", 2000, "Vive la misión legendaria de Aloy para revelar los secretos de una futura Tierra dominada por máquinas. ¡Usa ataques devastadores contra tus presas y explora un majestuoso mundo abierto en este galardonado RPG de acción!", 10, "2021-03-26 18:10:50", 1, 14),
(15, "Fallout 4", 1500, "Bethesda Game Studios, los galardonados creadores de Fallout 3 y The Elder Scrolls V: Skyrim, te dan la bienvenida al mundo de Fallout 4, su juego más ambicioso hasta la fecha y la próxima generación de juegos de mundo abierto.", 10, "2021-09-29 14:06:17", 1, 15),
(16, "The Elder Scrolls", 1700, "Únete a más de 18 millones de jugadores en este RPG multijugador online y vive una aventura sin límites en el mundo de The Elder Scrolls", 5,2020-11-15 18:06:18, 1, 16),
(17, "The Witcher", 1500, "Justo en el momento en el que la guerra se propaga por los Reinos del Norte, aceptas el contrato más desafiante de tu vida: rastrear a la Niña de la profecía, un arma viviente que puede alterar el mundo tal y como lo conocemos.", 4, "2021-09-12 12:20:59", 1, 17);
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

-- Dump completed on 2021-11-18 20:36:51
