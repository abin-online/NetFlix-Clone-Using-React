import React from 'react'
import Header from './Header'
import { BACKGROUND_IMG } from '../util/util'

const Login = () => {
  return (
    <div className='bg-transparent'>
      <Header />
      <div className=' bg-black absolute'>
        <img src={BACKGROUND_IMG} className=' bg-opacity-70 ' />
      </div>
      <form className=' w-[450px] h-auto absolute inset-0 p-12 bg-black my-28 mx-auto right-0 left-0 text-white opacity-80'>
        <h1 className='font-bold text-3xl py-4'>Sign In</h1>
        <input type='text' placeholder='Email or phone number' className='p-2 m-2 my-6 w-full bg-gray-900 rounded-sm px-4 py-2 h-14 ' />
        <input type='text' placeholder='Password' className='p-2 m-2 my-1 w-full bg-gray-900 rounded-sm px-4 py-2 h-14 ' />
        <button className='p-2 m-2 my-6 w-full rounded-sm px-4 py-2' style={{ backgroundColor: 'rgba(255, 0, 0, 1)' }}>
  Sign In
</button>
        <h4 className=' flex justify-center font-semibold '>OR</h4>
        <button class="p-2 m-2 my-6 bg-white bg-opacity-30 w-full rounded-s text-white font-semibold  ">
          Use a sign-in code
        </button>
        <h6 className=' flex justify-center font-semibold '>Forgot Password ?</h6>
        <span className='flex my-6'>
        <input type='checkbox' className='form-checkbox h-5 w-5 rounded-full bg-transparent' />
        <h6 className='px-3' >Remember me</h6>
        </span>
        <p className='my-5' >New to Netflix? <span className=' font-bold '>Sign up now. </span> </p>

      </form>
    </div>
  )
}

export default Login
