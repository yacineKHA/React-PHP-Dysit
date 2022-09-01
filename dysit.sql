-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 01, 2022 at 07:50 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dysit`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id_article` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `text` longtext NOT NULL,
  `image_article` varchar(200) NOT NULL,
  `date_article` date NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_cat` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id_article`, `title`, `text`, `image_article`, `date_article`, `id_user`, `id_cat`) VALUES
(1, 'article111', 'blabla blakzjlkfjslkfjlsdjflksdjfsjdhfkjsdfh', '649_outlook-g2fd8e7785_1920.jpg', '2022-06-10', 1, 5),
(2, 'Cyberpunk 2077', 'Incroyable première période tu as ...', 'cyberpunk-2077.jpg', '2022-06-10', 2, 3),
(3, 'article1', 'blabla blakzjlkfjslkfjlsdjflksdjfsjdhfkjsdfh', '649_outlook-g2fd8e7785_1920.jpg', '2022-06-10', 1, 5),
(4, 'article1', 'blabla blakzjlkfjslkfjlsdjflksdjfsjdhfkjsdfh', '649_outlook-g2fd8e7785_1920.jpg', '2022-06-10', 1, 2),
(5, 'article1', 'blabla blakzjlkfjslkfjlsdjflksdjfsjdhfkjsdfh', '649_outlook-g2fd8e7785_1920.jpg', '2022-06-10', 1, 2),
(6, 'article1', 'blabla blakzjlkfjslkfjlsdjflksdjfsjdhfkjsdfh', '649_outlook-g2fd8e7785_1920.jpg', '2022-06-10', 1, 3),
(7, 'article1', 'blabla blakzjlkfjslkfjlsdjflksdjfsjdhfkjsdfh', '649_outlook-g2fd8e7785_1920.jpg', '2022-06-10', 1, 6),
(8, 'article1', 'blabla blakzjlkfjslkfjlsdjflksdjfsjdhfkjsdfh', '649_outlook-g2fd8e7785_1920.jpg', '2022-06-10', 1, 3),
(9, 'article1', 'blabla blakzjlkfjslkfjlsdjflksdjfsjdhfkjsdfh', '649_outlook-g2fd8e7785_1920.jpg', '2022-06-10', 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id_cat` int(11) NOT NULL,
  `name_cat` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id_cat`, `name_cat`) VALUES
(1, 'Sport'),
(2, 'Politique'),
(3, 'Jeux-vidéo'),
(4, 'Cinéma'),
(5, 'Voyage'),
(6, 'Geek');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id_comment` int(11) NOT NULL,
  `text_comment` varchar(100) NOT NULL,
  `date_comment` date NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_article` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id_comment`, `text_comment`, `date_comment`, `id_user`, `id_article`) VALUES
(1, 'Article un peu bof bof franchement, j\'aime pas trop', '2022-06-11', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `droits`
--

CREATE TABLE `droits` (
  `id_droits` int(11) NOT NULL,
  `type_droits` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `droits`
--

INSERT INTO `droits` (`id_droits`, `type_droits`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `liker`
--

CREATE TABLE `liker` (
  `id_article` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `liker`
--

INSERT INTO `liker` (`id_article`, `id_user`) VALUES
(2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mdp` varchar(200) NOT NULL,
  `image_profile` varchar(100) DEFAULT NULL,
  `id_droits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `pseudo`, `email`, `mdp`, `image_profile`, `id_droits`) VALUES
(1, 'yass', 'yass@mail.fr', '$2y$10$hMMasV76sPO2Pa6mk/5jGeo.hOgmPunNiRze8Tmx558qTCOcnonOO', NULL, 2),
(2, 'momo', 'momo@mail.fr', '$2y$10$JiodPn2ufueQoLQjLj.Xbezcq.TQj6.YzpLt0/KYPV2lXH.r.9hO.', NULL, 2),
(3, 'yiyi', 'yiyi@mail.fr', '$2y$10$P.i1QbKdDwDFybxNgqV5JONpdAV0wyR.hhkq.beDce7uMe4oa8S.u', NULL, 2),
(4, 'juju', 'juju@mail.fr', '$2y$10$1nlvHbfJvVEkZVBmG3tnE.E4gu2pUBmTQmI1KrtD/jSxSmvXXE7i6', NULL, 2),
(5, 'huhu', 'huhu@mail.fr', '$2y$10$07GGpB7VO5fojwqHob4W3eAzziTA7pmR8y08AS41YRFTGdIWSPpey', NULL, 2),
(6, 'gygy', 'gygy@mail.fr', '$2y$10$/0bjJRmRszxXWcsW3sxN1ufuzAGLbigxX/7c1JhOXXuB8T1BuweDG', NULL, 2),
(7, 'fdsfsdf', 'rararar@mail.fr', '$2y$10$TaMNsAG40ugO/YFnzcFASOEMTbFcWVU/zN92MzqCk2lGx9/.vTB26', NULL, 2),
(8, 'monPseudo', 'monemail@mail.fr', '$2y$10$p559I8ww86VG9iqXAp/HO.iXpZPM4bn.jYekLujU4KFLYsRgDFOc6', NULL, 2),
(9, 'yuyuyu', 'juju@m.fr', '$2y$10$3odSfkyojE.tR4/ppRoB.OXI2yDIAcdiHCgVftteJIErETRWCG9lq', NULL, 2),
(10, 'mama', 'marie@mail.fr', '$2y$10$odeAZPuLg90nwLc7L.cUt.jvdi./vlzo/40dOMVNQCJSvzw/wdPB.', NULL, 2),
(11, 'jiji', 'jkjk@mail.fr', '$2y$10$zc4yU/7WI/5mFITnqp3eRu1vjJehOJ65WSliHwFYRUuHmCwMM94RC', NULL, 2),
(12, 'lolo', 'lolo@mail.fr', '$2y$10$utgnVfvhJM.45zWf0nMnae69WGazMgLqPjQLqesCDjOKe/KzBheai', NULL, 2),
(13, 'test', 'test@mail.fr', '$2y$10$ISb9d3ITQP6gufWxxIMfROv0swOyu6mLTtSQUI/btXXMFDCoaEway', NULL, 2),
(14, 'saya', 'koko@mail.fr', '$2y$10$TgF61iLXpRuy0YJF/ShihOsyyGSnJRxAzZCvyUK9GHzyLBn2n8hc2', NULL, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id_article`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `fk_cat` (`id_cat`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_cat`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id_comment`),
  ADD KEY `comment_user_FK` (`id_user`),
  ADD KEY `comment_article0_FK` (`id_article`);

--
-- Indexes for table `droits`
--
ALTER TABLE `droits`
  ADD PRIMARY KEY (`id_droits`);

--
-- Indexes for table `liker`
--
ALTER TABLE `liker`
  ADD PRIMARY KEY (`id_article`,`id_user`),
  ADD KEY `Liker_user0_FK` (`id_user`),
  ADD KEY `id_article` (`id_article`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `FK_DROITS` (`id_droits`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id_article` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_cat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id_comment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `droits`
--
ALTER TABLE `droits`
  MODIFY `id_droits` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_user_FK` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
  ADD CONSTRAINT `fk_cat` FOREIGN KEY (`id_cat`) REFERENCES `category` (`id_cat`);

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_article0_FK` FOREIGN KEY (`id_article`) REFERENCES `article` (`id_article`),
  ADD CONSTRAINT `comment_user_FK` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `liker`
--
ALTER TABLE `liker`
  ADD CONSTRAINT `Liker_article_FK` FOREIGN KEY (`id_article`) REFERENCES `article` (`id_article`),
  ADD CONSTRAINT `Liker_user0_FK` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_DROITS` FOREIGN KEY (`id_droits`) REFERENCES `droits` (`id_droits`),
  ADD CONSTRAINT `user_droits_FK` FOREIGN KEY (`id_droits`) REFERENCES `droits` (`id_droits`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
