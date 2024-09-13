import React, { useEffect } from 'react';
import { NETFLIX_LOGO } from '../util/util';
import { useNavigate , useLocation} from 'react-router-dom';
import { auth } from '../util/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../util/userSlice'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store)=> store.user)
  const location = useLocation();
  const handleSignOut = ()=> {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid , email , displayName , photoURL} = user;
        dispatch(addUser({uid: uid , email: email , displayName: displayName}))
        // ...
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate('/')
      }
    });
    return () => unsubscribe()
  }, [])

  return (
    <div className="absolute top-0 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black via-transparent to-transparent z-10">
      <img  
        className='w-32 sm:w-44'
        src={NETFLIX_LOGO}
        alt='Netflix Logo'
      />
      {user && location.pathname !== '/' && (
        <div className="flex items-center space-x-4">
          <img
            className="w-8 h-8 rounded"
            alt="User Icon"
            src="https://occ-0-2480-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRhunw1-HwxU3HlvmFM9UycO_VOxatA9nWQ4aaCKTCxOVOv5OchUTFO6RJznhN4G2scAmgXUpHzkkVdq9_8f9ui0RksluPFA3w.png?r=229"
          />
          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 px-4 py-1 rounded hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
  