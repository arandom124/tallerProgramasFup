-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-03-2025 a las 01:06:19
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `madre_dedios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `CodigoCurso` varchar(10) NOT NULL,
  `NombreCurso` varchar(100) NOT NULL,
  `Grado` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`CodigoCurso`, `NombreCurso`, `Grado`) VALUES
('C001', 'Primero A', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente`
--

CREATE TABLE `docente` (
  `TipoDocumento` varchar(10) NOT NULL,
  `Documento` varchar(20) NOT NULL,
  `Nombres` varchar(50) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `Genero` char(1) NOT NULL,
  `Telefono` varchar(15) NOT NULL,
  `Correo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `docente`
--

INSERT INTO `docente` (`TipoDocumento`, `Documento`, `Nombres`, `Apellidos`, `FechaNacimiento`, `Genero`, `Telefono`, `Correo`) VALUES
('CC', '987654321', 'Ana', 'Gómez', '1985-08-20', 'F', '3109876543', 'ana.gomez@colegio.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `TipoDocumento` varchar(10) NOT NULL,
  `Documento` varchar(20) NOT NULL,
  `Nombres` varchar(50) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `Genero` char(1) NOT NULL,
  `NombreCompletoAcudiente` varchar(100) NOT NULL,
  `TelefonoAcudiente` varchar(15) NOT NULL,
  `CodigoCurso` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`TipoDocumento`, `Documento`, `Nombres`, `Apellidos`, `FechaNacimiento`, `Genero`, `NombreCompletoAcudiente`, `TelefonoAcudiente`, `CodigoCurso`) VALUES
('CC', '123456789', 'Juan', 'Pérez', '2010-05-15', 'M', 'María Pérez', '3001234567', 'C001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `Codigo` varchar(10) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Duracion` int(11) NOT NULL,
  `Grado` varchar(10) NOT NULL,
  `Resumen` text DEFAULT NULL,
  `TipoDocumentoDocente` varchar(10) NOT NULL,
  `DocumentoDocente` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`Codigo`, `Nombre`, `Duracion`, `Grado`, `Resumen`, `TipoDocumentoDocente`, `DocumentoDocente`) VALUES
('M001', 'Desarrollo Web', 60, '1', 'Curso JavaScript básicas', 'CC', '987654321');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matricula`
--

CREATE TABLE `matricula` (
  `TipoDocumentoEstudiante` varchar(10) NOT NULL,
  `DocumentoEstudiante` varchar(20) NOT NULL,
  `CodigoMateria` varchar(10) NOT NULL,
  `FechaMatricula` date NOT NULL,
  `ValorMatricula` decimal(10,2) NOT NULL,
  `GradoMatricula` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `matricula`
--

INSERT INTO `matricula` (`TipoDocumentoEstudiante`, `DocumentoEstudiante`, `CodigoMateria`, `FechaMatricula`, `ValorMatricula`, `GradoMatricula`) VALUES
('CC', '123456789', 'M001', '2023-10-01', 500000.00, '1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`CodigoCurso`);

--
-- Indices de la tabla `docente`
--
ALTER TABLE `docente`
  ADD PRIMARY KEY (`TipoDocumento`,`Documento`);

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`TipoDocumento`,`Documento`),
  ADD KEY `CodigoCurso` (`CodigoCurso`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`Codigo`),
  ADD KEY `TipoDocumentoDocente` (`TipoDocumentoDocente`,`DocumentoDocente`);

--
-- Indices de la tabla `matricula`
--
ALTER TABLE `matricula`
  ADD PRIMARY KEY (`TipoDocumentoEstudiante`,`DocumentoEstudiante`,`CodigoMateria`),
  ADD KEY `CodigoMateria` (`CodigoMateria`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD CONSTRAINT `estudiante_ibfk_1` FOREIGN KEY (`CodigoCurso`) REFERENCES `curso` (`CodigoCurso`);

--
-- Filtros para la tabla `materia`
--
ALTER TABLE `materia`
  ADD CONSTRAINT `materia_ibfk_1` FOREIGN KEY (`TipoDocumentoDocente`,`DocumentoDocente`) REFERENCES `docente` (`TipoDocumento`, `Documento`);

--
-- Filtros para la tabla `matricula`
--
ALTER TABLE `matricula`
  ADD CONSTRAINT `matricula_ibfk_1` FOREIGN KEY (`TipoDocumentoEstudiante`,`DocumentoEstudiante`) REFERENCES `estudiante` (`TipoDocumento`, `Documento`),
  ADD CONSTRAINT `matricula_ibfk_2` FOREIGN KEY (`CodigoMateria`) REFERENCES `materia` (`Codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
