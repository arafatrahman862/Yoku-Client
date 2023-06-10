import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const Login = () => {
  const captchaRef = useRef(null)
  const [disable, setDisable] = useState(true)

  // const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const handleLogin = event => {
    event.preventDefault();
    form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
    .then(result =>{
      const user =  result.user;
      console.log(user)
    })
    .catch(error => console.log(error))
  }

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false)
    }

  }

  return (
    <div className="hero min-h-screen bg-white  ">
      <div className="hero-content flex-col   rounded">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Please Login</h1>

        </div>
        <div className="card  w-full max-w-lg shadow-2xl bg-base-100 ">
          <form onSubmit={handleLogin} className="card-body bg-orange-300  rounded">
            <div className="form-control">
              <label className="label ">
                <span className="label-text font-semibold text-white">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-white">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input  input-bordered" />

            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate></LoadCanvasTemplate>
              </label>
              <input type="text" name='captcha' ref={captchaRef} placeholder="type the captcha" className="input  input-bordered" />
              <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>

            </div>
            <div className="form-control mt-6">

              <input disabled={disable} className="btn btn-primary text-white" type="submit" value="login" />
            </div>
            <div className='text-black'>
              New to Yoku? please <Link to="/singup">register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;