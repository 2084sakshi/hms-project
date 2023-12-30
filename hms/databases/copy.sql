-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: medconnect
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `appt_id` int NOT NULL AUTO_INCREMENT,
  `d_id` int NOT NULL,
  `p_id` int NOT NULL,
  `appt_date` date NOT NULL,
  `appt_time` time NOT NULL,
  `status` enum('Scheduled','Cancelled','Completed') NOT NULL,
  `notes` text,
  PRIMARY KEY (`appt_id`),
  KEY `p_id` (`p_id`),
  KEY `d_id` (`d_id`),
  CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`d_id`) REFERENCES `doctor` (`d_id`),
  CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`p_id`) REFERENCES `patient` (`p_id`),
  CONSTRAINT `appointment_ibfk_3` FOREIGN KEY (`p_id`) REFERENCES `patient` (`p_id`) ON DELETE CASCADE,
  CONSTRAINT `appointment_ibfk_4` FOREIGN KEY (`d_id`) REFERENCES `doctor` (`d_id`) ON DELETE CASCADE,
  CONSTRAINT `appointment_ibfk_5` FOREIGN KEY (`d_id`) REFERENCES `doctor` (`d_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES (1,1,1,'2023-10-15','14:30:00','Scheduled','Follow-up checkup'),(2,2,2,'2023-10-16','10:00:00','Scheduled','Annual checkup'),(55,1,12,'2023-10-15','14:30:00','Scheduled','Routine Cardiac Checkup'),(56,29,9,'2023-10-16','10:00:00','Scheduled','Neuro consultation - occasional headaches'),(57,2,2,'2023-10-17','09:30:00','Scheduled','Child immunization schedule'),(58,30,10,'2023-10-18','11:00:00','Scheduled','Back pain over the past month'),(59,35,13,'2023-10-19','14:15:00','Scheduled','Routine pregnancy checkup'),(60,36,14,'2023-10-20','15:30:00','Scheduled','MRI review'),(61,37,1,'2023-10-21','09:45:00','Scheduled','Dental cleaning'),(62,38,4,'2023-10-22','10:30:00','Scheduled','Eczema follow-up'),(63,31,9,'2023-10-23','16:00:00','Scheduled','Thyroid medication review'),(64,1,8,'2023-10-24','10:45:00','Scheduled','Annual eye checkup'),(65,1,6,'2023-10-25','15:15:00','Scheduled','Knee pain consultation'),(66,2,4,'2023-10-26','14:20:00','Scheduled','Follow-up post-surgery'),(67,38,2,'2023-10-27','13:00:00','Scheduled','Skin allergy consultation'),(69,2,16,'2023-10-15','14:30:00','Scheduled','blood test');
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `d_id` int NOT NULL AUTO_INCREMENT,
  `lname` varchar(50) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `qualification` varchar(100) NOT NULL,
  `specialization` varchar(100) NOT NULL,
  `emailid` varchar(100) DEFAULT NULL,
  `phone_no` varchar(15) DEFAULT NULL,
  `d_schedule` varchar(50) NOT NULL,
  PRIMARY KEY (`d_id`),
  UNIQUE KEY `emailid` (`emailid`),
  UNIQUE KEY `phone_no` (`phone_no`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'Johnson','Michael','MD','Cardiology','michael.johnson@example.com','123456789','Monday-Friday'),(2,'Anderson','Sarah','MD','Dermatology','sarah.anderson@example.com','987654321','Monday-Wednesday-Friday'),(29,'Sharma','Ravi','MD','Cardiology','ravi.sharma@gmail.com','123756789','Monday-Friday'),(30,'Patel','Priyanka','MD','Neurology','priyanka.patel@yahoo.in','876543210','Tuesday-Thursday'),(31,'Gupta','Amit','MD','Pediatrics','amit.gupta@gmail.com','111222333','Monday-Tuesday'),(32,'Singh','Anjali','MD','Orthopedics','anjali.singh@yahoo.in','444333555','Wednesday-Friday'),(33,'Dixit','Vijay','DO','Gynecology','vijay.dixit@gmail.com','333555777','Monday-Friday'),(34,'Kapoor','Suman','MD','Radiology','suman.kapoor@yahoo.in','666777999','Thursday-Saturday'),(35,'Mishra','Lakshmi','MD','Dentistry','lakshmi.mishra@gmail.com','111444666','Monday-Wednesday'),(36,'Verma','Karan','DO','Dermatology','karan.verma@yahoo.in','555666777','Tuesday-Thursday'),(37,'Iyer','Madhuri','MD','Endocrinology','madhuri.iyer@gmail.com','444555666','Monday-Tuesday'),(38,'Bose','Ramesh','DO','Ophthalmology','ramesh.bose@yahoo.in','999111444','Wednesday-Friday'),(39,'Roy','Jaya','MD','Rheumatology','jaya.roy@gmail.com','777888999','Monday-Friday'),(40,'Malhotra','Shyam','MD','Urology','shyam.malhotra@yahoo.in','333444555','Tuesday-Thursday'),(41,'Rao','Sarita','DO','Dermatology','sarita.rao@gmail.com','987694321','Monday-Wednesday-Friday');
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medical_history`
--

DROP TABLE IF EXISTS `medical_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medical_history` (
  `h_id` int NOT NULL AUTO_INCREMENT,
  `d_id` int NOT NULL,
  `p_id` int NOT NULL,
  `appt_id` int NOT NULL,
  `date` date NOT NULL,
  `notes` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`h_id`),
  KEY `p_id` (`p_id`),
  KEY `d_id` (`d_id`),
  KEY `appt_id` (`appt_id`),
  CONSTRAINT `medical_history_ibfk_1` FOREIGN KEY (`d_id`) REFERENCES `doctor` (`d_id`),
  CONSTRAINT `medical_history_ibfk_2` FOREIGN KEY (`p_id`) REFERENCES `patient` (`p_id`),
  CONSTRAINT `medical_history_ibfk_3` FOREIGN KEY (`appt_id`) REFERENCES `appointment` (`appt_id`),
  CONSTRAINT `medical_history_ibfk_4` FOREIGN KEY (`d_id`) REFERENCES `doctor` (`d_id`) ON DELETE CASCADE,
  CONSTRAINT `medical_history_ibfk_5` FOREIGN KEY (`d_id`) REFERENCES `doctor` (`d_id`) ON DELETE CASCADE,
  CONSTRAINT `medical_history_ibfk_6` FOREIGN KEY (`appt_id`) REFERENCES `appointment` (`appt_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_history`
--

LOCK TABLES `medical_history` WRITE;
/*!40000 ALTER TABLE `medical_history` DISABLE KEYS */;
INSERT INTO `medical_history` VALUES (7,1,1,1,'2023-10-15','Patient had a follow-up checkup.'),(8,2,2,2,'2023-10-16','Patient presented with common cold symptoms.'),(23,30,1,1,'2023-10-15','Routine cardiac check-up showed no issues.'),(24,41,3,2,'2023-10-16','Occasional headaches - suggested to maintain a diary.'),(25,33,2,63,'2023-10-17','MMR vaccination completed.'),(26,1,5,64,'2023-10-18','Back pain due to poor posture.'),(27,35,6,59,'2023-10-19','Routine pregnancy checkup - All well.'),(28,36,8,56,'2023-10-20','MRI reviewed - All clear.'),(29,41,7,57,'2023-10-21','Suggested bi-annual dental checkup'),(30,30,1,1,'2023-10-15','Routine cardiac check-up showed no issues.'),(31,41,3,2,'2023-10-16','Occasional headaches - suggested to maintain a diary.'),(32,33,2,63,'2023-10-17','MMR vaccination completed.'),(33,1,5,64,'2023-10-18','Back pain due to poor posture.'),(34,35,6,59,'2023-10-19','Routine pregnancy checkup - All well.'),(35,36,8,56,'2023-10-20','MRI reviewed - All clear.'),(36,41,7,57,'2023-10-21','Suggested bi-annual dental checkup'),(37,30,1,1,'2023-10-15','Routine cardiac check-up showed no issues.'),(38,41,3,2,'2023-10-16','Occasional headaches - suggested to maintain a diary.'),(39,33,2,63,'2023-10-17','MMR vaccination completed.'),(40,1,5,64,'2023-10-18','Back pain due to poor posture.'),(41,35,6,59,'2023-10-19','Routine pregnancy checkup - All well.'),(42,36,8,56,'2023-10-20','MRI reviewed - All clear.'),(43,41,7,57,'2023-10-21','Suggested bi-annual dental checkup'),(44,30,1,1,'2023-10-15','Routine cardiac check-up showed no issues.'),(45,41,3,2,'2023-10-16','Occasional headaches - suggested to maintain a diary.'),(46,33,2,63,'2023-10-17','MMR vaccination completed.'),(47,1,5,64,'2023-10-18','Back pain due to poor posture.'),(48,35,6,59,'2023-10-19','Routine pregnancy checkup - All well.'),(49,36,8,56,'2023-10-20','MRI reviewed - All clear.'),(50,41,7,57,'2023-10-21','Suggested bi-annual dental checkup'),(51,2,16,69,'2023-10-15','Patient should takes visit again after 2 weeks');
/*!40000 ALTER TABLE `medical_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `p_id` int NOT NULL AUTO_INCREMENT,
  `lname` varchar(50) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `dob` date NOT NULL,
  `age` int DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone_no` varchar(15) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `allergies` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'Smith','John','1990-05-15',31,'john.smith@example.com','123456789','1234 Elm St, Some City','Pollen'),(2,'Johnson','Mary','1985-08-21',36,'mary.johnson@example.com','987654321','5678 Oak St, Another City','Penicillin'),(3,'Davis','Michael','1978-03-10',43,'michael.davis@example.com','111223344','7890 Pine St, Different City','Nuts'),(4,'Brown','Anna','1995-11-03',26,'anna.brown@example.com','555666777','890 Maple Ave, Another City','Dust'),(5,'Taylor','David','1982-07-19',39,'david.taylor@example.com','444555666','6789 Cedar St, Some City','Lactose'),(6,'Miller','Laura','1970-12-05',51,'laura.miller@example.com','999888777','456 Birch Ave, Different City','Shellfish'),(7,'Harris','Alex','1988-09-08',33,'alex.harris@example.com','777888999','321 Pinecone Ln, Some City','Pollen'),(8,'Anderson','Jessica','1992-02-14',29,'jessica.anderson@example.com','222333444','101 Oakwood Dr, Another City','Pollen'),(9,'Clark','Christopher','1980-06-27',41,'christopher.clark@example.com','121314151','222 Pine St, Different City','Penicillin'),(10,'Wright','Michelle','1993-04-18',28,'michelle.wright@example.com','989910010','999 Maple Ave, Some City','Pollen'),(11,'King','Sarah','1987-01-02',34,'sarah.king@example.com','555444333','123 Elm St, Another City','Shellfish'),(12,'Brown','Brian','1975-08-12',46,'brian.brown@example.com','444333222','888 Oak St, Different City','Dust'),(13,'Lee','Rachel','1984-03-30',37,'rachel.lee@example.com','777666555','321 Cedar Ave, Some City','Pollen'),(14,'Murphy','Kevin','1998-06-10',23,'kevin.murphy@example.com','666555444','555 Pinecone Ln, Another City','Nuts'),(15,'Young','Eric','1972-10-28',49,'eric.young@example.com','333222111','444 Birch Dr, Different City','Pollen'),(16,'Shreya','sakpal','2003-05-15',20,'2022.shreya.sakpal@ves.ac.in','8315479574','1234 Elm St, Some City','milk');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescription`
--

DROP TABLE IF EXISTS `prescription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescription` (
  `pres_id` int NOT NULL AUTO_INCREMENT,
  `p_id` int NOT NULL,
  `d_id` int NOT NULL,
  `date` date NOT NULL,
  `prescription` text NOT NULL,
  PRIMARY KEY (`pres_id`),
  KEY `p_id` (`p_id`),
  KEY `d_id` (`d_id`),
  CONSTRAINT `prescription_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `patient` (`p_id`),
  CONSTRAINT `prescription_ibfk_2` FOREIGN KEY (`d_id`) REFERENCES `doctor` (`d_id`),
  CONSTRAINT `prescription_ibfk_3` FOREIGN KEY (`p_id`) REFERENCES `patient` (`p_id`) ON DELETE CASCADE,
  CONSTRAINT `prescription_ibfk_4` FOREIGN KEY (`d_id`) REFERENCES `doctor` (`d_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescription`
--

LOCK TABLES `prescription` WRITE;
/*!40000 ALTER TABLE `prescription` DISABLE KEYS */;
INSERT INTO `prescription` VALUES (3,1,1,'2023-10-15','Prescribe medication for flu.'),(4,2,2,'2023-10-16','Prescribe pain relievers for backache.'),(18,1,1,'2023-10-15','Prescribe heart medication.'),(19,3,1,'2023-10-16','Suggest headache relief medication.'),(20,2,33,'2023-10-17','Completed MMR vaccination.'),(21,5,34,'2023-10-18','Suggested physiotherapy.'),(22,6,35,'2023-10-19','Regular pregnancy vitamins.'),(23,8,36,'2023-10-20','MRI showed no issues.'),(24,7,1,'2023-10-21','Prescribed mouthwash.'),(25,10,38,'2023-10-22','Eczema cream prescription.'),(26,12,29,'2023-10-23','Adjustment in thyroid medicine.'),(27,11,40,'2023-10-24','Prescribed corrective lenses.'),(28,13,41,'2023-10-25','Pain relief for knee.'),(29,4,32,'2023-10-26','Post-surgery recovery is satisfactory.'),(30,9,2,'2023-10-27','Allergy relief medication.');
/*!40000 ALTER TABLE `prescription` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-13 23:53:11
