/*
Navicat MySQL Data Transfer

Source Server         : chopu
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : baodientu

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-05-19 01:00:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for baiviet
-- ----------------------------
DROP TABLE IF EXISTS `baiviet`;
CREATE TABLE `baiviet` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TieuDe` varchar(255) DEFAULT NULL,
  `ChuyenMuc` varchar(255) DEFAULT NULL,
  `NgayDang` datetime(6) DEFAULT NULL,
  `AnhDaiDien` varchar(255) DEFAULT NULL,
  `NoiDungTomTat` varchar(255) DEFAULT NULL,
  `Youtube` varchar(255) DEFAULT NULL,
  `LuotXem` int(255) DEFAULT NULL,
  `TinhTrang` int(255) DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of baiviet
-- ----------------------------

-- ----------------------------
-- Table structure for chitietbaiviet
-- ----------------------------
DROP TABLE IF EXISTS `chitietbaiviet`;
CREATE TABLE `chitietbaiviet` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `AnhDaiDien` varchar(255) DEFAULT NULL,
  `TieuDe` varchar(255) DEFAULT NULL,
  `Youtube` varchar(255) DEFAULT NULL,
  `ChuyenMuc` varchar(255) DEFAULT NULL,
  `Nhan` varchar(255) DEFAULT NULL,
  `NgayDang` datetime(6) DEFAULT NULL,
  `NoiDung` varchar(255) DEFAULT NULL,
  `TinhTrang` int(255) DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of chitietbaiviet
-- ----------------------------

-- ----------------------------
-- Table structure for chuyenmuc
-- ----------------------------
DROP TABLE IF EXISTS `chuyenmuc`;
CREATE TABLE `chuyenmuc` (
  `ID` int(11) NOT NULL,
  `TenLoai` varchar(50) DEFAULT NULL,
  `LoaiCha` int(255) DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of chuyenmuc
-- ----------------------------

-- ----------------------------
-- Table structure for docgia
-- ----------------------------
DROP TABLE IF EXISTS `docgia`;
CREATE TABLE `docgia` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TenDocGia` varchar(255) DEFAULT NULL,
  `NgayBinhLuan` datetime(6) DEFAULT NULL,
  `NoiDungBL` varchar(255) DEFAULT NULL,
  `ThoiHan` date DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of docgia
-- ----------------------------

-- ----------------------------
-- Table structure for taikhoan
-- ----------------------------
DROP TABLE IF EXISTS `taikhoan`;
CREATE TABLE `taikhoan` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NguoiDung` varchar(50) DEFAULT NULL,
  `MatKhau` varchar(255) DEFAULT NULL,
  `HoTen` varchar(50) DEFAULT NULL,
  `ButDanh` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `NgaySinh` date DEFAULT NULL,
  `PhanQuyen` int(255) DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of taikhoan
-- ----------------------------
