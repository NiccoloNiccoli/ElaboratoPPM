-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Creato il: Giu 23, 2022 alle 14:24
-- Versione del server: 5.7.36
-- Versione PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `artapplication`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `art_infos`
--

DROP TABLE IF EXISTS `art_infos`;
CREATE TABLE IF NOT EXISTS `art_infos` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `author` text NOT NULL,
  `location` text NOT NULL,
  `year` smallint(4) NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `coordinates` json NOT NULL COMMENT 'top, right, bottom, left',
  `question` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `art_infos`
--

INSERT INTO `art_infos` (`id`, `name`, `author`, `location`, `year`, `description`, `image`, `coordinates`, `question`) VALUES
(1, 'Primavera', 'Sandro Botticelli', 'Galleria degli Uffizi, Firenze', 1480, 'Lorem ipsum dolor sit amet.', 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Botticelli-primavera.jpg', '{\"top\": \"50%\", \"left\": \"4%\", \"right\": \"7%\", \"bottom\": \"10%\"}', 'Dove si trova Mercurio?');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
