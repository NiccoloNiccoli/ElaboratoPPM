-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Creato il: Giu 25, 2022 alle 18:14
-- Versione del server: 5.7.36
-- Versione PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
-- Struttura della tabella `art_images`
--

DROP TABLE IF EXISTS `art_images`;
CREATE TABLE IF NOT EXISTS `art_images` (
  `name` text NOT NULL,
  `author` text NOT NULL,
  `location` text NOT NULL,
  `year` smallint(6) NOT NULL,
  `low-res_link` text NOT NULL,
  `low-res_width` int(11) NOT NULL,
  `mid-res_link` text NOT NULL,
  `mid-res_width` int(11) NOT NULL,
  `high-res_link` text NOT NULL,
  `high-res_width` int(11) NOT NULL,
  PRIMARY KEY (`name`(500),`author`(500)) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `art_images`
--

INSERT INTO `art_images` (`name`, `author`, `location`, `year`, `low-res_link`, `low-res_width`, `mid-res_link`, `mid-res_width`, `high-res_link`, `high-res_width`) VALUES
('Primavera', 'Sandro Botticelli', 'Galleria degli Uffizi, Firenze', 1480, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/640px-Botticelli-primavera.jpg', 640, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1280px-Botticelli-primavera.jpg', 1280, 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Botticelli-primavera.jpg', 4926),
('Impression, soleil levant', 'Claude Monet', 'Musee Marmottan Monet, Parigi', 1872, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/619px-Monet_-_Impression%2C_Sunrise.jpg', 619, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1280px-Monet_-_Impression%2C_Sunrise.jpg', 1280, 'https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg', 5773);

-- --------------------------------------------------------

--
-- Struttura della tabella `art_infos`
--

DROP TABLE IF EXISTS `art_infos`;
CREATE TABLE IF NOT EXISTS `art_infos` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `author` text NOT NULL,
  `description` text NOT NULL,
  `coordinates` json NOT NULL COMMENT 'top, right, bottom, left',
  `question` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `art_infos`
--

INSERT INTO `art_infos` (`id`, `name`, `author`, `description`, `coordinates`, `question`) VALUES
(1, 'Primavera', 'Sandro Botticelli', 'Lorem ipsum dolor sit amet.', '{\"top\": \"50%\", \"left\": \"4%\", \"right\": \"93%\", \"bottom\": \"10%\"}', 'Dove si trova Mercurio?'),
(2, 'Impression, soleil levant', 'Claude Monet', 'Lorem ipsum dolor sit amet', '{\"top\": \"20%\", \"left\": \"55%\", \"right\": \"35%\", \"bottom\": \"55%\"}', 'Dove si trova il sole?');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
