import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate();

    console.log('location in the login page', location);
    const handleLogin = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password= e.target.password.value;
        // console.log(email, password);
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('password'));
        const email = form.get('email');
        const password = form.get('password');

        //singIn

        signInUser(email,password)
        .then(result => {
            console.log(result.user);
            Navigate(location?.state? location.state:'/')
        })
        .catch(error => console.error(error))
        


    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h3 className="text-3xl my-10 text-center "> Please Login</h3>
                <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered"
                         required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered"
                         required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center my-4 font-bold text-xl">Do not Have An Account ? <Link to="/register"
                 className="text-red-400">Register</Link></p>
            </div>

        </div>
    );
};

export default Login;