-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: bookcar
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `annonces`
--

DROP TABLE IF EXISTS `annonces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `annonces` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `dateDebut` datetime NOT NULL,
  `dateFin` datetime NOT NULL,
  `statut` int NOT NULL,
  `prix` double(8,2) NOT NULL,
  `premium` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ville` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `partenaire_id` bigint unsigned NOT NULL,
  `car_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `annonces_partenaire_id_foreign` (`partenaire_id`),
  KEY `annonces_car_id_foreign` (`car_id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `annonces`
--

LOCK TABLES `annonces` WRITE;
/*!40000 ALTER TABLE `annonces` DISABLE KEYS */;
INSERT INTO `annonces` VALUES (34,'2021-06-12 01:02:00','2021-06-13 01:02:00',0,257.00,'Non Premium','Tantan','Axios is a promise-based library. However, we can use async/await to wait for the response from the serverollowing code demonstrates this.','2021-06-08 23:03:28','2021-06-14 16:43:12',4,46),(26,'2021-06-13 21:23:13','2021-06-23 17:54:03',0,447.00,'Premium','Martil','voici une description de voiture rouge de rve qui roule tres vite dans  des les autorotes','2021-06-07 15:47:39','2021-06-10 09:41:08',2,41),(40,'2021-06-16 14:40:00','2021-06-20 14:40:00',0,421.00,'Non Premium','Casablanca','Voiture comfortable qui roule dans les grande route','2021-06-14 12:41:04','2021-06-14 12:41:04',2,49),(36,'2021-06-11 01:07:00','2021-06-14 01:07:00',1,531.00,'Non Premium','Casa','If I change the path  and put the logo image on the public folder, everything works fine but that\'s breaks the component-based UI development principle.','2021-06-08 23:08:00','2021-06-09 18:38:43',4,45),(37,'2021-06-08 01:09:00','2021-06-22 01:09:00',1,543.00,'Non Premium','Rabat','Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page','2021-06-08 23:10:18','2021-06-09 18:36:28',4,44),(38,'2021-06-06 00:00:00','2021-06-17 20:40:00',1,651.00,'Non Premium','Assilah','Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer .','2021-06-09 18:41:02','2021-06-14 12:30:49',2,39),(35,'2021-06-10 01:05:00','2021-06-14 01:05:00',1,466.00,'Non Premium','tetouan','First, it needs the URI of the service endpoint. Second, it should be passed an object that contains the properties w','2021-06-08 23:05:49','2021-06-09 22:22:52',4,43),(29,'2021-06-22 15:54:00','2021-06-22 17:54:00',1,350.00,'Premium','Tanger','voici une description','2021-06-07 15:54:43','2021-06-09 18:38:26',2,7),(31,'2021-06-09 15:39:00','2021-06-15 15:39:00',0,656.00,'Non Premium','Assilah','Voiture de luxe qui roule tres bien avec une conduite tres autonome et bien maitrisé','2021-06-08 13:40:04','2021-06-09 21:33:46',2,42);
/*!40000 ALTER TABLE `annonces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `marque` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `modele` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `etat` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `carburant` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `couleur` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `airBag` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nbrPlace` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `partenaire_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cars_partenaire_id_foreign` (`partenaire_id`)
) ENGINE=MyISAM AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (7,'Mini Copprrr','2021','Bien','Diesel','BLEU','Sans','4','7.jpg','NQIYA','2021-05-19 17:10:20','2021-06-08 20:38:09',2),(45,'Lamborghini','2011','Moyenne','Essence','Grey','avec','5','45.jpg','just une description simple','2021-06-08 22:59:26','2021-06-08 22:59:26',4),(46,'Nissan cashkay','2011','Neuf','Essence','Brown','avec','5','46.jpg','just une description simple','2021-06-08 23:01:07','2021-06-08 23:01:07',4),(49,'Range rover','2016','Moyenne','Hybride','Black','avec','5','49.jpg','just une description simple','2021-06-14 10:35:48','2021-06-14 10:35:48',2),(43,'Bmw X5','2013','Moyenne','Hybride','Black','avec','7','43.jpg','just une description simple','2021-06-08 22:57:56','2021-06-08 22:57:56',4),(44,'Chevrolett corvette','2014','Semi-neuf','Hybride','Bleu','avec','4','44.jpg','just une description simple','2021-06-08 22:58:45','2021-06-08 22:58:45',4),(39,'Audi r5','2020','Bien','Diesel','Gris','Sans','4','39.jpg','just une description simple','2021-06-07 15:02:10','2021-06-09 09:24:02',2),(40,'Audi R3','2017','Neuf','Diesel','vert','avec','3','40.jpg','just une description simple','2021-06-07 15:02:58','2021-06-08 18:55:24',2),(41,'Chevrolett corvette','2015','Moyenne','Hybride','Black','avec','5','41.jpg','just une description simple','2021-06-07 15:04:52','2021-06-07 15:04:52',2),(42,'Chrysler  300C','2017','Neuf','Hybride','Bleu','avec','4','42.jpg','just une description simple','2021-06-08 13:37:49','2021-06-08 13:37:49',2);
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluations`
--

DROP TABLE IF EXISTS `evaluations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `idFrom` bigint unsigned NOT NULL,
  `idTo` bigint unsigned NOT NULL,
  `commentaire` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateEvaluation` datetime NOT NULL,
  `note` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `car_id` bigint unsigned NOT NULL,
  `reservation_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `evaluations_car_id_foreign` (`car_id`),
  KEY `evaluations_reservation_id_foreign` (`reservation_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluations`
--

LOCK TABLES `evaluations` WRITE;
/*!40000 ALTER TABLE `evaluations` DISABLE KEYS */;
INSERT INTO `evaluations` VALUES (1,2,3,'Trés bon client fiable et fidele','2021-06-14 15:54:01',4,'2021-06-14 14:54:01','2021-06-14 14:54:01',41,43),(2,4,3,'client fidele et très bien réputé','2021-06-14 17:52:45',4,'2021-06-14 16:52:45','2021-06-14 16:52:45',35,46),(3,4,3,'tres bon client avec une tres bon reputation','2021-06-14 18:10:57',5,'2021-06-14 17:10:57','2021-06-14 17:10:57',35,46),(4,4,3,'Un client fidele et sympa je vous le recommende','2021-06-14 18:20:46',4,'2021-06-14 17:20:46','2021-06-14 17:20:46',35,46),(5,4,3,'Un client fidele et sympa je vous le recommende','2021-06-14 18:21:38',4,'2021-06-14 17:21:38','2021-06-14 17:21:38',35,46),(6,4,3,'Un client fidele et bien , je vous le recommande','2021-06-14 18:22:44',4,'2021-06-14 17:22:44','2021-06-14 17:22:44',35,46),(7,4,5,'Un tres bon client bien réputé','2021-06-14 18:26:49',4,'2021-06-14 17:26:49','2021-06-14 17:26:49',35,35);
/*!40000 ALTER TABLE `evaluations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (13,'2014_10_12_000000_create_users_table',1),(14,'2014_10_12_100000_create_password_resets_table',1),(21,'2019_08_19_000000_create_failed_jobs_table',2),(22,'2021_05_18_232611_create_annonces_table',2),(26,'2021_05_18_232807_create_cars_table',3),(27,'2021_05_18_232835_create_evaluations_table',3),(28,'2021_05_18_232900_create_reservations_table',3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `dateDebutReservation` datetime NOT NULL,
  `dateFinReservation` datetime NOT NULL,
  `prixTotal` int NOT NULL,
  `statut` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `client_id` bigint unsigned NOT NULL,
  `annonce_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reservations_client_id_foreign` (`client_id`),
  KEY `reservations_annonce_id_foreign` (`annonce_id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (44,'2021-06-11 23:56:00','2021-06-17 23:56:00',2706,'1','2021-06-09 21:56:27','2021-06-10 09:07:26',3,38),(36,'2021-06-10 20:36:00','2021-06-18 20:36:00',4344,'0','2021-06-09 18:36:28','2021-06-09 18:36:28',5,37),(45,'2021-06-11 23:58:00','2021-06-15 23:58:00',1824,'1','2021-06-09 21:58:32','2021-06-09 23:57:24',3,39),(40,'2021-06-22 20:38:00','2021-06-22 01:38:00',277,'1','2021-06-09 18:38:26','2021-06-09 19:16:52',3,29),(41,'2021-06-12 20:38:00','2021-06-14 20:38:00',1062,'0','2021-06-09 18:38:43','2021-06-09 18:38:43',3,36),(43,'2021-06-13 23:43:08','2021-06-13 03:43:12',75,'1','2021-06-09 21:43:55','2021-06-10 09:02:54',3,26),(50,'2021-06-08 14:30:00','2021-06-22 14:30:00',9114,'0','2021-06-14 12:30:49','2021-06-14 12:30:49',3,38);
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cin` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ville` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int NOT NULL,
  `tel` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default.jpg',
  `adresse` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `function` int NOT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_cin_unique` (`cin`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'OUSSAMA MERROUN','LOJH','oussama.merroun4@gmail.com','LKJ',21,'0622690557','1.jpg','LIJLK',NULL,0,'$2y$10$1y1bXaN2K0i6.u3yT6uMT.OMFJOleERRX38A3eRmIwJFw/tsYp44S',NULL,'2021-05-18 14:23:17','2021-05-18 21:01:42'),(3,'Chaymae boujim','L613290','client1@gmail.com','TETOUAN',21,'0622690557','3.jpg','AV CLIEN 1 TETOUAN',NULL,0,'$2y$10$NAYx1WUT/26g9bxd0DmT2.1Eo7aIUQ6NVp.6kkt8WZf7LAwZFUBYW',NULL,'2021-05-19 22:37:12','2021-06-09 09:17:16'),(2,'Oussama Meme','L020304','part1@gmail.com','Tetouan',21,'0524753123','2.jpg','Ain chouk 56200 Casa',NULL,1,'$2y$10$ZWxUXHuQ10Nvlz5RKCP1O.5WxfzoNfSN2grJmDseQ7lysQlJhl7Xm',NULL,'2021-05-18 21:13:39','2021-06-10 09:36:22'),(4,'Amine El','L563136','part2@gmail.com','Marrakesh',23,'0650193571','4.jpg','Ain meloul tetouan',NULL,1,'$2y$10$ZWxUXHuQ10Nvlz5RKCP1O.5WxfzoNfSN2grJmDseQ7lysQlJhl7Xm',NULL,'2021-05-18 21:13:39','2021-06-08 21:05:28'),(5,'Yassine Aachari','L536167','yassine@gmail.com','Salé',21,'0623165832','5.jpg','Mhannech Tetouan',NULL,0,'$2y$10$ZWxUXHuQ10Nvlz5RKCP1O.5WxfzoNfSN2grJmDseQ7lysQlJhl7Xm',NULL,'2021-05-18 21:13:39','2021-06-08 21:05:28');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-14 21:02:28
