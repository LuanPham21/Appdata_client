import React from "react";
import { useNavigate } from "react-router-dom";
import chat from "./../../../assest/img/chat.png";

export default function MessPage() {
  const navigate = useNavigate();
  function handleBtn(e) {
    const id = e?.target?.id;
    navigate(`/${id}`, { replace: true });
  }
  return (
    <>
      <div className="img__home">
        <img src={chat} />
        <div className="btn__home">
          <button id="homepage" type="button" onClick={handleBtn}></button>
          <button id="messpage" type="button" onClick={handleBtn}></button>
          <button id="personalpage" type="button" onClick={handleBtn}></button>
        </div>
      </div>
    </>
  );
}
