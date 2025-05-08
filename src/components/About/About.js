import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1 className="about-title">เกี่ยวกับเรา</h1>
        <p className="about-description">
          ยินดีต้อนรับสู่ <span className="highlight">Vintage AREA</span> แหล่งรวมเสื้อวินเทจที่คัดสรรมาอย่างดีสำหรับคนรักแฟชั่น
          ทุกชิ้นเป็นไอเท็มหายาก ที่มาพร้อมกับเรื่องราวและเสน่ห์ในอดีต ไม่ว่าคุณจะเป็นนักสะสมเสื้อวินเทจ
          หรือผู้ที่ชื่นชอบเสื้อวงเก่า ๆ เราพร้อมนำเสนอสินค้าที่มีเอกลักษณ์ไม่เหมือนใคร!
        </p>

        <h2 className="about-subtitle">ทำไมต้องเลือกเรา?</h2>
        <ul className="about-list">
          <li>🧥 เสื้อทุกตัวเป็นของแท้ 100% การันตีคุณภาพ</li>
          <li>🎸 เสื้อวง เสื้อวินเทจยุค 80s - 90s ของหายากที่นักสะสมต้องมี</li>
          <li>🛍 คัดพิเศษ เนื้อผ้านุ่ม ใส่สบาย และดีไซน์สุดเท่</li>
          <li>📦 บริการจัดส่งทั่วประเทศ พร้อมแพ็กเกจสุดพรีเมียม</li>
        </ul>

        <h2 className="about-subtitle">เรื่องราวของ Johnjud_2hand</h2>
        <p className="about-story">
          Johnjud_2hand ก่อตั้งขึ้นจากความหลงใหลในเสื้อผ้าสไตล์วินเทจ โดยเราเริ่มต้นจากนักสะสมเสื้อวงระดับตำนาน
          และต่อยอดเป็นร้านค้าที่ให้บริการเสื้อวินเทจแท้ที่คัดสรรมาอย่างดี เราเชื่อว่าแฟชั่นไม่มีวันตาย และเสื้อวินเทจ
          เป็นสิ่งที่สะท้อนตัวตนของผู้สวมใส่ได้อย่างแท้จริง เราจึงมุ่งมั่นที่จะหาสินค้าดี ๆ มาให้คุณได้เลือกสรร
        </p>

        <div className="contact-section">
          <h2 className="about-title">ติดต่อเรา</h2>
          <p className="about-contact">📍 ที่ตั้งร้าน: บางแสน, ประเทศไทย</p>
          <p className="about-contact">📞 โทร: 098-013-6166</p>
          <p className="about-contact">📧 อีเมล: keattisaksari@gmail.com</p>
          <p className="about-contact">
            📷 Instagram:{" "}
            <Link to="https://www.instagram.com/johnjud_2hand/" target="_blank" rel="noopener noreferrer">
              @johnjud_2hand
            </Link>
          </p>
          <p className="about-contact">
            📘 Facebook:{" "}
            <a href="https://www.facebook.com/Mr.DARKXROCKICE/" target="_blank" rel="noopener noreferrer">
              Boxi Gsl
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
