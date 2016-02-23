-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 23, 2016 at 02:24 PM
-- Server version: 5.5.20
-- PHP Version: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `menu_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE IF NOT EXISTS `menu` (
  `menu_id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(50) NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`menu_id`, `menu_name`, `create_date`, `update_date`) VALUES
(2, 'About Us', '2016-02-23 19:50:42', '2016-02-23 19:51:03'),
(3, 'Service', '2016-02-23 19:50:43', '2016-02-23 19:51:11'),
(4, 'Contact Us', '2016-02-23 19:50:44', '2016-02-23 19:51:27'),
(6, 'Home', '2016-02-23 19:52:45', '2016-02-23 19:52:50');

-- --------------------------------------------------------

--
-- Table structure for table `menu_possion`
--

CREATE TABLE IF NOT EXISTS `menu_possion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sorted` varchar(50) NOT NULL,
  `update_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `menu_possion`
--

INSERT INTO `menu_possion` (`id`, `sorted`, `update_date`) VALUES
(1, '1', '2016-02-23 19:50:42'),
(2, '1,2', '2016-02-23 19:50:42'),
(3, '1,2,3', '2016-02-23 19:50:43'),
(4, '1,2,3,4', '2016-02-23 19:50:44'),
(5, '1,2,3,4,5', '2016-02-23 19:50:44'),
(6, '1,2,3,5,4', '2016-02-23 19:51:51'),
(7, '1,2,3,4', '2016-02-23 19:52:09'),
(8, '2,3,4', '2016-02-23 19:52:28'),
(9, '2,3,4,6', '2016-02-23 19:52:45'),
(10, '6,2,3,4', '2016-02-23 19:53:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
