import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actRegis } from "./reducer/action";
import { useNavigate, Link } from "react-router-dom";
import { Alert, Button, Card, Form } from "react-bootstrap";
import logo from "./../../../assest/img/logo.png";
import { api } from "utils/apiUtil";

export default function RegisPage() {
  const prop = useSelector((state) => state.RegisAuthReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

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

  const handleRegis = (event) => {
    event.preventDefault();
    dispatch(actRegis(state, navigate));
  };

  const renderNoti = () => {
    const { error } = prop;
    return error && <div className="alert alert-danger">{error}</div>;
  };

  return (
    <div className="d-flex justify-content-center regis__form">
      <Card
        style={{ width: "380px", position: "fixed", top: "9%" }}
        className="text-center mb-0 regis__card"
      >
        <section>
          <img style={{ width: "100%" }} src={logo} />
        </section>
        <Card.Header style={{ fontSize: "22px", color: "#fff" }}>
          Đăng kí
        </Card.Header>
        <Card.Body>
          {renderNoti()}
          <form onSubmit={handleRegis}>
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
                Đăng kí
              </Button>
            </div>
          </form>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div>
            <span style={{ color: "#fff" }}>Bạn đã có tài khoản </span>
            <Link to="/">
              <Button>Đăng nhập</Button>
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}
