-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Creato il: Lug 03, 2022 alle 20:52
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
('Impression, soleil levant', 'Claude Monet', 'Musee Marmottan Monet, Parigi', 1872, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/619px-Monet_-_Impression%2C_Sunrise.jpg', 619, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1280px-Monet_-_Impression%2C_Sunrise.jpg', 1280, 'https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg', 5773),
('Monna Lisa', 'Leonardo da Vinci', 'Museo del Louvre, Parigi', 1506, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/515px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 515, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1374px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 1374, 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 7479),
('Scuola di Atene', 'Raffaello Sanzio', 'Musei Vaticani, Citta\' del Vaticano', 1511, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/990px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg', 990, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg', 1280, 'https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg', 3820);

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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `art_infos`
--

INSERT INTO `art_infos` (`id`, `name`, `author`, `description`, `coordinates`, `question`) VALUES
(1, 'Primavera', 'Sandro Botticelli', 'Lorem ipsum dolor sit amet.', '{\"top\": \"14%\", \"left\": \"3%\", \"right\": \"82%\", \"bottom\": \"5%\"}', 'Dov\'e\' Mercurio?'),
(2, 'Impression, soleil levant', 'Claude Monet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis ante, rhoncus a blandit eget, sollicitudin sed tortor. In hac habitasse platea dictumst. Fusce eleifend pulvinar erat eu sollicitudin. Morbi volutpat in augue eget suscipit. Sed fermentum vulputate lacinia. In ligula leo, egestas aliquet elit in, consectetur faucibus libero. Pellentesque condimentum ligula sed quam rhoncus, rutrum tincidunt orci auctor. Sed elit neque, sollicitudin in luctus eget, feugiat id quam. Vestibulum imperdiet felis metus, a lobortis tortor tincidunt a. Pellentesque sed nisl ut justo varius consequat at lacinia felis. Duis tempus dui id enim finibus rutrum. Donec molestie massa sed dolor facilisis, sed imperdiet nibh blandit. Proin dignissim sapien non augue tristique imperdiet. Proin maximus at eros vitae varius.\r\n\r\nMauris cursus nisl sed massa dapibus, quis facilisis arcu sollicitudin. Nullam vitae pulvinar elit, quis consectetur eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin semper eros vel imperdiet sollicitudin. Donec sed nulla in arcu pellentesque ullamcorper ac feugiat ipsum. Nunc a finibus lectus. Ut ut risus sollicitudin, fringilla eros et, feugiat tortor. Phasellus fermentum rhoncus ex id interdum. Praesent et luctus orci, quis commodo velit. Mauris ut metus quis nibh lobortis faucibus sit amet at mi. Nulla convallis aliquam tortor, a vestibulum erat placerat eget. Praesent lobortis mauris vel nibh fringilla maximus.\r\n\r\nMauris mattis turpis id mi aliquam blandit. Phasellus sit amet feugiat est, quis finibus velit. Suspendisse sed pharetra dolor. Duis vel sollicitudin lectus, ac scelerisque turpis. Aliquam erat volutpat. Etiam scelerisque aliquet purus a dignissim. In hac habitasse platea dictumst. Praesent sapien sem, venenatis eget enim in, placerat luctus diam. Pellentesque tempor nisi elementum aliquam maximus. Cras interdum augue justo, id volutpat elit accumsan id. Aliquam nec venenatis orci, non luctus ipsum.\r\n\r\nSed ornare tellus lorem, vel laoreet arcu interdum non. Ut ullamcorper interdum turpis ac viverra. Integer eu enim ut tortor pharetra rhoncus. Vivamus auctor, mi vel fermentum rhoncus, leo massa facilisis diam, nec faucibus lorem risus eu leo. Nullam congue nisi ipsum, sagittis tempus libero laoreet quis. Nulla dapibus, augue eget convallis vestibulum, leo neque laoreet est, vitae eleifend sem est quis lorem. Nam consequat, odio at commodo fringilla, sem turpis finibus risus, nec malesuada elit quam tristique diam. Vestibulum nec urna mollis ex elementum luctus nec ut tellus. Sed venenatis hendrerit blandit. Donec maximus magna id neque fermentum suscipit. Mauris ut ipsum ligula. Vivamus ante massa, laoreet ac risus ac, tempus vehicula sem.\r\n\r\nSuspendisse odio tortor, posuere in nunc vel, rutrum vestibulum nibh. Aliquam erat volutpat. Aenean laoreet tellus ac feugiat ornare. Aenean sodales in mauris eu facilisis. Donec efficitur eleifend nulla, nec faucibus ex egestas eu. Nam eget diam sed ligula accumsan molestie sit amet nec eros. Suspendisse ullamcorper elit sapien, id tincidunt mauris posuere ac. Curabitur tincidunt, lacus quis gravida feugiat, erat nisi eleifend sem, sed tincidunt justo lectus pellentesque dui. Ut sit amet risus vitae turpis molestie iaculis in vel ex. Praesent porttitor vel lacus eget commodo. Suspendisse potenti. Curabitur sed dui ac ligula vehicula ultrices.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. In felis ante, rhoncus a blandit eget, sollicitudin sed tortor. In hac habitasse platea dictumst. Fusce eleifend pulvinar erat eu sollicitudin. Morbi volutpat in augue eget suscipit. Sed fermentum vulputate lacinia. In ligula leo, egestas aliquet elit in, consectetur faucibus libero. Pellentesque condimentum ligula sed quam rhoncus, rutrum tincidunt orci auctor. Sed elit neque, sollicitudin in luctus eget, feugiat id quam. Vestibulum imperdiet felis metus, a lobortis tortor tincidunt a. Pellentesque sed nisl ut justo varius consequat at lacinia felis. Duis tempus dui id enim finibus rutrum. Donec molestie massa sed dolor facilisis, sed imperdiet nibh blandit. Proin dignissim sapien non augue tristique imperdiet. Proin maximus at eros vitae varius.\r\n\r\nMauris cursus nisl sed massa dapibus, quis facilisis arcu sollicitudin. Nullam vitae pulvinar elit, quis consectetur eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin semper eros vel imperdiet sollicitudin. Donec sed nulla in arcu pellentesque ullamcorper ac feugiat ipsum. Nunc a finibus lectus. Ut ut risus sollicitudin, fringilla eros et, feugiat tortor. Phasellus fermentum rhoncus ex id interdum. Praesent et luctus orci, quis commodo velit. Mauris ut metus quis nibh lobortis faucibus sit amet at mi. Nulla convallis aliquam tortor, a vestibulum erat placerat eget. Praesent lobortis mauris vel nibh fringilla maximus.\r\n\r\nMauris mattis turpis id mi aliquam blandit. Phasellus sit amet feugiat est, quis finibus velit. Suspendisse sed pharetra dolor. Duis vel sollicitudin lectus, ac scelerisque turpis. Aliquam erat volutpat. Etiam scelerisque aliquet purus a dignissim. In hac habitasse platea dictumst. Praesent sapien sem, venenatis eget enim in, placerat luctus diam. Pellentesque tempor nisi elementum aliquam maximus. Cras interdum augue justo, id volutpat elit accumsan id. Aliquam nec venenatis orci, non luctus ipsum.\r\n\r\nSed ornare tellus lorem, vel laoreet arcu interdum non. Ut ullamcorper interdum turpis ac viverra. Integer eu enim ut tortor pharetra rhoncus. Vivamus auctor, mi vel fermentum rhoncus, leo massa facilisis diam, nec faucibus lorem risus eu leo. Nullam congue nisi ipsum, sagittis tempus libero laoreet quis. Nulla dapibus, augue eget convallis vestibulum, leo neque laoreet est, vitae eleifend sem est quis lorem. Nam consequat, odio at commodo fringilla, sem turpis finibus risus, nec malesuada elit quam tristique diam. Vestibulum nec urna mollis ex elementum luctus nec ut tellus. Sed venenatis hendrerit blandit. Donec maximus magna id neque fermentum suscipit. Mauris ut ipsum ligula. Vivamus ante massa, laoreet ac risus ac, tempus vehicula sem.\r\n\r\nSuspendisse odio tortor, posuere in nunc vel, rutrum vestibulum nibh. Aliquam erat volutpat. Aenean laoreet tellus ac feugiat ornare. Aenean sodales in mauris eu facilisis. Donec efficitur eleifend nulla, nec faucibus ex egestas eu. Nam eget diam sed ligula accumsan molestie sit amet nec eros. Suspendisse ullamcorper elit sapien, id tincidunt mauris posuere ac. Curabitur tincidunt, lacus quis gravida feugiat, erat nisi eleifend sem, sed tincidunt justo lectus pellentesque dui. Ut sit amet risus vitae turpis molestie iaculis in vel ex. Praesent porttitor vel lacus eget commodo. Suspendisse potenti. Curabitur sed dui ac ligula vehicula ultrices.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. In felis ante, rhoncus a blandit eget, sollicitudin sed tortor. In hac habitasse platea dictumst. Fusce eleifend pulvinar erat eu sollicitudin. Morbi volutpat in augue eget suscipit. Sed fermentum vulputate lacinia. In ligula leo, egestas aliquet elit in, consectetur faucibus libero. Pellentesque condimentum ligula sed quam rhoncus, rutrum tincidunt orci auctor. Sed elit neque, sollicitudin in luctus eget, feugiat id quam. Vestibulum imperdiet felis metus, a lobortis tortor tincidunt a. Pellentesque sed nisl ut justo varius consequat at lacinia felis. Duis tempus dui id enim finibus rutrum. Donec molestie massa sed dolor facilisis, sed imperdiet nibh blandit. Proin dignissim sapien non augue tristique imperdiet. Proin maximus at eros vitae varius.\r\n\r\nMauris cursus nisl sed massa dapibus, quis facilisis arcu sollicitudin. Nullam vitae pulvinar elit, quis consectetur eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin semper eros vel imperdiet sollicitudin. Donec sed nulla in arcu pellentesque ullamcorper ac feugiat ipsum. Nunc a finibus lectus. Ut ut risus sollicitudin, fringilla eros et, feugiat tortor. Phasellus fermentum rhoncus ex id interdum. Praesent et luctus orci, quis commodo velit. Mauris ut metus quis nibh lobortis faucibus sit amet at mi. Nulla convallis aliquam tortor, a vestibulum erat placerat eget. Praesent lobortis mauris vel nibh fringilla maximus.\r\n\r\nMauris mattis turpis id mi aliquam blandit. Phasellus sit amet feugiat est, quis finibus velit. Suspendisse sed pharetra dolor. Duis vel sollicitudin lectus, ac scelerisque turpis. Aliquam erat volutpat. Etiam scelerisque aliquet purus a dignissim. In hac habitasse platea dictumst. Praesent sapien sem, venenatis eget enim in, placerat luctus diam. Pellentesque tempor nisi elementum aliquam maximus. Cras interdum augue justo, id volutpat elit accumsan id. Aliquam nec venenatis orci, non luctus ipsum.\r\n\r\nSed ornare tellus lorem, vel laoreet arcu interdum non. Ut ullamcorper interdum turpis ac viverra. Integer eu enim ut tortor pharetra rhoncus. Vivamus auctor, mi vel fermentum rhoncus, leo massa facilisis diam, nec faucibus lorem risus eu leo. Nullam congue nisi ipsum, sagittis tempus libero laoreet quis. Nulla dapibus, augue eget convallis vestibulum, leo neque laoreet est, vitae eleifend sem est quis lorem. Nam consequat, odio at commodo fringilla, sem turpis finibus risus, nec malesuada elit quam tristique diam. Vestibulum nec urna mollis ex elementum luctus nec ut tellus. Sed venenatis hendrerit blandit. Donec maximus magna id neque fermentum suscipit. Mauris ut ipsum ligula. Vivamus ante massa, laoreet ac risus ac, tempus vehicula sem.\r\n\r\nSuspendisse odio tortor, posuere in nunc vel, rutrum vestibulum nibh. Aliquam erat volutpat. Aenean laoreet tellus ac feugiat ornare. Aenean sodales in mauris eu facilisis. Donec efficitur eleifend nulla, nec faucibus ex egestas eu. Nam eget diam sed ligula accumsan molestie sit amet nec eros. Suspendisse ullamcorper elit sapien, id tincidunt mauris posuere ac. Curabitur tincidunt, lacus quis gravida feugiat, erat nisi eleifend sem, sed tincidunt justo lectus pellentesque dui. Ut sit amet risus vitae turpis molestie iaculis in vel ex. Praesent porttitor vel lacus eget commodo. Suspendisse potenti. Curabitur sed dui ac ligula vehicula ultrices.', '{\"top\": \"28%\", \"left\": \"59%\", \"right\": \"37%\", \"bottom\": \"66%\"}', 'Dov\'e\' il sole?'),
(3, 'Scuola di Atene', 'Raffaello Sanzio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dolor in sapien dapibus, ac tincidunt orci sodales. Fusce in dolor in mauris pulvinar placerat. Pellentesque finibus viverra viverra. Fusce varius vehicula mauris, placerat consectetur lectus. Donec dapibus lacus id pellentesque congue. Phasellus convallis lectus et condimentum malesuada. Morbi id nibh in odio consequat blandit.', '{\"top\": \"43.5%\", \"left\": \"46.5%\", \"right\": \"48%\", \"bottom\": \"40%\"}', 'In questo affresco c\'e\' una corrispondenza tra i filosofi rappresentati e i principali artisti del \'500: dov\'e\' Leonardo da Vinci?'),
(4, 'Monna Lisa', 'Leonardo da Vinci', 'Fusce porttitor quam id laoreet sollicitudin. Aenean venenatis posuere justo sit amet interdum. Sed pulvinar facilisis dui, et hendrerit tortor luctus in. Pellentesque dui justo, euismod at quam id, porta imperdiet ligula. Pellentesque euismod et tortor eu maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed fringilla tristique dolor, bibendum venenatis mi porttitor sit amet. Vestibulum vel bibendum magna. Pellentesque ut enim eu elit viverra sodales. Morbi scelerisque consectetur eros. Proin rhoncus purus suscipit, elementum nisl non, euismod turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis varius tortor.', '{\"top\": \"21%\", \"left\": \"36%\", \"right\": \"45%\", \"bottom\": \"75%\"}', 'Dove sono gli occhi?');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
