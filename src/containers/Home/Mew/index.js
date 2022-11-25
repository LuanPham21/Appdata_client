import React from "react";
import { useNavigate } from "react-router-dom";
import mew from "./../../../assest/img/mew.png";

export default function MewPage() {
  const navigate = useNavigate();
  function handleBtn(e) {
    const id = e?.target?.id;
    navigate(`/${id}`, { replace: true });
  }
  return (
    <>
      <div className="img__home">
        <img src={mew} />
        <div className="btn__home">
          <button id="homepage" type="button" onClick={handleBtn}></button>
          <button id="messpage" type="button" onClick={handleBtn}></button>
          <button id="personalpage" type="button" onClick={handleBtn}></button>
        </div>
      </div>
    </>
  );
}
