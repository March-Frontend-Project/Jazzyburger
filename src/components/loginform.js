import React from "react";
import "./loginform.css"
import img1 from "../images/image 3.png"

const LoginForm = () => {
    return (
        <div className="cover col-10 offset-1 col-md-6 offset-md-3">
            <img className="logo d-flex justify-content-center m-auto bg-light" src={img1} alt="" />
            <h6 className="d-flex justify-content-center m-auto pt-4">SIGN IN TO YOUR ACCOUNT</h6>

            <div className="">
                <label for="exampleInputEmail1" class="form-label pt-4">Email</label>
                <input type="email" class="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@mail.com" />

                <label for="exampleInputPassword1" class="form-label pt-4">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password" />
            </div><br></br>

            <div className="cover2 d-flex justify-content-between w-100">
                <div>
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label ps-1" for="exampleCheck1">Keep me signed in</label>
                </div>

                <a href="#">Reset Password</a>
            </div>


            <button class="btn btn-danger text-light col-8 rounded w-100">Sign in</button>
            <p className="text-center">Dont have an account?<a href="text-primary"> Create one</a></p>




        </div>






    )
}
export default LoginForm