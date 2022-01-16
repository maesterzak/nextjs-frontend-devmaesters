import router from 'next/router';
import {useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { register } from '../actions/auth';


const RegisterPage = () => {
    const loading = useSelector(state => state.auth.loading)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const register_success = useSelector(state => state.auth.register_success)
    const dispatch = useDispatch()


    const [formData, setFormData] = useState({
        first_name: '',
        last_name : '',
        username : '',
        password : '',
        re_password : ''
    });
    const {
        first_name,
        last_name,
        username,
        password,
        re_password
    } = formData
    const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value});
    

    const onSubmit= e => {
        e.preventDefault();
        if (dispatch && dispatch !== null && dispatch!==undefined){
            dispatch(register(first_name, last_name, username, password, re_password))
            
        }
        
    };
    if (typeof window !== undefined && isAuthenticated){
      router.push('/')
    }
    if (register_success){
      router.push('/login')
    }
    return (
        <>
            <div className='d-flex justify-content-center flex-wrap'>
            <br />
            <h1 className='w-100 d-flex justify-content-center flex-wrap'>Signup as an <b>Author</b></h1>
            <br />
            

                <form className="mx-1 mx-md-4" onSubmit={onSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={onChange} name='first_name' type="text" defaultValue={first_name} id="form3Exampl01c" className="form-control" />
                      <label className="form-label" htmlFor="first_name">first name</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={onChange} name='last_name' defaultValue={last_name} type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="last_name">last name</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={onChange} defaultValue={username} name='username' type="text" id="form3Example7c" className="form-control" />
                      <label className="form-label" htmlFor="username">username</label>
                    </div>
                  </div>

                  

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={onChange} defaultValue={password} name='password' type="password" id="form3Example8c" className="form-control" />
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={onChange} defaultValue={re_password} name='re_password' type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" htmlFor="re_password">Repeat your password</label>
                    </div>
                  </div>

                  
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

        

            </div>
        </>
    )
};
export default RegisterPage;