import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
import logo from "./../../../assest/img/logo.png";

export default function TingWorkPage() {
  return (
    <div className="d-flex justify-content-center login__form">
      <Card
        style={{ width: "380px", position: "fixed" }}
        className="text-center mb-0 login__card"
      >
        <section>
          <img style={{ width: "100%" }} src={logo} />
        </section>
        <Card.Body>
          <section className="tingwork__content">
            <Link to="/auth/login/0" replace>
              <Button type="primary">Nhà tuyển dụng</Button>
            </Link>
            <Link to="/auth/login/1" replace>
              <Button type="primary">Ứng viên</Button>
            </Link>
          </section>
          <section>
            <section className="tingwork__login">
              <Button type="primary">Đăng nhập bằng số điện thoại</Button>
              <Button type="primary">Đăng nhập bằng số điện thoại</Button>
              <Button type="primary">Đăng nhập bằng số điện thoại</Button>
            </section>
          </section>
        </Card.Body>
      </Card>
    </div>
  );
}
