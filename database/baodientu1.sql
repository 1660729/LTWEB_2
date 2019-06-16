-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 16, 2019 lúc 04:32 PM
-- Phiên bản máy phục vụ: 10.1.40-MariaDB
-- Phiên bản PHP: 7.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `baodientu1`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `baiviet`
--

CREATE TABLE `baiviet` (
  `ProID` int(11) NOT NULL,
  `AnhDaiDien` text,
  `TieuDe` varchar(500) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `ChuyenMucChaID` int(11) DEFAULT NULL,
  `ChuyenMucConID` int(11) DEFAULT NULL,
  `Youtube` text,
  `Nhan` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `NgayDang` date DEFAULT NULL,
  `NoiDung` varchar(20000) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `NDTomTat` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  `TinhTrang` tinyint(1) DEFAULT NULL,
  `LuotXem` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Đang đổ dữ liệu cho bảng `baiviet`
--

INSERT INTO `baiviet` (`ProID`, `AnhDaiDien`, `TieuDe`, `ChuyenMucChaID`, `ChuyenMucConID`, `Youtube`, `Nhan`, `NgayDang`, `NoiDung`, `NDTomTat`, `TinhTrang`, `LuotXem`) VALUES
(1, '/public/images/62542390_1299146586916333_2721497308326789120_n.jpg', 'Taylor Swift chính thức trở lại với album mang tên \'Lover\'', 5, 10, NULL, 'Taylor Swift', '2019-06-14', '<p><a href=\"http://thethaovanhoa.vn/tags/Taylor+Swift\" target=\"_blank\">Taylor Swift</a>&nbsp;bất ngờ th&ocirc;ng b&aacute;o album ph&ograve;ng thu thứ 7 của m&igrave;nh mang t&ecirc;n&nbsp;<em>Lover</em>&nbsp;sẽ được ch&iacute;nh thức ph&aacute;t h&agrave;nh v&agrave;o ng&agrave;y 23 th&aacute;ng 8 tới đ&acirc;y. Album bao gồm 18 ca kh&uacute;c v&agrave; c&oacute; tới 4 phi&ecirc;n bản kh&aacute;c nhau.</p>\r\n\r\n<p><img alt=\"Chú thích ảnh\" src=\"https://cdnmedia.thethaovanhoa.vn/Upload/H4YRO1ZUXG5fDnj99Lhg/files/2019/03/62542390_1299146586916333_2721497308326789120_n.jpg\" /></p>\r\n\r\n<p><em>Ảnh b&igrave;a của album được Taylor chia sẻ</em></p>\r\n\r\n<p>C&ocirc; chia sẻ: &ldquo;C&oacute; rất nhiều điều m&agrave; t&ocirc;i đ&atilde; h&agrave;o hứng bấy l&acirc;u nay v&agrave; t&ocirc;i chỉ muốn chờ đợi một thời điểm th&iacute;ch hợp để chia sẻ với tất cả c&aacute;c bạn!&rdquo;</p>\r\n\r\n<p>&quot;Album n&agrave;y, về giai điệu, n&oacute; rất l&atilde;ng mạn v&agrave; kh&ocirc;ng đơn giản theo một chủ đề n&agrave;o cả, n&oacute; cũng kh&ocirc;ng ho&agrave;n to&agrave;n chỉ c&oacute; những b&agrave;i h&aacute;t về t&igrave;nh y&ecirc;u đ&acirc;u&quot;,&nbsp;<a href=\"http://thethaovanhoa.vn/tags/Taylor+Swift\" target=\"_blank\">Taylor</a>&nbsp;n&oacute;i th&ecirc;m, &quot;T&ocirc;i c&oacute; &yacute; tưởng về một điều g&igrave; đ&oacute; thật l&atilde;ng mạn, nhưng kh&ocirc;ng chỉ l&agrave; những điều vui vẻ. T&ocirc;i nghĩ bạn c&oacute; thể t&igrave;m thấy sự l&atilde;ng mạn trong c&ocirc; đơn, trong nỗi buồn hoặc kể cả khi trải qua một cuộc xung đột, giải quyết mọi thứ trong cuộc sống của bạn. T&ocirc;i chỉ l&agrave; nh&igrave;n v&agrave;o những điều đ&oacute; với một c&aacute;i nh&igrave;n rất l&atilde;ng mạn.&quot;</p>\r\n\r\n<p><img alt=\"Chú thích ảnh\" src=\"https://cdnmedia.thethaovanhoa.vn/Upload/H4YRO1ZUXG5fDnj99Lhg/files/2019/03/maxresdefault.jpg\" /></p>\r\n\r\n<p>Th&ocirc;ng b&aacute;o quan trọng n&agrave;y được c&ocirc; c&ocirc;ng bố khoảng một th&aacute;ng rưỡi sau khi Taylor ph&aacute;t h&agrave;nh ca kh&uacute;c&nbsp;<em>ME!&nbsp;</em>kết hợp với nam ca sĩ Brendon Urie. Đ&acirc;y cũng l&agrave; ca kh&uacute;c đầu ti&ecirc;n được tiết lộ nằm trong album ph&ograve;ng thu thứ 7 của c&ocirc; n&agrave;ng.</p>\r\n\r\n<p><em>Lover&nbsp;</em>cũng&nbsp;đ&aacute;nh dấu sự trở lại lần đầu ti&ecirc;n của Taylor&nbsp;Swift kể từ album&nbsp;<em>Reputation</em>&nbsp;ra mắt năm 2017.</p>\r\n\r\n<p><strong>Phan Ngọc Quỳnh Trang</strong><br />\r\nTheo&nbsp;<em>CNN</em></p>\r\n', ' Album mới này của nàng \"rắn chúa\" hứa hẹn sẽ công phá làng nhạc thế giới vào tháng 8 năm nay !', NULL, NULL),
(2, '/public/images/bts-15605671846342139323893.jpg', 'Có ai ngờ đã đến ngày BTS phá cả kỷ lục đi tour của Taylor Swift và ban nhạc huyền thoại U2 với con số siêu \"khủng\"!', 5, 11, NULL, 'BTS', '2019-06-16', '<p>Với tour diễn v&ograve;ng quanh thế giới &quot;Love Yourself: Speak Yourself&quot;, BTS đ&atilde; thiết lập v&ocirc; số kỷ lục &quot;v&ocirc; tiền kho&aacute;ng hậu&quot;. Thế nhưng, những số liệu mới nhất lại tiếp tục thể hiện đẳng cấp của 7 ch&agrave;ng trai nh&agrave; Big Hit ở một tầm cao kh&aacute;c khi nh&oacute;m đ&atilde; vượt qua cả những &quot;c&acirc;y cổ thụ&quot; của &quot;l&agrave;ng đi tour&quot; như Taylor Swift, U2,..</p>\r\n\r\n<p><a href=\"https://kenh14cdn.com/2019/6/15/uuefs-1560595751251172850565.png\" target=\"_blank\"><img alt=\"Có ai ngờ đã đến ngày BTS phá cả kỷ lục đi tour của Taylor Swift và ban nhạc huyền thoại U2 với con số siêu khủng! - Ảnh 1.\" src=\"https://kenh14cdn.com/2019/6/15/uuefs-1560595751251172850565.png\" /></a></p>\r\n\r\n<p>BTS</p>\r\n\r\n<p>Theo đ&oacute;, BTS ph&aacute; vỡ kỷ lục doanh thu ph&ograve;ng v&eacute; cao nhất cho hai đ&ecirc;m concert tại s&acirc;n vận động Rose Bowl của Mỹ với&nbsp;<strong>113.040 v&eacute; b&aacute;n ra</strong>, qua đ&oacute; thu về tổng cộng hơn&nbsp;<strong>16.600.000 đ&ocirc;</strong>&nbsp;la Mỹ (tương đương&nbsp;<strong>hơn 383,3 tỷ VNĐ</strong>) cho tour diễn n&agrave;y chỉ t&iacute;nh ri&ecirc;ng hai đ&ecirc;m tại SVĐ lớn nhất nh&igrave; nước Mỹ.</p>\r\n\r\n<p><a href=\"https://kenh14cdn.com/2019/6/15/bts-15605671846342139323893.jpg\" target=\"_blank\"><img alt=\"Có ai ngờ đã đến ngày BTS phá cả kỷ lục đi tour của Taylor Swift và ban nhạc huyền thoại U2 với con số siêu khủng! - Ảnh 2.\" src=\"https://kenh14cdn.com/2019/6/15/bts-15605671846342139323893.jpg\" /></a></p>\r\n\r\n<p>BTS c&ugrave;ng Taylor Swift</p>\r\n\r\n<p>Với th&agrave;nh t&iacute;ch n&agrave;y, BTS đ&atilde; xuất sắc vượt qua Taylor Swift (<strong>16.250.000 đ&ocirc; la Mỹ</strong>) v&agrave; ban nhạc huyền thoại U2 (<strong>15.780.000 đ&ocirc; la Mỹ</strong>) để trở th&agrave;nh nghệ sĩ kiếm nhiều tiền nhất từ tổ chức show diễn tại SVĐ Rose Bowl, California.</p>\r\n\r\n<p><a href=\"https://kenh14cdn.com/2019/6/11/taylor-swift-me-1560187052476466040838.jpg\" target=\"_blank\"><img alt=\"Có ai ngờ đã đến ngày BTS phá cả kỷ lục đi tour của Taylor Swift và ban nhạc huyền thoại U2 với con số siêu khủng! - Ảnh 3.\" src=\"https://kenh14cdn.com/2019/6/11/taylor-swift-me-1560187052476466040838.jpg\" /></a></p>\r\n\r\n<p>Taylor Swift</p>\r\n\r\n<p>Hiện tour diễn vẫn c&ograve;n đang tiếp diễn nhưng BTS đ&atilde; thu về đến tổng cộng&nbsp;<strong>hơn 1840 ngh&igrave;n tỷ đồng cho loạt show diễn chỉ t&iacute;nh ri&ecirc;ng tại Mỹ v&agrave; ch&acirc;u &Acirc;u</strong>! Cụ thể, BTS thu về tổng cộng khoảng 44 triệu đ&ocirc; (hơn 1 ngh&igrave;n tỷ VNĐ) chỉ ri&ecirc;ng cho 6 đ&ecirc;m diễn tại Bắc Mỹ với 299.770 v&eacute; được b&aacute;n ra, cộng th&ecirc;m 35 triệu đ&ocirc; (~816,7 tỷ VNĐ) từ 6 đ&ecirc;m diễn tại Brazil, Anh Quốc v&agrave; Paris. Tổng doanh thu l&agrave; 78,9 triệu đ&ocirc; (khoảng 1,84 ngh&igrave;n tỷ VNĐ) với 606.409 v&eacute; được b&aacute;n ra!</p>\r\n\r\n<p><a href=\"https://kenh14cdn.com/2019/6/10/bts-24-156016251572819266736.jpg\" target=\"_blank\"><img alt=\"Có ai ngờ đã đến ngày BTS phá cả kỷ lục đi tour của Taylor Swift và ban nhạc huyền thoại U2 với con số siêu khủng! - Ảnh 4.\" src=\"https://kenh14cdn.com/2019/6/10/bts-24-156016251572819266736.jpg\" /></a></p>\r\n\r\n<p>Kh&ocirc;ng hổ danh nh&oacute;m nhạc to&agrave;n cầu BTS!</p>\r\n', 'BTS tiếp tục khẳng định tầm ảnh hưởng của mình với tour diễn hoành tráng vượt qua cả Taylor Swift và U2!', NULL, NULL),
(69, '/public/images/1560612680-498-co-thien-lac-chinh-thuc-hen-ho-voi-thi-hau-vuong-phu-sau-20-nam-lam-ban-than-tuy--n-huy--n-3-1560571132-width600height398.jpg', 'Thân thế bất ngờ của bạn gái \'Dương Quá giàu nhất Hong Kong\'', 4, 8, NULL, 'Dương quá', '2019-06-16', '<p>Mới đ&acirc;y nhất, cả giới giải tr&iacute; x&ocirc;n xao b&agrave;n t&aacute;n về việc Cổ Thi&ecirc;n Lạc v&agrave; Tuy&ecirc;n Huy&ecirc;n ch&iacute;nh thức hẹn h&ograve; với nhau. Trước đ&oacute;, cả hai vốn l&agrave; cặp đ&ocirc;i &ldquo;bạn th&acirc;n ế trường kỳ&rdquo; của showbiz Hong Kong suốt 20 năm. Cổ Thi&ecirc;n Lạc được xưng l&agrave; &ldquo;&ocirc;ng tr&ugrave;m điện ảnh thế hệ mới&rdquo; c&ograve;n Tuy&ecirc;n Huy&ecirc;n lại l&agrave; &ldquo;Thị hậu vượng phu&rdquo; đ&igrave;nh đ&aacute;m của thế giới giải tr&iacute; Hoa Ngữ suốt nhiều năm liền.</p>\r\n\r\n<p>Cổ Thi&ecirc;n Lạc l&agrave; một trong những nam thần đời đầu của l&agrave;ng giải tr&iacute; Hong Kong thập ni&ecirc;n 90. Lu&ocirc;n miệt m&agrave;i với nghiệp diễn xuất, c&aacute;i t&ecirc;n Cổ Thi&ecirc;n Lạc nổi tiếng nhanh tới mức kh&oacute; ai ngờ tới. Năm 2015, anh tham gia 14 bộ phim, l&agrave;m đại diện cho 13 thương hiệu v&agrave; thu về 50 triệu USD (hơn 1.000 tỷ đồng).</p>\r\n\r\n<p>Kh&ocirc;ng những thế, anh c&ograve;n rất m&aacute;t tay trong việc kinh doanh bất động sản. Những c&aacute;i t&ecirc;n lớn như&nbsp;<em>CG Special</em>&nbsp;hay&nbsp;<em>Fat Face Production Limited</em>&nbsp;đều c&oacute; lượng cổ phần lớn của anh trong đ&oacute;. Hiện tại, tổng t&agrave;i sản của ch&agrave;ng &quot;Dương Qu&aacute;&quot; hiện đ&atilde; c&aacute;n mốc hơn 200 triệu USD (xấp xỉ 4.700 tỷ đồng). Đ&acirc;y ch&iacute;nh l&agrave; th&agrave;nh quả xứng đ&aacute;ng cho những năm th&aacute;ng l&agrave;m việc kh&ocirc;ng mệt nghỉ của Cổ Thi&ecirc;n Lạc.</p>\r\n\r\n<p><img alt=\"Thân thế bất ngờ của bạn gái &amp;#39;Dương Quá giàu nhất Hong Kong&amp;#39; - 1\" src=\"https://cdn.24h.com.vn/upload/2-2019/images/2019-06-15/1560612680-576-co-thien-lac-chinh-thuc-hen-ho-voi-thi-hau-vuong-phu-sau-20-nam-lam-ban-than-c----thi--n-l---c-2-1560571132-width600height769.jpeg\" /></p>\r\n\r\n<p>Sau 20 năm l&agrave;m bạn th&acirc;n, Cổ Thi&ecirc;n Lạc v&agrave; Tuy&ecirc;n Huy&ecirc;n ch&iacute;nh thức hẹn h&ograve; với nhau.</p>\r\n\r\n<p><strong>Bạn th&acirc;n 20 năm bỗng h&oacute;a người t&igrave;nh</strong></p>\r\n\r\n<p>N&oacute;i về Tuy&ecirc;n Huy&ecirc;n, Cổ Thi&ecirc;n Lạc chia sẻ:&nbsp;<em>&ldquo;T&iacute;nh Tuy&ecirc;n Huy&ecirc;n rất đ&agrave;n &ocirc;ng, mạnh mẽ, th&iacute;ch tranh luận chứ kh&ocirc;ng hề dịu d&agrave;ng như mẫu bạn g&aacute;i t&ocirc;i cần. Nếu quen nhau chắc chắn mỗi ng&agrave;y c&atilde;i nhau tỷ lần&rdquo;</em>. Anh vẫn lu&ocirc;n b&ecirc;n cạnh c&ocirc; suốt những năm th&aacute;ng tuổi trẻ, an ủi động vi&ecirc;n mỗi khi Tuy&ecirc;n Huy&ecirc;n gặp trắc trở trong t&igrave;nh cảm hay c&oacute; kh&uacute;c mắc trong c&ocirc;ng việc v&agrave; cuộc sống.</p>\r\n\r\n<p>Về phần Tuy&ecirc;n Huy&ecirc;n, c&ocirc; n&oacute;i về &ldquo;bạn th&acirc;n 20 năm&rdquo; của m&igrave;nh rằng:&nbsp;<em>&quot;Cổ Thi&ecirc;n Lạc theo chủ nghĩa ho&agrave;n mỹ, c&aacute;i g&igrave; cũng muốn tốt nhất, đẹp nhất. T&ocirc;i v&agrave; Cổ Thi&ecirc;n Lạc hợp t&aacute;c qua nhiều bộ phim v&agrave; chơi th&acirc;n với nhau nhưng giữa ch&uacute;ng t&ocirc;i kh&ocirc;ng hề xảy ra t&igrave;nh cảm y&ecirc;u đương g&igrave; như tin đồn, v&igrave; anh ấy đ&acirc;u c&oacute; coi t&ocirc;i l&agrave;... con g&aacute;i&quot;.</em></p>\r\n\r\n<p><img alt=\"Thân thế bất ngờ của bạn gái &amp;#39;Dương Quá giàu nhất Hong Kong&amp;#39; - 2\" src=\"https://cdn.24h.com.vn/upload/2-2019/images/2019-06-15/1560612680-687-than-the-bat-ngo-cua-ban-gai-duong-qua-giau-nhat-hong-kong-c----thi--n-l---c-1560590119-width600height399.jpg\" /></p>\r\n\r\n<p>Cổ Thi&ecirc;n Lạc v&agrave; Tuy&ecirc;n Huy&ecirc;n cuối c&ugrave;ng cũng cho người h&acirc;m mộ thỏa l&ograve;ng mong ước.</p>\r\n\r\n<p>Tới thời điểm n&agrave;y, cả Cổ Thi&ecirc;n Lạc v&agrave; Tuy&ecirc;n Huy&ecirc;n đều chưa c&oacute; bất cứ x&aacute;c nhận n&agrave;o về tiến triển tốt đẹp trong mối quan hệ của họ. Thế nhưng, người h&acirc;m mộ kh&ocirc;ng khỏi nức l&ograve;ng mong ng&oacute;ng cả hai sẽ c&ugrave;ng về chung một nh&agrave; khi đ&atilde; l&agrave; bạn th&acirc;n tới 20 năm. D&ugrave; trước đ&oacute;, cả 2 đều đ&oacute;ng chung với nhau rất nhiều bộ phim với vai t&igrave;nh nh&acirc;n nồng ch&aacute;y nhưng chưa một lần giả th&agrave;nh thật.</p>\r\n\r\n<p>Họ đ&atilde; l&agrave; người y&ecirc;u của nhau trong phim&nbsp;<em>Ch&uacute; ch&oacute; th&ocirc;ng minh, Hồ sơ trinh s&aacute;t 4, Cỗ m&aacute;y thời gian, Quỷ m&ecirc; t&acirc;m khiếu</em>. Đặc biệt, bộ phim&nbsp;<em>Hồ sơ trinh s&aacute;t 4</em>&nbsp;lại đem tới giải thưởng&nbsp;<em>Thị Đế - Thị Hậu</em>&nbsp;cho cặp đ&ocirc;i v&agrave;o năm 1999. Đ&acirc;y l&agrave; bộ phim m&agrave; cả 2 lại kh&ocirc;ng phải l&agrave; người t&igrave;nh của nhau.</p>\r\n\r\n<p><strong>Hoa đ&aacute;n bậc nhất showbiz nhưng t&igrave;nh duy&ecirc;n c&ograve;n nhiều lận đận</strong></p>\r\n\r\n<p>Tuy&ecirc;n Huy&ecirc;n c&oacute; đ&ocirc;i mắt sắc sảo, cuốn h&uacute;t v&agrave; đầy t&agrave;i năng. Với phong c&aacute;ch diễn xuất linh hoạt c&ugrave;ng việc x&acirc;y dựng h&igrave;nh tượng nữ cường nh&acirc;n bản lĩnh, cương trực đ&atilde; khiến c&ocirc; trở th&agrave;nh một h&igrave;nh ảnh kh&oacute; c&oacute; thể thay thế trong l&ograve;ng của kh&aacute;n giả. Tuy&ecirc;n Huy&ecirc;n ch&iacute;nh l&agrave; một trong &ldquo;Tứ đại Hoa đ&aacute;n&rdquo; đ&igrave;nh đ&aacute;m của TvB. Thế nhưng, đường t&igrave;nh duy&ecirc;n của c&ocirc; gặp đầy trắc trở với v&ocirc; số scandal.</p>\r\n\r\n<p>C&ocirc; t&igrave;nh vướng v&agrave;o tin đồn &ldquo;phim giả t&igrave;nh thật&rdquo; với La Gia Lương. Khi đ&oacute;, v&igrave; hợp t&aacute;c qu&aacute; ăn &yacute; lại đ&uacute;ng thời điểm nam diễn vi&ecirc;n đang xử l&yacute; chuy&ecirc;n ly h&ocirc;n của bản th&acirc;n, Tuy&ecirc;n Huy&ecirc;n bị g&aacute;n c&aacute;i m&aacute;c &ldquo;tiểu tam&rdquo;. Mọi thứ chỉ vỡ lẽ ra khi cả 2 c&ugrave;ng nhau hợp t&aacute;c mở nh&agrave; h&agrave;ng m&agrave; Tuy&ecirc;n Huy&ecirc;n c&ograve;n trở th&agrave;nh mẹ nu&ocirc;i của con trai Lưu Gia Lương.</p>\r\n\r\n<p><img alt=\"Thân thế bất ngờ của bạn gái &amp;#39;Dương Quá giàu nhất Hong Kong&amp;#39; - 3\" src=\"https://cdn.24h.com.vn/upload/2-2019/images/2019-06-15/1560612680-623-co-thien-lac-chinh-thuc-hen-ho-voi-thi-hau-vuong-phu-sau-20-nam-lam-ban-than-tuy--n-huy--n-6-1560571132-width600height436.jpg\" /></p>\r\n\r\n<p>Trương Ch&iacute; L&acirc;m đang hẹn h&ograve; với Vi&ecirc;n Vịnh Nghi nhưng lại d&iacute;nh tin đồn t&igrave;nh cảm với Tuy&ecirc;n Huy&ecirc;n.</p>\r\n\r\n<p><img alt=\"Thân thế bất ngờ của bạn gái &amp;#39;Dương Quá giàu nhất Hong Kong&amp;#39; - 4\" src=\"https://cdn.24h.com.vn/upload/2-2019/images/2019-06-15/1560612680-498-co-thien-lac-chinh-thuc-hen-ho-voi-thi-hau-vuong-phu-sau-20-nam-lam-ban-than-tuy--n-huy--n-3-1560571132-width600height398.jpg\" /></p>\r\n\r\n<p>Nhiều năm sau, t&igrave;nh cảm chị em của Tuy&ecirc;n Huy&ecirc;n v&agrave; Vi&ecirc;n Vịnh Nghi mới phần n&agrave;o trở lại.</p>\r\n\r\n<p>Một người nữa bị d&iacute;nh tin đồn t&igrave;nh cảm ch&iacute;nh l&agrave; Trương Ch&iacute; L&acirc;m - Người m&agrave; Tuy&ecirc;n Huy&ecirc;n vẫn lu&ocirc;n cố t&igrave;nh giữ khoảng c&aacute;ch m&agrave; Vi&ecirc;n Vịnh Nghi đang hẹn h&ograve; c&ugrave;ng nam diễn vi&ecirc;n n&agrave;y. Thế nhưng, d&ugrave; c&oacute; l&agrave;m g&igrave; cũng kh&ocirc;ng tr&aacute;nh khỏi &ldquo;miệng đời&rdquo;. Những tin đồn như nh&aacute;t dao chia cắt cho t&igrave;nh chị em thắm thiết của Vi&ecirc;n Vịnh Nghi v&agrave; Tuy&ecirc;n Huy&ecirc;n. Sau nhiều năm tuyệt giao, m&atilde;i tới gần đ&acirc;y, Tuy&ecirc;n Huy&ecirc;n v&agrave; Vi&ecirc;n Vịnh Nghi mới giao h&ograve;a trở lại.</p>\r\n\r\n<p><img alt=\"Thân thế bất ngờ của bạn gái &amp;#39;Dương Quá giàu nhất Hong Kong&amp;#39; - 5\" src=\"https://cdn.24h.com.vn/upload/2-2019/images/2019-06-15/1560612680-880-co-thien-lac-chinh-thuc-hen-ho-voi-thi-hau-vuong-phu-sau-20-nam-lam-ban-than-tuy--n-huy--n-2-1560571132-width600height392.jpg\" /></p>\r\n\r\n<p>Trương Vệ Kiện v&agrave; Tuy&ecirc;n Huy&ecirc;n từng l&agrave; cặp đ&ocirc;i &quot;Kim Đồng Ngọc Nữ&quot; nhưng chia tay v&igrave; những đ&agrave;m tiếu dư luận.</p>\r\n\r\n<p>Một người kh&aacute;c nữa trong con đường t&igrave;nh duy&ecirc;n của Tuy&ecirc;n Huy&ecirc;n ch&iacute;nh l&agrave; Trương Vệ Kiện. Thế nhưng, cặp đ&ocirc;i &ldquo;nữ cường nam nhu&rdquo; n&agrave;y lại dẫn tới kết cục tan vỡ. Tr&aacute;i với việc Tuy&ecirc;n Huy&ecirc;n l&ecirc;n như diều gặp gi&oacute;, Trương Vệ Kiện khi đ&oacute; c&ograve;n bị n&oacute;i l&agrave; kẻ &ldquo;ăn b&aacute;m&rdquo; bạn g&aacute;i. Khi đ&oacute;, Tuy&ecirc;n Huy&ecirc;n&nbsp;nổi tiếng lấn lướt hơn, &aacute;p lực qu&aacute; lớn từ dư luận, cuối c&ugrave;ng, Trương Vệ Kiện đ&atilde; l&ecirc;n tiếng chia tay trước khi cả 2 chuẩn bị tổ chức h&ocirc;n lễ.</p>\r\n\r\n<p><strong>&ldquo;C&ocirc; đ&atilde; gi&agrave;, lại c&ograve;n mập. Trong nghề đ&atilde; hết thời rồi!&rdquo;</strong></p>\r\n\r\n<p>Đ&oacute; ch&iacute;nh l&agrave; c&acirc;u n&oacute;i của người đồng nghiệp khiến Tuy&ecirc;n Huy&ecirc;n từng thất thần nh&igrave;n lại bản th&acirc;n m&igrave;nh. C&aacute;ch đ&acirc;y chừng 5 năm, tuyến Gi&aacute;p của c&ocirc; c&oacute; vấn đề kh&aacute; lớn khiến th&acirc;n h&igrave;nh bỗng chốc sưng ph&ugrave; l&ecirc;n. Từ 45kg, cơ thể c&ocirc; nhanh ch&oacute;ng tăng l&ecirc;n tới 60kg. Thời điểm đ&oacute;, mọi c&ocirc;ng việc đều giảm s&uacute;t nghi&ecirc;m trọng, danh tiếng cũng mất, số tiền bản th&acirc;n c&ocirc; kiếm được cũng th&acirc;m hụt đi qu&aacute; nhiều.</p>\r\n\r\n<p><img alt=\"Thân thế bất ngờ của bạn gái &amp;#39;Dương Quá giàu nhất Hong Kong&amp;#39; - 6\" src=\"https://cdn.24h.com.vn/upload/2-2019/images/2019-06-15/1560612681-378-than-the-bat-ngo-cua-ban-gai-duong-qua-giau-nhat-hong-kong-tuy--n-huy--n-1560590119-width600height327.jpg\" /></p>\r\n\r\n<p>Tuy&ecirc;n Huy&ecirc;n từng rơi từ đỉnh cao xuống đ&aacute;y sự nghiệp, rồi lại t&igrave;m được &aacute;nh h&agrave;o quang trong cuộc đời.&nbsp;</p>\r\n\r\n<p>Do bản t&iacute;nh vốn sợ phiền phức n&ecirc;n mọi việc lớn nhỏ đều giao cho quản l&yacute; quyết định. C&oacute; việc cũng được, kh&ocirc;ng c&oacute; việc th&igrave; lại gặp gỡ bạn b&egrave;, uống tr&agrave;, leo n&uacute;i. Thế nhưng, bất gi&aacute;c l&uacute;c đ&oacute; gọi cho quản l&yacute; chỉ nhận lại một c&acirc;u ngắn gọn: &ldquo;Kh&ocirc;ng c&oacute; người n&agrave;o t&igrave;m c&ocirc; cả.&rdquo;</p>\r\n\r\n<p>May thay, khi s&oacute;ng gi&oacute; qua đi, Tuy&ecirc;n Huy&ecirc;n đ&atilde; t&igrave;m lại được &aacute;nh h&agrave;o quang năm n&agrave;o của m&igrave;nh. H&agrave;ng loạt vai diễn ấn tượng tr&ecirc;n m&agrave;n ảnh nhỏ ch&iacute;nh l&agrave; sự minh chứng r&otilde; n&eacute;t nhất. C&ocirc; chia sẻ:&nbsp;<em>&ldquo;Suốt 20 năm về trước, t&ocirc;i kh&ocirc;ng c&oacute; lấy một t&aacute;c phẩm ti&ecirc;u biểu n&agrave;o khiến bản th&acirc;n c&oacute; thể h&agrave;i l&ograve;ng. Thế nhưng, khi đ&oacute;ng xong bộ phim Binh đo&agrave;n ph&aacute;i yếu đ&atilde; c&oacute; người gọi t&ocirc;i bằng t&ecirc;n nh&acirc;n vật trong phim - Chị Mall. Điều đ&oacute; khiến t&ocirc;i v&ocirc; c&ugrave;ng sung sướng v&igrave; đ&atilde; c&oacute; một t&aacute;c phẩm ti&ecirc;u biểu sau suốt 26 năm m&ograve;n mỏi đợi chờ.&rdquo;</em></p>\r\n', 'Chuyện tình cảm bất ngờ được công khai của Cổ Thiên Lạc và Tuyên Huyên làm thỏa lòng của người hâm mộ đã dày công chờ đợi.', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chuyenmuccha`
--

CREATE TABLE `chuyenmuccha` (
  `ID` int(11) NOT NULL,
  `TenLoaiCha` varchar(100) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Đang đổ dữ liệu cho bảng `chuyenmuccha`
--

INSERT INTO `chuyenmuccha` (`ID`, `TenLoaiCha`) VALUES
(1, 'Bóng Đá'),
(2, 'Kinh Doanh'),
(3, 'Pháp Luật'),
(4, 'Showbiz'),
(5, 'Âm nhạc');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chuyenmuccon`
--

CREATE TABLE `chuyenmuccon` (
  `ID` int(11) NOT NULL,
  `TenLoaiCon` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `IDCha` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Đang đổ dữ liệu cho bảng `chuyenmuccon`
--

INSERT INTO `chuyenmuccon` (`ID`, `TenLoaiCon`, `IDCha`) VALUES
(1, 'Bóng đá Việt Nam', 1),
(2, 'Ngoại Hạng Anh', 1),
(3, 'Doanh Nhân', 2),
(4, 'Bất Động Sản', 2),
(5, 'Vụ Án Nổi Tiếng', 3),
(6, 'Trọng Án', 3),
(7, 'Sao Việt', 4),
(8, 'Sao Hollywood Và Các Nước Khác', 4),
(9, 'Việt Nam', 5),
(10, 'US-UK', 5),
(11, 'KPOP', 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `docgia`
--

CREATE TABLE `docgia` (
  `ID` int(11) NOT NULL,
  `TenDocGia` varchar(255) DEFAULT NULL,
  `NgayBinhLuan` datetime(6) DEFAULT NULL,
  `NoiDungBL` varchar(255) DEFAULT NULL,
  `ThoiHan` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `ID` int(11) NOT NULL,
  `NguoiDung` varchar(50) DEFAULT NULL,
  `MatKhau` varchar(255) DEFAULT NULL,
  `HoTen` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `ButDanh` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `NgaySinh` date DEFAULT NULL,
  `PhanQuyen` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`ID`, `NguoiDung`, `MatKhau`, `HoTen`, `ButDanh`, `Email`, `NgaySinh`, `PhanQuyen`) VALUES
(1, 'vinh', '$2b$10$NOpPZ/PyL66cURvcuowjiudg2LfXlz94IbQyKqjpfcrozLi/.U5hq', 'vinh', '', 'lengocvinh.0105@gmail.com', '2019-05-18', 0),
(2, 'nam', '$2b$10$5TwBYzLdBHxKs2BfK.Fn2.2hk3DXwd.T6zhs4NY0o4bqzLVxqCRZ6', 'nam', NULL, 'nam@gmail.com', '2019-05-30', 1),
(3, 'Tuan', '$2b$10$yuJ.zwnvfMFbbI3j6.RvSugUhaxqkpfrcRU.XttJlrGZIRiCUhIj2', 'Nguyễn Anh Tuấn', 'Bin\'s Plus', 'nat07111998@gmail.com', '1998-11-07', 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  ADD PRIMARY KEY (`ProID`) USING BTREE;

--
-- Chỉ mục cho bảng `chuyenmuccha`
--
ALTER TABLE `chuyenmuccha`
  ADD PRIMARY KEY (`ID`) USING BTREE;

--
-- Chỉ mục cho bảng `chuyenmuccon`
--
ALTER TABLE `chuyenmuccon`
  ADD PRIMARY KEY (`ID`) USING BTREE;

--
-- Chỉ mục cho bảng `docgia`
--
ALTER TABLE `docgia`
  ADD PRIMARY KEY (`ID`) USING BTREE;

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`ID`) USING BTREE;

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  MODIFY `ProID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT cho bảng `docgia`
--
ALTER TABLE `docgia`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
