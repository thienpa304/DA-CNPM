function Login() {
  return (
    <>
      <div className="limiter">
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
                <span className="label-input100">Tài khoản </span>
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Email hoặc số điện thoại "
                />
                <span className="focus-input100" data-symbol="" />
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
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="text-right p-t-8 p-b-31">
                <a href="/">Quên mật khẩu ?</a>
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">Đăng nhập </button>
                </div>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                <span>Đăng nhập khác:</span>
              </div>
              <div className="flex-c-m">
                <a href="/" className="login100-social-item bg1">
                  <i className="fa fa-facebook" />
                </a>
                <a href="/" className="login100-social-item bg2">
                  <i className="fa fa-twitter" />
                </a>
                <a href="/" className="login100-social-item bg3">   
                  <i className="fa fa-google" />
                </a>
              </div>
              <div className="flex-col-c p-t-155">
                <span className="txt1 p-b-17">Hoặc đăng kí mới </span>
                <a href="/" className="txt2">
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
