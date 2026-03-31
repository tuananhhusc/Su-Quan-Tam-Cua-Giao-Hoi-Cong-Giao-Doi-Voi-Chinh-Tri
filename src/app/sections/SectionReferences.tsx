import { SectionHeading } from "../components/ArticleUtils";

export default function SectionReferences() {
  const references = [
    { url: "https://www.daobinh.com/tu-sach-tai-lieu/giao-hoi/tom-luoc-hien-che-muc-vu-ve-hoi-thanh-gaudium-et-spes.htm", text: "Tóm Lược Hiến Chế Mục Vụ về Hội Thánh Gaudium et Spes" },
    { url: "https://churchlifejournal.nd.edu/articles/a-good-catholic-meddles-in-politics/", text: "\"A Good Catholic Meddles in Politics\" | Church Life Journal" },
    { url: "https://thevalleycatholic.org/seven-principles-social-justice-vietnamese", text: "Tóm Lược 7 Nguyên Tắc về Học Thuyết Xã Hội Công giáo | The Valley Catholic" },
    { url: "https://www.mdpi.com/2077-1444/16/4/485", text: "Catholic Involvement in Politics: Some Theological and Anthropological Considerations" },
    { url: "https://giaophanvinhlong.net/Hien-Che-Muc-Vu-Ve-Giao-Hoi-Trong-The-Gioi-Ngay-Nay-Gaudium-Et-Spes-Phan-II-Chuong-III.html", text: "Hiến Chế Mục Vụ Về Giáo Hội Trong Thế Giới Ngày Nay Gaudium Et Spes Phần II Chương III" },
    { url: "https://augustino.net/gaudium-et-spes", text: "Hiến Chế Mục Vụ Về Giáo Hội Trong Thế Giới Ngày Nay - Gaudium Et Spes" },
    { url: "https://onepeterfive.com/the-politics-of-the-incarnation/", text: "The Politics of the Incarnation - OnePeterFive" },
    { url: "https://prodigalcatholic.com/summary-of-vatican-iis-declaration-on-religious-freedom-dignitatis-humanae/", text: "Summary of Vatican II's Declaration on Religious Freedom “Dignitatis Humanae”" },
    { url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decl_19651207_dignitatis-humanae_en.html", text: "Dignitatis humanae - The Holy See" },
    { url: "https://www.goodsams.org.au/article/dignitatis-humanae-a-prophetic-declaration/", text: "Dignitatis Humanae: a prophetic declaration | The Sisters of The Good Samaritan" },
    { url: "https://talkabout.iclrs.org/2021/05/27/dignitatis-humanae-2-0/", text: "Dignitatis Humanae 2.0: Religious Freedom for the Good of All - Talk About" },
    { url: "https://vanhoavaphattrien.vn/gop-phan-tim-hieu-cong-tac-doi-ngoai-cua-vatican-tren-linh-vuc-van-hoa-a19050.html", text: "Góp phần tìm hiểu “Công tác đối ngoại của Vatican trên lĩnh vực văn hóa”" },
    { url: "https://xuanbichvietnam.net/trangchu/ngoai-giao-mot-cong-cu-cua-toa-thanh-nham-phuc-vu-su-mang-pho-quat/", text: "NGOẠI GIAO, MỘT CÔNG CỤ CỦA TÒA THÁNH NHẰM PHỤC VỤ SỨ MẠNG PHỔ QUÁT" },
    { url: "https://publications.iadc.edu/wp-content/uploads/sites/6/hemisferio/volume2/THE-VATICANS-ROLE-IN-THE-RECONCILIATION-BETWEEN-THE-US-AND-CUBA.pdf", text: "The Vatican´s role in the reconciliation between the US and Cuba" },
    { url: "https://en.wikipedia.org/wiki/Cuban_thaw", text: "Cuban thaw - Wikipedia" },
    { url: "https://www.theguardian.com/world/2014/dec/17/pope-us-cuba-vatican-diplomacy", text: "Renewed US-Cuba relations biggest success in Vatican diplomacy" },
    { url: "https://time.com/3637901/pope-francis-cuba-obama/", text: "How Pope Francis Helped Broker Cuba Deal - TIME" },
    { url: "https://www.oikoumene.org/news/church-leaders-in-south-sudan-say-peace-process-is-fragile", text: "Church leaders in South Sudan say peace process is fragile" },
    { url: "https://paxforpeace.nl/news/churches-play-important-role-in-peace-process-south-sudan/", text: "Churches play important role in peace process South Sudan - PAX" },
    { url: "https://www.peaceagreements.org/view/2112/", text: "Revitalised Agreement on the Resolution of the Conflict in the Republic of South Sudan (R-ARCSS)" },
    { url: "https://docs.pca-cpa.org/2016/02/South-Sudan-Peace-Agreement-September-2018.pdf", text: "REVITALISED AGREEMENT ON THE RESOLUTION OF THE CONFLICT IN THE REPUBLIC OF SOUTH SUDAN" },
    { url: "https://www.cmi.no/file/2291-The-Church-and-Strategic-Peacebuilding-in-South-Sudan.pdf", text: "“One Nation from Every Tribe, Tongue, and People”: The Church and Strategic Peacebuilding in South Sudan" },
    { url: "https://theimaginativeconservative.org/2025/10/john-paul-ii-spiritual-victory-over-communism-barbara-elliott.html", text: "John Paul II & the Spiritual Victory Over Communism - The Imaginative Conservative" },
    { url: "https://www.pbs.org/wgbh/pages/frontline/shows/pope/communism/", text: "John Paul II And The Fall Of Communism | John Paul II - The Millennial Pope | FRONTLINE | PBS" },
    { url: "https://www.tandfonline.com/doi/full/10.1080/23753234.2023.2252488", text: "John Paul II and the three phases of his leadership in Poland" },
    { url: "https://victimsofcommunism.org/publication/20-interesting-facts-about-john-paul-ii/", text: "20 Interesting Facts about John Paul II's Life: A Courageous Leader Who Fought Against Communism" },
    { url: "https://digitalcommons.lib.uconn.edu/cgi/viewcontent.cgi?article=1244&context=srhonors_theses", text: "Pope John Paul II's Role in the Collapse of Poland's Communist Regime" },
    { url: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19840806_theology-liberation_en.html", text: "Instruction on certain aspects of the \"Theology of Liberation\"" },
    { url: "https://www.catholicworldreport.com/2023/09/21/why-ratzinger-and-wojtyla-were-correct-about-liberation-theology/", text: "Why Ratzinger and Wojtyła were correct about liberation theology - Catholic World Report" },
    { url: "https://louis.uah.edu/cgi/viewcontent.cgi?article=1335&context=honors-capstones", text: "Tense Theology in a Holy Hierarchy: Liberation Theology Versus the Vatican" },
    { url: "https://www.catholicculture.org/culture/library/view.cfm?recnum=1180", text: "Library : Instruction on Certain Aspects of Theology of Liberation - Catholic Culture" },
    { url: "https://digitalcommons.iwu.edu/cgi/viewcontent.cgi?article=1039&context=respublica", text: "National Political Influence and the Catholic Church" },
    { url: "https://giaophandalat.com/laudato-si-mot-co-gang-giai-thich-thong-diep-cua-dgh-phanxico-bai-i-gioi-thieu-tong-quat.html", text: "LAUDATO SI”, Một Cố Gắng Giải Thích Thông Điệp Của Đức Giáo Hoàng Phanxicô - Bài I" },
    { url: "https://giaophanlangson.net/noi-dung/muoi-die%CC%89m-rut-ra-tu-thong-diep-laudato-si-cua-duc-thanh-cha-phanxico-3015-11193418052020", text: "Mười điểm “rút ra” từ thông điệp Laudato Si' của Đức Thánh Cha Phanxicô" },
    { url: "https://hdgmvietnam.com/chi-tiet/moi-truong-sinh-thai-duoi-nhan-quan-than-hoc-cua-thong-diep-laudato-si--40654", text: "MÔI TRƯỜNG SINH THÁI DƯỚI NHÃN QUAN THẦN HỌC CỦA THÔNG ĐIỆP LAUDATO SI'" },
    { url: "https://caritasvietnam.org/giao-duc-sinh-thai-trong-laudato-si", text: "Giáo dục sinh thái trong Laudato Si' - Caritas Việt Nam" },
    { url: "https://www.usccb.org/issues-and-action/faithful-citizenship/forming-consciences-for-faithful-citizenship-part-one", text: "Forming Consciences for Faithful Citizenship - Part I | USCCB" },
    { url: "https://www.usccb.org/issues-and-action/faithful-citizenship/upload/forming-consciences-for-faithful-citizenship.pdf", text: "Forming Consciences for Faithful Citizenship (PDF) - USCCB" },
    { url: "https://www.usccb.org/resources/forming-consciences-faithful-citizenship-pdf", text: "Forming Consciences for Faithful Citizenship - PDF" },
    { url: "https://www.usccb.org/sjp/forming-consciences-faithful-citizenship", text: "Forming Consciences for Faithful Citizenship - usccb" },
    { url: "https://www.carnegiecouncil.org/media/article/the-catholic-church-and-american-foreign-policy", text: "The Catholic Church and American Foreign Policy" },
    { url: "https://whyy.org/articles/catholic-church-lobbying-costs-spiked-in-pa-as-statute-of-limitations-debate-raged/", text: "Catholic Church lobbying costs spiked in Pa. as statute of limitations debate raged - WHYY" },
    { url: "https://www.reddit.com/r/Catholicism/comments/1c60op1/i_do_not_hate_the_church_lobbying_and_the/", text: "Lobbying and the Catholic Church : r/Catholicism - Reddit" },
    { url: "https://scholarship.law.nd.edu/cgi/viewcontent.cgi?article=1556&context=ndlr", text: "Indifferentism Redux: Reflections on Catholic ..." }
  ];

  return (
    <div className="footnotes mt-16 pt-8 border-t border-[var(--color-divider)]">
      <SectionHeading id="nguon-trich-dan" level={2}>
        Nguồn Trích Dẫn & Chú Thích
      </SectionHeading>

      <ol className="text-sm text-[var(--color-text-secondary)] space-y-4 mt-8" style={{ listStyleType: "decimal", paddingLeft: "1.5rem" }}>
        {references.map((ref, index) => (
          <li key={index} id={`fn-${index + 1}`} className="pl-2 group">
            <span className="inline-block relative">
              <a 
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[var(--color-burgundy)] transition-colors leading-relaxed"
              >
                {ref.text}
              </a>
              <a 
                href={`#ref-${index + 1}`} 
                className="data-footnote-backref opacity-0 group-hover:opacity-100 transition-opacity ml-2 inline-block"
                title="Quay lại đoạn văn"
              >
                ↩
              </a>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
