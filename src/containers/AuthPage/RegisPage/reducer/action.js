import * as ActionType from "./constants";
import { api } from "utils/apiUtil";

export const actRegis = (user, navigate) => {
  return (dispatch) => {
    dispatch(actRegisterAuthRequest);
    api
      .post("ThemNguoiDung", user)
      .then((result) => {
        //Check maLoaiNguoiDung
        dispatch(actRegisterAuthSuccess(result));

        alert("Đăng kí thành công thành công");

        //Redirect to /admin
        navigate("/auth/login/2", { replace: true });
      })
      .catch((error) => {
        dispatch(actRegisterAuthFailed(error.response.data.data));
      });
  };
};

export const actRegisterAuthRequest = () => {
  return {
    type: ActionType.REGISTER_AUTH_REQUEST,
  };
};

export const actRegisterAuthSuccess = (data) => {
  return {
    type: ActionType.REGISTER_AUTH_SUCCESS,
    payload: data,
  };
};

export const actRegisterAuthFailed = (data) => {
  return {
    type: ActionType.REGISTER_AUTH_FAILED,
    payload: data,
  };
};
