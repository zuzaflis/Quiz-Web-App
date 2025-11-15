-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: exam_portal
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `c_id` bigint NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (602,'Quiz na temat kolarstwa','Sport'),(652,'Czy jesteś ekspertem od geografii i kultury? Ten quiz zabierze Cię w podróż dookoła świata – od egzotycznych wysp po wielkie metropolie. Dowiedz się więcej o zwyczajach, kuchni i ciekawych miejscach.','Podróże'),(653,'Sprawdź swoją wiedzę o kinie! Od kultowych filmów Hollywood po europejskie perełki – ten quiz to test dla prawdziwych kinomanów.','Filmowe Klasyki'),(654,'Cofnij się w czasie i poznaj fascynujące wydarzenia historyczne oraz mityczne opowieści. Od starożytnych cywilizacji po współczesne wydarzenia – ten quiz to podróż przez wieki.','Historia i Legendy'),(655,'Świat technologii zmienia się każdego dnia. Sprawdź swoją wiedzę o wynalazkach, innowacjach i przełomowych odkryciach naukowych.',' Technologia i Wynalazki');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_seq`
--

DROP TABLE IF EXISTS `category_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_seq`
--

LOCK TABLES `category_seq` WRITE;
/*!40000 ALTER TABLE `category_seq` DISABLE KEYS */;
INSERT INTO `category_seq` VALUES (751);
/*!40000 ALTER TABLE `category_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `ques_id` bigint NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `content` varchar(5000) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `option1` varchar(255) DEFAULT NULL,
  `option2` varchar(255) DEFAULT NULL,
  `option3` varchar(255) DEFAULT NULL,
  `option4` varchar(255) DEFAULT NULL,
  `quiz_q_id` bigint DEFAULT NULL,
  PRIMARY KEY (`ques_id`),
  KEY `FKq1xd7v9iuws36j2pb22my632e` (`quiz_q_id`),
  CONSTRAINT `FKq1xd7v9iuws36j2pb22my632e` FOREIGN KEY (`quiz_q_id`) REFERENCES `quiz` (`q_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (602,'Bernard Hinault','Który z zawodników wygrał najwięcej razy Tour de France?','','Lance Armstrong','Bernard Hinault','Eddy Merckx','Jacques Anquetil',1102),(603,'Gandawa','Które miasto jest uważane za \"stolicę kolarstwa świata\"?','','Mediolan',' Paryż','Bruksela','Gandawa',1102),(652,'Australia','W którym kraju znajduje się słynna opera w Sydney?','','Nowa Zelandia','Australia','Kanada','Wielka Brytania',1152),(653,'Pizza','Co jest narodowym daniem Włoch?','','Sushi','Tacos','Pizza','Lasagne',1152),(654,'Antarktyda','Jak nazywa się największa pustynia na świecie?','','Atakama','Gobi','Antarktyda','Sahara',1152),(655,'James Cameron','Kto wyreżyserował film „Titanic”?','','Steven Spielberg','James Cameron','Martin Scorsese','Quentin Tarantino',1153),(656,'','Jaki film zdobył najwięcej Oscarów w historii?','','„Avatar”','„Ben-Hur”','„Titanic”','„Władca Pierścieni: Powrót Króla”',1153);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_seq`
--

DROP TABLE IF EXISTS `question_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_seq`
--

LOCK TABLES `question_seq` WRITE;
/*!40000 ALTER TABLE `question_seq` DISABLE KEYS */;
INSERT INTO `question_seq` VALUES (751);
/*!40000 ALTER TABLE `question_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz` (
  `q_id` bigint NOT NULL,
  `active` bit(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `max_marks` varchar(255) DEFAULT NULL,
  `number_of_questions` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `category_c_id` bigint DEFAULT NULL,
  PRIMARY KEY (`q_id`),
  KEY `FK1gnsxy7kb57ypv1yq1ybyym5j` (`category_c_id`),
  CONSTRAINT `FK1gnsxy7kb57ypv1yq1ybyym5j` FOREIGN KEY (`category_c_id`) REFERENCES `category` (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
INSERT INTO `quiz` VALUES (1102,_binary '','','2','2','Cycling Quiz',602),(1152,_binary '','','3','3','Podróże ',652),(1153,_binary '\0','','20','2','Filmy 20s',653);
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz_seq`
--

DROP TABLE IF EXISTS `quiz_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz_seq`
--

LOCK TABLES `quiz_seq` WRITE;
/*!40000 ALTER TABLE `quiz_seq` DISABLE KEYS */;
INSERT INTO `quiz_seq` VALUES (1251);
/*!40000 ALTER TABLE `quiz_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `result`
--

DROP TABLE IF EXISTS `result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `result` (
  `res_id` bigint NOT NULL,
  `attempted` int DEFAULT NULL,
  `correct_answers` int DEFAULT NULL,
  `incorrect_answers` int DEFAULT NULL,
  `points` int DEFAULT NULL,
  `quiz_title` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`res_id`),
  KEY `FKkfepddltqde0pif3dlrqaupss` (`user_id`),
  CONSTRAINT `FKkfepddltqde0pif3dlrqaupss` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `result`
--

LOCK TABLES `result` WRITE;
/*!40000 ALTER TABLE `result` DISABLE KEYS */;
INSERT INTO `result` VALUES (1,1,1,1,10,'pitiror',403),(2,2,0,2,0,'pitiror',403),(3,2,1,2,10,'qe',403),(52,2,0,2,0,'pitiror',403),(102,2,0,2,0,'pitiror',403),(152,2,0,2,0,'pitiror',403),(202,2,0,2,0,'pitiror',403),(203,2,0,2,0,'pitiror',403),(204,2,0,2,0,'Quiz o kolarstwie',403),(205,1,0,1,0,'Quiz o kolarstwie',403),(206,1,0,1,0,'Quiz o kolarstwie',403),(252,1,1,1,10,'Quiz o kolarstwie',403),(253,1,0,1,0,'Quiz o kolarstwie',403),(254,2,0,2,0,'Quiz o kolarstwie',403),(255,2,0,2,0,'Quiz o kolarstwie',403),(256,2,0,2,0,'Quiz o kolarstwie',403),(257,1,0,1,0,'Quiz o kolarstwie',403),(258,1,0,1,0,'Quiz o kolarstwie',403),(259,1,0,1,0,'Quiz o kolarstwie',403),(260,1,0,1,0,'Quiz o kolarstwie',403),(261,1,0,1,0,'Quiz o kolarstwie',403),(262,1,0,1,0,'Quiz o kolarstwie',403),(263,1,0,1,0,'Quiz o kolarstwie',403),(264,1,0,1,0,'Quiz o kolarstwie',403),(265,0,1,0,10,'Quiz o kolarstwie',403),(266,1,0,1,0,'Quiz o kolarstwie',403),(267,0,1,0,10,'Quiz o kolarstwie',403),(268,1,0,1,0,'Quiz o kolarstwie',403),(269,1,0,1,0,'Quiz o kolarstwie',403),(270,1,0,1,0,'Quiz o kolarstwie',403),(271,1,0,1,0,'Quiz o kolarstwie',403),(272,1,0,1,0,'Quiz o kolarstwie',403),(302,0,1,0,10,'Cycling Quiz',403);
/*!40000 ALTER TABLE `result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `result_seq`
--

DROP TABLE IF EXISTS `result_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `result_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `result_seq`
--

LOCK TABLES `result_seq` WRITE;
/*!40000 ALTER TABLE `result_seq` DISABLE KEYS */;
INSERT INTO `result_seq` VALUES (401);
/*!40000 ALTER TABLE `result_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `profile` varchar(255) DEFAULT NULL,
  `role` enum('ADMIN','USER') DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (402,'admin@mail.com','admin','admin','$2a$10$/OK0xEZ5dX1wrhqDrIFbceyrbHDLQF9qRbQmmA1hV3T5gTeLvWyle','13213',NULL,'ADMIN','admin1'),(403,'user@.com','user','user','$2a$10$lyFJGwSinv3WdtyswlWRjOsH4U5FAMe5wpzL/XOBll8fwR7laZSOq','123244',NULL,'USER','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_seq`
--

DROP TABLE IF EXISTS `users_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_seq`
--

LOCK TABLES `users_seq` WRITE;
/*!40000 ALTER TABLE `users_seq` DISABLE KEYS */;
INSERT INTO `users_seq` VALUES (501);
/*!40000 ALTER TABLE `users_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-15 21:12:38
