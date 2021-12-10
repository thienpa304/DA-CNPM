import { useState } from "react";
import { useHistory } from "react-router-dom";

function Register() {
  let history = useHistory();
  const [input, setInput] = useState({});
  const [valid, setValid] = useState("");
  const handleValid = () => {
    if (!input.name) {
      setValid("Xin vui lòng nhập tên tài khoản!");
      return false;
    }
    if (input.name === "Thien") {
      setValid("Tên tài khoản đã tồn tại!");
      return false;
    }
    if (!input.pass) {
      setValid("Xin vui lòng nhập mật khẩu!");
      return false;
    }
    if (input.pass.length < 6) {
      setValid("Mật khẩu qua yếu!");
      return false;
    }
    if (!input.pass1) {
      setValid("Xin vui lòng nhập lại mật khẩu!");
      return false;
    }
    if (input.pass !== input.pass1) {
      setValid("Nhập lại mật khẩu không khớp!");
      return false;
    }

    return true;
  };
  const handleChance = (e) => {
    let newInput = { ...input };
    newInput[e.target.name] = e.target.value.trim();
    setInput(newInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValid()) {
      alert("Đăng kí thành công!");
      history.push("/login");
    }
  };
  return (
    <>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("assets/images/bg-01.jpg")' }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-49">Đăng kí </span>
              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Username is reauired"
              >
                <span className="label-input100">Tài khoản </span>
                <input
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="Email hoặc số điện thoại "
                  onChange={handleChance}
                />
                <span className="focus-input100" data-symbol=" " />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <span className="label-input100">Mật khẩu </span>
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Mật khẩu của bạn"
                  onChange={handleChance}
                />

                <span className="focus-input100" data-symbol=" " />
              </div>
              <div
                className="wrap-input100 validate-input mt-4"
                data-validate="Password is required"
              >
                <span className="label-input100">Nhập lại mật khẩu </span>
                <input
                  className="input100"
                  type="password"
                  name="pass1"
                  placeholder="Nhập lại mật khẩu của bạn"
                  onChange={handleChance}
                />

                <span className="focus-input100" data-symbol=" " />
              </div>
              <div className="text-right p-t-8 p-b-31">
                <a href="/">Quên mật khẩu ?</a>
              </div>
              <div
                style={{
                  color: "red",
                  width: "100%",
                  textAlign: "center",
                  padding: "5px ",
                }}
              >
                {valid}
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn" onClick={handleSubmit}>
                    Đăng kí{" "}
                  </button>
                </div>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                <span>Đăng kí bằng cách khác:</span>
              </div>
              <div className="flex-c-m">
                <a href="/" className="login100-social-item bg1">
                <i class="fab fa-facebook"></i>
                </a>
                <a href="/" className="login100-social-item bg2">
                <i class="fab fa-twitter"></i>
                </a>
                <a href="/" className="login100-social-item bg3">
                <i class="fab fa-google-plus-g"></i>
                </a>
              </div>
              <div className="flex-col-c p-t-155">
                <span className="txt1 p-b-17">Đã có tài khoản </span>
                <a href="/login" className="txt2">
                  Đăng nhập
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </>
  );
}

export default Register;
