import {useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { login, reset_register_success } from '../actions/auth';
import {useRouter} from 'next/router'

const LoginPage = () => {
    const loading = useSelector(state => state.auth.loading)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    
    const dispatch = useDispatch()
    const router = useRouter();
    const [formData, setFormData] = useState({
       
        username : '',
        password : '',
       
    });
    const {
        
        username,
        password,
        
    } = formData;
    useEffect(()=>{
      if (dispatch && dispatch !== null && dispatch !== undefined){
        dispatch(reset_register_success());
      }
    })
    const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value});
    

    const onSubmit= e => {
        e.preventDefault();
        if (dispatch && dispatch !== null && dispatch!==undefined){
            dispatch(login(username, password))
            
        }
        
    };
    
    if (typeof window !==undefined && isAuthenticated){
      
      router.push('/Blog/dashboard')
    }
    return (
        <>
            <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
          alt="Sample image" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={onSubmit}>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

         
          <div className="form-outline mb-4">
            <input onChange={onChange} defaultValue={username} name="username" type="text" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid username address" />
            <label className="form-label" htmlFor="form3Example3">Username</label>
          </div>

          
          <div className="form-outline mb-3">
            <input onChange={onChange} name='password' defaultValue={password} type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg"
              >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                className="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    
    <div className="text-white mb-3 mb-md-0">
      Copyright ©devMasters 2021. All rights reserved.
    </div>
    
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
    
  </div>
</section>
        </>
    )
};
export default LoginPage;