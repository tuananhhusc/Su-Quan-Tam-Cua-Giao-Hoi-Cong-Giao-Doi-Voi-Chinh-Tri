export interface SearchChunk {
  id: string; // anchor id
  section: string; // section title
  content: string; // searchable text
}

export const searchIndex: SearchChunk[] = [
  {
    id: "phan-mo-dau",
    section: "Phần Mở Đầu",
    content: "Sự Giao Thoa Giữa Vương Quốc Tâm Linh Và Trật Tự Trần Thế. Lịch sử nhân loại, hiếm có một thể chế phi quốc gia nào lại duy trì được tầm ảnh hưởng sâu rộng, liên tục và phức tạp lên các biến cố chính trị toàn cầu như Giáo hội Công giáo. Dù bản chất và sứ mạng cốt lõi luôn được khẳng định là cứu độ tâm linh và hướng tới một vương quốc không thuộc về thế gian này, Tòa Thánh Vatican cùng lực lượng giáo dân hùng hậu trên toàn thế giới vẫn luôn hiện diện ở trung tâm của các cuộc tranh luận về chính sách công, các hiệp ước hòa bình, và các cuộc chuyển giao quyền lực mang tính thời đại. Tại sao một tôn giáo lấy cõi vĩnh hằng làm đích đến lại đầu tư quá nhiều nguồn lực, trí tuệ và cấu trúc thể chế vào các vấn đề chính trị trần thế? Nhân vị (human person), phẩm giá con người, ơn cứu độ, khủng hoảng đa chiều, bất công kinh tế, xung đột vũ trang, suy thoái hệ sinh thái, hướng dẫn luân lý."
  },
  {
    id: "nen-tang-than-hoc",
    section: "Nền Tảng Thần Học Và Giáo Lý",
    content: "Chính Trị Như Một Hình Thức Bác Ái Cao Cả. Để hiểu được động cơ can dự chính trị của Giáo hội Công giáo, trước hết cần phải tiếp cận vấn đề từ góc độ của Học thuyết Xã hội Công giáo (Catholic Social Teaching - CST). Khác với các hệ tư tưởng chính trị như chủ nghĩa tự do hay chủ nghĩa cộng sản, học thuyết này không cung cấp một mô hình tổ chức nhà nước cụ thể hay một hệ thống kinh tế cứng nhắc. Thay vào đó, nó thiết lập các nguyên tắc luân lý bất biến để đánh giá các cấu trúc xã hội. Nhận thức thần học về bản tính xã hội của con người. Lợi ích chung (Common Good). Đức Giáo hoàng Phanxicô định nghĩa chính trị là một trong những hình thức cao cả nhất của đức ái."
  },
  {
    id: "ban-tinh-xa-hoi",
    section: "Bản Tính Xã Hội",
    content: "Cơ sở đầu tiên của sự tham gia chính trị là nhận thức thần học về bản tính xã hội của con người. Kinh Thánh khẳng định Thiên Chúa tạo dựng con người là những sinh vật có tính cộng đồng, Adam và Eva được ban cho nhau, đồng thời được giao phó trách nhiệm canh tác và gìn giữ thế giới. Trách nhiệm này đòi hỏi sự cộng tác để thiết lập một trật tự xã hội công bằng. Phục vụ lợi ích chung, phát triển đầy đủ, quyền tiếp cận y tế, giáo dục, bảo vệ sự sống, xóa bỏ nạn phân biệt chủng tộc có hệ thống."
  },
  {
    id: "vatican-ii",
    section: "Công Đồng Vatican II",
    content: "Nhãn Quan Của Công Đồng Vatican II: Gaudium et Spes Và Trật Tự Thế Tục. Hiến chế Mục vụ về Giáo hội trong thế giới ngày nay (Gaudium et Spes) tái khẳng định nhân vị chính là nguyên lý, là chủ thể và là cứu cánh của mọi định chế xã hội. Trong một thế giới nương tựa lẫn nhau giữa các quốc gia, đoàn thể và cá nhân, sự can thiệp của các cộng đoàn chính trị là cần thiết để bảo vệ quyền lợi của những nhóm yếu thế. Các đảng phái không bao giờ được phép đặt quyền lợi phe nhóm hoặc ý thức hệ lên trên công ích của toàn dân. Dân chủ đa nguyên khoan dung."
  },
  {
    id: "dignitatis-humanae",
    section: "Dignitatis Humanae",
    content: "Dignitatis Humanae: Sự Phân Lập Thẩm Quyền Và Quyền Tự Do Tôn Giáo. Tuyên ngôn về Tự do Tôn giáo. Quyền con người bất khả xâm phạm, đối đáp tự do với Thiên Chúa, không ép buộc lương tâm, hành động ngược niềm tin. Cộng đồng tôn giáo quyền tự trị, tự quản lý. Thách thức chế độ độc tài, toàn trị. Thế tục trung lập, thế tục tích cực (positive secularism), câu hỏi hiện sinh sâu sắc nhất."
  },
  {
    id: "cau-truc-ngoai-giao",
    section: "Cấu Trúc Ngoại Giao Tòa Thánh",
    content: "Quyền Lực Mềm Và Kiến Trúc Thể Chế. Vatican là thực thể có chủ quyền duy nhất trên thế giới đồng thời mang bản chất tôn giáo và tư cách pháp nhân theo luật pháp quốc tế. Quan hệ ngoại giao chính thức với 183 quốc gia. Phủ Quốc vụ khanh (Secretariat of State), kho lưu trữ tông truyền, 83 km kệ tài liệu. Sứ thần Tòa Thánh (Apostolic Nuncios), đại sứ đại diện Vatican trước chính phủ thế tục, hiệp ước (Concordats), cầu nối Rôma và Giáo hội địa phương."
  },
  {
    id: "chuyen-dich-dia-chinh-tri",
    section: "Chuyển Dịch Địa Chính Trị",
    content: "Sự Chuyển Dịch Tầm Nhìn Địa Chính Trị Toàn Cầu. Tầm nhìn ra thế giới toàn cầu, Thế giới thứ ba (châu Phi, châu Á, Mỹ Latinh) là trọng tâm sức sống Kitô giáo tương lai. Trung Quốc (Sinopolitik), bản địa hóa Giáo hội, sáu Giám mục người Trung Quốc đầu tiên năm 1926. Việt Nam, quốc gia cộng sản duy nhất có Đại diện Thường trú của Giáo hoàng tại Hà Nội, đối thoại linh hoạt. Cường quốc Phương Tây, Mỹ, Pháp, công cụ tư tưởng."
  },
  {
    id: "su-gia-hoa-binh",
    section: "Giáo Hội Như Sứ Giả Hòa Bình",
    content: "Trung Gian Hòa Giải Toàn Cầu. Quyền lực cứng con số không, quyền lực mềm vô hạn. Trung gian trung thực (honest broker) trên trường quốc tế. Kiến tạo hòa bình, giải quyết xung đột, soi sáng lựa chọn địa chính trị, kinh tế và sinh thái."
  },
  {
    id: "xung-dot-bien-gioi",
    section: "Xung Đột Biên Giới",
    content: "Giải Quyết Xung Đột Biên Giới Và Bình Thường Hóa Quan Hệ Ngoại Giao. Tranh chấp Chile và Argentina (Kênh đào Beagle) năm 1984. Quan hệ Hoa Kỳ - Cuba năm 2014, hơn 50 năm thù địch. Hiệu ứng Phanxicô (the Francis effect), sự gặp gỡ và đối thoại, thư trực tiếp cho Barack Obama và Raul Castro, vấn đề nhân đạo, Alan Gross, tù nhân, mở lại đại sứ quán năm 2015."
  },
  {
    id: "nam-sudan",
    section: "Hòa Bình Nam Sudan",
    content: "Tiến Trình Hòa Bình Tại Nam Sudan: Hành Động Từ Cơ Sở Đến Thượng Tầng (grassroots peacebuilding). Nội chiến sắc tộc tàn khốc, Salva Kiir và Riek Machar. Điểm tựa đạo đức, trung gian chính trị, ân xá chung, tha thứ quốc gia. Tuyên bố Khartoum 2018, Thỏa thuận Hòa bình, người tị nạn (IDPs). Hội đồng Giám mục Sudan, Caritas, PAX."
  },
  {
    id: "doi-dau-chuyen-hoa",
    section: "Đối Đầu Và Chuyển Hóa",
    content: "Giáo Hội Trước Các Hệ Tư Tưởng Khởi Sinh Từ Trần Thế. Đối đầu và chuyển hóa, chiến tranh ý thức hệ định hình khái niệm tự do và bản chất con người, hệ tư tưởng toàn trị, cực đoan. Sụp đổ chủ nghĩa cộng sản Đông Âu."
  },
  {
    id: "sup-do-cong-san",
    section: "Sụp Đổ Cộng Sản",
    content: "Sự Sụp Đổ Của Chủ Nghĩa Cộng Sản Tại Đông Âu: Một Chiến Thắng Siêu Hình. Giáo hoàng Gioan Phaolô II (Karol Wojtyła). Khối Xô Viết, Ba Lan, chiến thắng không gian tinh thần và nhận thức. Sai lầm chủ nghĩa Mác, đơn vị lao động (unit of labor), Chúa tạo dựng theo hình ảnh Thiên Chúa, Tầm nhìn Phúc kiến. Chuyến tông du 1979, 10 triệu người, đừng sợ hãi, kháng cự ôn hòa. KGB Yuri Andropov, Công đoàn Đoàn kết (Solidarity), Lech Wałęsa, Liên minh Thánh (Holy Alliance) với Ronald Reagan, thông tin tình báo, áp lực đạo đức và kinh tế."
  },
  {
    id: "than-hoc-giai-phong",
    section: "Thần Học Giải Phóng",
    content: "Thần Học Giải Phóng Tại Châu Mỹ Latinh: Ranh Giới Giữa Tin Mừng Và Cuộc Cách Mạng Bạo Lực. Nghèo đói cùng cực, đàn áp độc tài quân sự, bóc lột tư bản. Lựa chọn ưu tiên cho người nghèo, Puebla. Nicaragua, cách mạng Sandinista, Ernesto Cardenal, Chúa Giêsu lịch sử và Chúa Giêsu đức tin. Hồng y Joseph Ratzinger (Bênêđictô XVI), Bộ Giáo lý Đức tin, Huấn thị Libertatis Nuntius, tội lỗi tâm hồn, hoán cải nội tâm, giáo hội bình dân (popular church)."
  },
  {
    id: "laudato-si",
    section: "Laudato Si'",
    content: "Mở Rộng Biên Giới Chính Trị: Sinh Thái Học Toàn Diện Qua Thông Điệp Laudato Si' (Chăm sóc Ngôi nhà Chung của chúng ta). Cách mạng văn hóa, Thánh Phanxicô Assisi, Chị và Mẹ. Tội lỗi cấu trúc, người quản lý (steward), kẻ chiếm đoạt bạo chúa. Bất cân xứng hậu quả môi trường đối với người nghèo, khí thải carbon, tị nạn sinh thái, nhân quyền, giáo dục công dân sinh thái, COP, Liên Hợp Quốc."
  },
  {
    id: "luong-tam-cong-dan",
    section: "Lương Tâm Công Dân",
    content: "Lương Tâm Công Dân Và Thực Tiễn Vận Động Hành Lang Của Giáo Hội (lobbying). Huy động cử tri thực thực hiện quyền công dân dưới ánh sáng đức tin. Tranh cãi tài chính hành lang, NGO Công giáo, thảm họa nhân quyền. Vùng Đông Bắc Hoa Kỳ, bang Pennsylvania, New York, Đạo luật Nạn nhân Lạm dụng Trẻ em (Child Victims Act). Tội ác giáo sĩ, rủi ro đạo đức khi quyền lực tôn giáo vay mượn công cụ thế tục."
  },
  {
    id: "doi-khang-the-tuc",
    section: "Đối Kháng Thế Tục",
    content: "Sự Đối Kháng Từ Hệ Tư Tưởng Thế Tục Về Vai Trò Của Tôn Giáo Trong Đời Sống Công Cộng. Không gian trung lập tuyệt đối, loại trừ tôn giáo khỏi lập pháp. Không khoan dung giáo điều, xã hội đa nguyên khoan dung, thương lượng dân chủ. Nguyên tắc phân lập Giáo hội và Nhà nước, thế tục tích cực."
  },
  {
    id: "ket-luan",
    section: "Kết Luận",
    content: "Kết Luận: Một Sứ Mạng Nhập Thể Không Thể Tránh Khỏi (Incarnation). Thiên Chúa bước vào lịch sử nhân loại, xác phàm, thực tại trần thế, cấu trúc kinh tế, định chế pháp lý, môi trường sinh thái, giá trị thiêng liêng, sự cứu rỗi. Bác ái đơn thuần, công bằng hơn. 1.4 tỷ tín đồ, học thuyết xã hội phong phú, mạng lưới ngoại giao rộng lớn nhất hành tinh, không bao giờ lùi bước ẩn dật, chiến trường thiêng liêng nơi đức tin hóa thân thành hành động."
  }
];
