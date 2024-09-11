import React, { useRef, useState } from 'react'
import Header from './Header'
import { BACKGROUND_IMG } from '../util/util'
import { checkValidData } from '../util/validate'
import { auth } from '../util/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const [isSigIn, setIsSignIn] = useState(true)
  const [errMessage, setErrMessage] = useState('')
  const [invalidCredentials , setInvalidCredentials] = useState('')
  const navigate = useNavigate()
  const fullName = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const toggleSignInForm = () => {
    setIsSignIn(!isSigIn)
  }

  const handleButtonClick = () => {
    const fullNameValue = !isSigIn && fullName.current ? fullName.current.value : null;
    const message = checkValidData(email.current.value, password.current.value, fullNameValue )
    setErrMessage(message)
    console.log(errMessage)
    if (message) return;

    if (!isSigIn) {
      //signup logic

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
          console.log(user)
          
          
          navigate('/browse')

        })
        .catch((error) => {
          console.log(error)
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrMessage(errorCode + "-" + errorMessage)
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          setInvalidCredentials('')
          navigate('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setInvalidCredentials(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <div className='relative w-full h-screen'>
      <Header />
      <div
        className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
        style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
      >
        <div className='absolute inset-0 bg-black opacity-50 bg-gradient '></div>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className=' w-full max-w-lg h-full absolute inset-0 p-12 bg-black my-28 mx-auto right-0 left-0 text-white opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSigIn ? "Sign In" : "Sign up"}</h1>
        {!isSigIn ?
          <input type='text' ref={fullName} placeholder='Full Name' className='p-2 m-2 my-1 w-full bg-gray-900 rounded-sm px-4 py-2 h-14 ' /> : ""
        }
        <p className='mx-5 text-red-600 font-normal '>{errMessage?.fullNameErr} </p>

        <input type='text' ref={email} placeholder='Email or phone number' className='p-2 m-2 my-6 w-full bg-gray-900 rounded-sm px-4 py-2 h-14 ' />
        <p className='mx-5 text-red-600 font-normal '>{errMessage?.emailErr} </p>

        <input type='password' ref={password} placeholder='Password' className='p-2 m-2 my-1 w-full bg-gray-900 rounded-sm px-4 py-2 h-14 ' />
        <p className='mx-5 text-red-600 font-normal '>{errMessage?.passwordErr}</p>
        <p className='mx-5 text-red-600 font-normal '>{invalidCredentials ? 'invalid credentials' : ''}</p>
        <button type='submit' className='p-2 m-2 my-6 w-full rounded-sm px-4 py-2 font-bold' style={{ backgroundColor: 'rgba(255, 0, 0, 1)' }} onClick={handleButtonClick}>
          {isSigIn ? "Sign In" : "Sign up"}
        </button>
        {isSigIn ?
          <>
            <h4 className=' flex justify-center font-semibold '>OR</h4>
            <button class="p-2 m-2 my-6 bg-white bg-opacity-30 w-full rounded-s text-white font-semibold  ">
              Use a sign-in code
            </button></> : ''
        }

        {
          isSigIn ? <> <h6 className=' flex justify-center font-semibold '>Forgot Password ?</h6>
            <span className='flex my-6'>
              <input type='checkbox' className='form-checkbox h-5 w-5 rounded-full bg-transparent' />
              <h6 className='px-3' >Remember me</h6>
            </span></> : ''
        }
        {isSigIn ? <p className='my-5 '>New to Netflix?<span className=' font-bold cursor-pointer ' onClick={toggleSignInForm}> Sign up now. </span> </p> :
          <p className='my-5 ' >Already have an account?  <span className=' font-bold cursor-pointer ' onClick={toggleSignInForm}>Sign in now. </span> </p>
        }
      </form>

    </div>
  )
}

export default Login