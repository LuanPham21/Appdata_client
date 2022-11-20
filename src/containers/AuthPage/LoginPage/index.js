import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { actLogin } from "./reducer/action";
import { useParams } from "react-router-dom";
import logo from "./../../../assest/img/logo.png";

export default function LoginPage() {
  const prop = useSelector((state) => state.LoginAuthReducer);
  // console.log(prop);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // if (state.username === "lechanpham") {
    //   if (state.password === "12345678") {
    //     alert("Đăng nhập thành công");
    //     navigate("/homepage", { replace: true });
    //   } else {
    //     alert("Mật khẩu không đúng");
    //   }
    // } else {
    //   alert("Tài khoản không đúng");
    // }
    dispatch(actLogin(state, navigate));
  };

  const renderNoti = () => {
    const { error } = prop;
    return error && <div className="alert alert-danger">{error}</div>;
  };

  return (
    <div className="d-flex justify-content-center login__form">
      <Card
        style={{ width: "380px", position: "fixed", top: "9%" }}
        className="text-center mb-0 login__card"
      >
        <section>
          <img style={{ width: "100%" }} src={logo} />
        </section>
        <Card.Body>
          {renderNoti()}
          <form onSubmit={handleLogin}>
            <div>
              <Form.Control
                className="mb-2"
                minLength="3"
                placeholder="Tài khoản"
                type="text"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Control
                minLength="3"
                className="mb-2"
                placeholder="Mật khẩu"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div>
              <Button
                type="submit"
                variant="outline-primary"
                style={{ color: "#fff" }}
              >
                Đăng nhập
              </Button>
            </div>
          </form>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div>
            <span style={{ color: "#fff" }}>Bạn chưa có tài khoản </span>
            <Link to="/auth/register">
              <Button>Đăng kí</Button>
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}
