import { useState  } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  const [input, setInput] = useState();
  const [valid, setValid] = useState();
  
  const handleChance = (e) => {
    let newInput = { ...input };
    newInput[e.target.name] = e.target.value;
    setInput(newInput);
  };

  const handleClick = (e) => {
    e.preventDefault();
      if (input.name  == "admin" && input.pass  == "pass")
    {
      window.location.href="http://localhost:3002/home"
    }
     else  if (!input||(input.name !== "Thien" || input.pass !== "password"))
      setValid("Tài khoản hoặc mật khẩu không đúng!");
      
    else  window.location.href="http://localhost:3001/ordering"
  };
  return (
    <>
      <div className="limiter"  >
         
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("assets/images/bg-01.jpg")' }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-49">Đăng Nhập</span>

              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Username is reauired"
              >
                <span className="label-input100">Tài khoản</span>

                <input
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="Email hoặc số điện thoại "
                  onChange={handleChance}
                   
                />
                 
                <span className="focus-input100" data-symbol="" />
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
                <span className="focus-input100" data-symbol="" />
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
                  <button className="login100-form-btn" onClick={handleClick}>
                    Đăng nhập 
                  </button>
                </div>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                <span>Đăng nhập khác:</span>
              </div>
              <div className="flex-c-m">
                <a href="https://www.google.com/" className="login100-social-item bg1">
                  <i className="fa fa-facebook" />
                </a>
                <a href="http://localhost:3001/ordering" className="login100-social-item bg2">
                  <i className="fa fa-twitter" />
                </a>
                <a href="/" className="login100-social-item bg3">
                  <i className="fa fa-google" />
                </a>
              </div>
              <div className="flex-col-c p-t-155">
                <span className="txt1 p-b-17">Hoặc đăng kí mới </span>
                <a href="/register" className="txt2">
                  Đăng kí
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

export default Login;
