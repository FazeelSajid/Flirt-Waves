import { useDispatch, useSelector } from 'react-redux';
import { signup, signin, forgetPas, resetPas } from './features/AuthSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const signupUser = (userData, callback) => {
    dispatch(signup(userData, callback)).then((action)=>{
      if (action.meta.requestStatus === 'fulfilled') {
        callback('succeeded', action.payload.msg);
      } else if (action.meta.requestStatus === 'rejected') {
        callback('failed', action.payload.msg);
      }
    });
  };
  const signinUser = (userData, callback) => {
    dispatch(signin(userData)).then((action)=> {
      if (action.meta.requestStatus === 'fulfilled') {
        callback('succeeded', action.payload.msg);
      } else if (action.meta.requestStatus === 'rejected') {
        callback('failed', action.payload.msg);
      }
    });
  };
  const forgetPass = (userData, callback) => {
    dispatch(forgetPas(userData)).then((action) => {
      if (action.meta.requestStatus === 'fulfilled') {
        callback('succeeded', action.payload.msg);
      } else if (action.meta.requestStatus === 'rejected') {
        callback('failed', action.payload.msg);
      }
    });
  };
  const resetPass = (userData, callback) => {
    // console.log(userData, 'useauth');
    dispatch(resetPas(userData)).then((action) => {
      if (action.meta.requestStatus === 'fulfilled') {
        callback('succeeded', action.payload.msg);
      } else if (action.meta.requestStatus === 'rejected') {
        callback('failed', action.payload.msg);
      }
    });
  };

  const signupState = useSelector((state) => state.auth.signup);
  const signinState = useSelector((state) => state.auth.signin);
  const forgetPassState = useSelector((state) => state.auth.forgetPass);
  const resetPassState = useSelector((state) => state.auth.resetPass);

  return {
    signupUser,
    signupState,
    signinUser,
    signinState,
    forgetPass,
    forgetPassState,
    resetPass,
    resetPassState,

  };
};

export default useAuth;
