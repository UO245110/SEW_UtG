-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-05-2022 a las 18:31:47
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `database`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tcards`
--

CREATE TABLE `tcards` (
  `IDCard` int(11) NOT NULL,
  `Name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Collection` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tcards`
--

INSERT INTO `tcards` (`IDCard`, `Name`, `Collection`) VALUES
(1, 'Gran maestro de flores', 'Dungeons And Dragons'),
(2, 'Mordenkainen', 'Dungeons And Dragons'),
(3, 'Lolth la reina de arañas', 'Dungeons And Dragons'),
(4, 'Zariel archiduque del averno', 'Dungeons And Dragons');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tcomments`
--

CREATE TABLE `tcomments` (
  `IDUser` int(11) NOT NULL,
  `IDCard` int(11) NOT NULL,
  `Comment` varchar(140) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tcomments`
--

INSERT INTO `tcomments` (`IDUser`, `IDCard`, `Comment`) VALUES
(1, 1, 'Buena carta para mazos agresivos.'),
(1, 2, 'La tengo y no me parece la gran cosa.'),
(1, 3, 'No me gusta nada que haya cartas relacionadas con arañas. Me dan miedito.'),
(2, 3, 'Me encantan los insectos, fue ver la carta y querer comprarla.'),
(3, 3, 'Ni me van ni me vienen los insectos, el diseño de la reina me gusta. Espero que saquen otra araña en la nueva colección.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `toffers`
--

CREATE TABLE `toffers` (
  `IDUser` int(11) NOT NULL,
  `IDCard` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  `State` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `toffers`
--

INSERT INTO `toffers` (`IDUser`, `IDCard`, `Price`, `State`) VALUES
(1, 1, 10, 'GOOD'),
(1, 3, 5, 'BAD'),
(1, 4, 100, 'VERY GOOD');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tusers`
--

CREATE TABLE `tusers` (
  `IDUser` int(11) NOT NULL,
  `Name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Surname` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tusers`
--

INSERT INTO `tusers` (`IDUser`, `Name`, `Surname`) VALUES
(1, 'Xurde', 'Mares'),
(2, 'Beatriz', 'Omar'),
(3, 'Lucía', 'Palacio');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tcards`
--
ALTER TABLE `tcards`
  ADD PRIMARY KEY (`IDCard`);

--
-- Indices de la tabla `tcomments`
--
ALTER TABLE `tcomments`
  ADD PRIMARY KEY (`IDUser`,`IDCard`),
  ADD KEY `IDCard` (`IDCard`);

--
-- Indices de la tabla `toffers`
--
ALTER TABLE `toffers`
  ADD PRIMARY KEY (`IDUser`,`IDCard`),
  ADD KEY `IDCard` (`IDCard`);

--
-- Indices de la tabla `tusers`
--
ALTER TABLE `tusers`
  ADD PRIMARY KEY (`IDUser`),
  ADD UNIQUE KEY `Name` (`Name`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tcomments`
--
ALTER TABLE `tcomments`
  ADD CONSTRAINT `tcomments_ibfk_1` FOREIGN KEY (`IDCard`) REFERENCES `tcards` (`IDCard`),
  ADD CONSTRAINT `tcomments_ibfk_2` FOREIGN KEY (`IDUser`) REFERENCES `tusers` (`IDUser`);

--
-- Filtros para la tabla `toffers`
--
ALTER TABLE `toffers`
  ADD CONSTRAINT `toffers_ibfk_1` FOREIGN KEY (`IDCard`) REFERENCES `tcards` (`IDCard`),
  ADD CONSTRAINT `toffers_ibfk_2` FOREIGN KEY (`IDUser`) REFERENCES `tusers` (`IDUser`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
