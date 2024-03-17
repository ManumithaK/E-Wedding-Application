-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2024 at 04:06 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `marriage`
--

-- --------------------------------------------------------

--
-- Table structure for table `caterer`
--

CREATE TABLE `caterer` (
  `id` int(11) NOT NULL,
  `img1` text NOT NULL,
  `img2` text NOT NULL,
  `img3` text NOT NULL,
  `img4` text NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `speciality` text NOT NULL,
  `price` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `caterer`
--

INSERT INTO `caterer` (`id`, `img1`, `img2`, `img3`, `img4`, `name`, `address`, `speciality`, `price`) VALUES
(1, 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'Caterer1', 'ap', 'speciality1', 'jbsj'),
(2, 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'Caterer1', 'ap', 'speciality1', 'jbsj');

-- --------------------------------------------------------

--
-- Table structure for table `decor`
--

CREATE TABLE `decor` (
  `id` int(11) NOT NULL,
  `img1` text NOT NULL,
  `img2` text NOT NULL,
  `img3` text NOT NULL,
  `img4` text NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `theme` text NOT NULL,
  `price` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `decor`
--

INSERT INTO `decor` (`id`, `img1`, `img2`, `img3`, `img4`, `name`, `address`, `theme`, `price`) VALUES
(1, 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'decor1', 'ap', 'decorthemer', 'knans'),
(2, 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'decor1', 'ap', 'decorthemer', 'knans');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `email` text NOT NULL,
  `phone` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `phone`, `password`) VALUES
(1, 'Suresh', 'Ganta', 'Suresh@gmail.com', '929929292', 'Suresh'),
(2, 'admin', 'admin', 'admin@gmail.com', 'admin', 'admin'),
(3, 'Fyzu', 'Fyzu', 'Fyzu@gmail.com', '67777', 'Fyzu');

-- --------------------------------------------------------

--
-- Table structure for table `venue`
--

CREATE TABLE `venue` (
  `id` int(11) NOT NULL,
  `img1` text NOT NULL,
  `img2` text NOT NULL,
  `img3` text NOT NULL,
  `img4` text NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `capacity` text NOT NULL,
  `price` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `venue`
--

INSERT INTO `venue` (`id`, `img1`, `img2`, `img3`, `img4`, `name`, `address`, `capacity`, `price`) VALUES
(1, 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'jagan', 'jdscjksd', 'jcsdnc', 'nc dsv '),
(3, 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'https://telugu.newsmeter.in/h-upload/2023/02/14/339241-ycp-to-run-jagan-anna-is-our-future-campaign-in-run-up-to-2024-polls.webp', 'jagan', 'jdscjksd', 'jcsdnc', 'nc dsv ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `caterer`
--
ALTER TABLE `caterer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `decor`
--
ALTER TABLE `decor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `venue`
--
ALTER TABLE `venue`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `caterer`
--
ALTER TABLE `caterer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `decor`
--
ALTER TABLE `decor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `venue`
--
ALTER TABLE `venue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
