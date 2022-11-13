import React from "react";
import Navbar from "component/NavBar";
import Footer from "component/Footer";
import Home from "./../../../assest/img/homepage.png";
import { Typography } from "antd";

export default function HomePage() {
  const { Paragraph } = Typography;
  return (
    <>
      <Navbar />
      <div
        className="home__page"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <span className="text__home">
          Cảm ơn bạn đã tạo tài khoản chúng tôi sẽ cập nhật tính năng vào các
          phiên bản sau
        </span>
        <div className="img__home">
          <img src={Home} style={{ width: "40%" }} />
        </div>
      </div>
      <Footer />
    </>
  );
}
