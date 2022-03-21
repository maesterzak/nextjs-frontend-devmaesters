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
      
      router.push('/blog/dashboard')
    }
    return (
        <>
            <div className='d-flex justify-content-center flex-wrap'>
            <br />
            <h1 className='w-100 d-flex justify-content-center flex-wrap'>Login</h1>
            <br />
            

                <form className="mx-1 mx-md-4" onSubmit={onSubmit}>

                  
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

                  

                  
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                  </div>

                </form>

        

            </div>
        </>
    )
};
export default LoginPage;