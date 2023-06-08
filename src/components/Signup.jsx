import React,{useState} from 'react'
import mobileImg from '../assets/mobile/image 4.png'
// import {NavLink}  from 'react-router-dom'

const Signup = () => {

    const initialState = {
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        password:'',
        confirmPassWord:'',
    }
    const [user, setUser] = useState(initialState)
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible1, setPasswordVisible1] = useState(false);
    const [errors, setErrors] = useState({});

    // const [icons, setIcons] = useState(true)
    
 
    // const [inputType, setInputType] = useState("password")

    // const handleShowPassword = (e)=>{
    //     e.preventDefault()
    //     const type = e.target
    //     console.log(type);
    //     setInputType(type === "password" ? "text" : "password")
    // }

    // function hideIcon() {
    //     setIcons(!icons)
    // }
    
    const handleTogglePassword = () => {
        setPasswordVisible(!passwordVisible);
      };

    const handleTogglePassword1 = () => {
        setPasswordVisible1(!passwordVisible1);
      };
    

    // const handleChange = (e) =>{
    //     e.preventDefault()
    //     const {name,value} = e.target
    //     setUser({[name]: value})

        // if (name === 'email') {
        //     if (!value.includes('@') || !value.includes('.com')) {
        //       setError('Invalid email format');
        //       setUser({ ...user, email: '' });
        //       return;
        //     } else {
        //       setError('wrong');
        //     }
        //   }
      
        //   setUser({ ...user, [name]: value });
        

        // if (name === 'email') {
        //     if (value.length >= 8 ) {
        //       console.log('moderate email');
        //     } else if(value.includes("@") && value.includes(".com") || value.includes("!")) {
        //       console.log('Strong email');
        //     }
        //   }

        // if (name === 'email') {
        //     if (!value.includes('@') || !value.includes('.com')) {
        //       // Throw an error or handle the validation error as per your requirements
        //       // For now, I'm setting the email field to an empty string
        //       setUser({ ...user, email: '' });
        //       return;
        //     }
        //   }
      
        //   setUser({ ...user, [name]: value });

    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear the error message for the field
    
        // Validate the form field and set the error message
        if (name === 'email') {
          if (!value.includes('@') || !value.includes('.com')) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: 'Invalid email format',
            }));
          }
        }

        if (name === 'phoneNumber'){
         if (!value.includes('+234')){
            setErrors((prevErrors)=> ({
                ...prevErrors,
                email: 'Invalid Format'

            }));

         }
        }
    
        if (name === 'password' || name === 'confirmPassWord') {
          if (value.length < 8) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              [name]: 'Password should be at least 8 characters',
            }));
          }
        }
      };

    const {firstName,lastName,email,phoneNumber,password,confirmPassWord} = user
    console.log(user);

    // const handleSubmit =(e)=>{
    //     e.preventDefault()
    //     if (password.length <= 8 && confirmPassWord.length <=8 || firstName.length==0 ||lastName.length==0 || phoneNumber.length <=10) {
    //         setError(true)
    //         } else {
    //             setError('wrong')
    //         }
    //         console.log(password, confirmPassWord);
            

    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
    
        // Check for errors
        if (firstName.length === 0) {
          newErrors.firstName = 'First name is required';
        }
        if (lastName.length === 0) {
          newErrors.lastName = 'Last name is required';
        }
        if (email.length === 0) {
          newErrors.email = 'Email is required';
        }
        if (phoneNumber.length ==0) {
          newErrors.phoneNumber = 'Phone number is required';
        }
        // if (phoneNumber.length<=11){
        //     newErrors.phoneNumber='invalid'
        // }
        if (password.length < 8) {
          newErrors.password = 'Password should be at least 8 characters';
        }
        if (confirmPassWord.length < 8) {
          newErrors.confirmPassWord = 'Confirm password should be at least 8 characters';
        }
        if (password == confirmPassWord) {
          newErrors.confirmPassWord = 'Passwords do not match';
        }
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
        } else {
          // Perform your form submission logic here
          console.log(user);
        }
      };

  return (
        <div className="form-container col-10 offset-1  col-md-4 offset-md-4">       
        <div className="first text-center mt-4">
        <img className='mb-4' src={mobileImg} alt="" height={120} />
            <h2 className='create mb-5'>Create Your account</h2>
        </div>
        <div className="cont col-md-10 col-10 offset-1 offset-md-1">
        <form onSubmit={handleSubmit}>
        <div className='label mb-3'>
            <label className='label d-block' htmlFor="">First name</label>
            <input 
            className='form-control '
            type="text" 
            id='firstName'
            name='firstName'
            placeholder='First Name'
            value={firstName}
            onChange={handleChange}
            />
            {/* {error&&firstName.length<=0 ?
            <label className='label1 text-danger' htmlFor="">Required*</label> : ""} */}

{errors.firstName && <label className="label1 text-danger">{errors.firstName}</label>}

        </div>
        <div className='mb-3'>
            <label className='label d-block' htmlFor="">Last name</label>
            <input 
            className='form-control '
            type="text" 
            id='lastName'
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={handleChange}

            />
            {/* {error&&lastName.length<=0 ?
            <label className='label1 text-danger' htmlFor="">Required*</label> :""} */}
                        {errors.lastName && <label className="label1 text-danger">{errors.lastName}</label>}

        </div>
        <div className='mb-3'>
            <label className='label d-block' htmlFor="">Email</label>
            <input 
            className='form-control '
            type="text" 
            id='email'
            name='email'
            placeholder='example@mail.com'
            value={email}
            onChange={handleChange}

            />

        {/* {error && <div className="error">{error}</div>} */}
        {/* {error ?
        <label className='label1 text-danger' htmlFor="">Required*</label>: ""} */}

{errors.email && <label className="label1 text-danger">{errors.email}</label>}

        </div>
        <div className='mb-3'>
            <label className='label d-block' htmlFor="">Phone Number</label>
            <input 
            className='form-control '
            type="text" 
            id='phoneNumber'
            name='phoneNumber'
            placeholder='818 000 0000'
            value={phoneNumber}
            onChange={handleChange}

            /> 
            {/* {error ?
            <label className='label1 text-danger' htmlFor="">Required*</label> : ""} */}

{errors.phoneNumber && <label className="label1 text-danger">{errors.phoneNumber}</label>}

        </div>
        <div className='mb-3 login'>
            <label className='label d-block' htmlFor="">Password (8 character minimum)
            </label>
            <input 
            className='form-control '
            type={passwordVisible ? 'text' : 'password'}
            id='password'
            name='Password'
            placeholder='Password'
            value={password}
            onChange={handleChange}

            />
            {/* {error&&password.length <= 8 ?
            <label className='label1 text-danger' htmlFor="">Required*</label> :""} */}
            {/* <div onClick={hideIcon}>
            {icons === true ?<button className='btn-password' onChange={handleShowPassword}><i class="fa fa-sharp fa-light fa-eye-slash"></i></button> : <button className='btn-password'><i class="fa fa-sharp fa-light fa-eye"></i></button>
            }
            </div> */}
            {errors.password && <label className="label1 text-danger">{errors.password}</label>}

            
            <button
              className="btn-password"
              onClick={handleTogglePassword}
              aria-label={passwordVisible ? 'Hide password' : 'Show password'}
            >
              <i
                className={`fa fa-sharp fa-light ${
                  passwordVisible ? 'fa-eye' : 'fa-eye-slash'
                }`}
              ></i>
            </button>
        </div>
        <div className='mb-3 login'>
            <label className='label d-block' htmlFor="">Confirm Password</label>
            <input 
            className='form-control '
            type={passwordVisible1 ? 'text' : 'password'}
            id='confirm password'
            name='confirm password'
            placeholder='Confirm Password'
            value={confirmPassWord}
            onChange={handleChange}

            />
            {/* {error&&password.length <= 8 ?
            <label className='label1 text-danger' htmlFor="">Required*</label> :""} */}

{errors.confirmPassWord && (
              <label className="label1 text-danger">{errors.confirmPassWord}</label>
            )}
            <button
              className="btn-password"
              onClick={handleTogglePassword1}
              aria-label={passwordVisible1 ? 'Hide password' : 'Show password'}
            >
              <i
                className={`fa fa-sharp fa-light ${
                  passwordVisible1 ? 'fa-eye' : 'fa-eye-slash'
                }`}
              ></i>
            </button>
        </div>
       <div className='mb-3'>
       <input type="checkbox" />
        <label htmlFor="">Keep me signed in</label>
       </div>
       <div className='btn1 text-center mb-4'>
   <button className='btn-create'>Create Your Account</button>
   </div>
   </form>

    </div>
   


   <div className='foot p-2 text-center mb-4'>
    <p>Have an account? <a href="">Sign in</a></p> 
    By creating your Quickmunch account, you agree to the <br />
    <a href="">Terms of use</a> and <a href="">Privacy Policy.</a>
    </div>

    </div>

  );
};

export default Signup