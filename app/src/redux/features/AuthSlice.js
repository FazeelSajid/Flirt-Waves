import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const bUrl = 'https://flirt-waves-be.mtechub.com/'; // Update endpoint

const initialState = {
  signup: {
    status: 'idle',
    error: null,
    success: null,
    data: null,
  },
  signin: {
    status: 'idle',
    error: null,
    success: null,
    data: null,
  },
  forgetPass: {
    status: 'idle',
    error: null,
    success: null,
    data: null,
  },
  resetPass: {
    status: 'idle',
    error: null,
    success: null,
    data: null,
  },
};

export const signup = createAsyncThunk(
  'userSignup',
  async (userData, {rejectWithValue}) => {
    const data = {
      email: userData.email,
      password: userData.password,
      // token: "token",
      device_id: '123455',
      signup_type: 'email',
    };
    try {
      const response = await axios.post(`${bUrl}user/user_signup`, data);
      // console.log(response.data, 'response');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const signin = createAsyncThunk(
  'userSignin',
  async (userData, {rejectWithValue}) => {
    const data = {
      email: userData.email,
      password: userData.password,
      device_id: '123455',
    };

    try {
      const response = await axios.post(`${bUrl}user/user_signin`, data);
      // console.log(response.data, 'response');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const forgetPas = createAsyncThunk(
  'forgetPass',
  async (userData, {rejectWithValue}) => {
    const data = {
      email: userData.email,
    };
    try {
      const response = await axios.post(`${bUrl}user/forget_password`, data);
      // console.log(response.data, 'response');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const resetPas = createAsyncThunk(
  'resetPas',
  async (userData, {rejectWithValue}) => {
    const data = {
      email: userData.email,
      password: userData.password,
    };
    try {
      const response = await axios.put(`${bUrl}user/reset_password`, data);
      // console.log(response.data, 'response');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetStatus(state) {
      state.signup.status = 'idle';
      state.signup.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.signup.status = 'loading';
        state.signup.error = null;
        state.signup.data = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.signup.status = 'succeeded';
        state.signup.data = action.payload.data;
        state.signup.success = action.payload.msg;
        // console.log(action.payload);
      })
      .addCase(signup.rejected, (state, action) => {
        state.signup.status = 'failed';
        state.signup.error = action.payload.msg;
        // console.log(action.payload.msg);
      })
      .addCase(signin.pending, state => {
        state.signin.status = 'loading';
        state.signin.error = null;
        state.signin.data = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.signin.status = 'succeeded';
        state.signin.data = action.payload.data;
        state.signin.success = action.payload.msg;
        // console.log(action.payload);
      })
      .addCase(signin.rejected, (state, action) => {
        state.signin.status = 'failed';
        state.signin.error = action.payload.msg;
        // console.log(action.payload, 'payload error');
      })
      .addCase(forgetPas.pending, state => {
        state.forgetPass.status = 'loading';
        state.forgetPass.error = null;
        state.forgetPass.data = null;
      })
      .addCase(forgetPas.fulfilled, (state, action) => {
        state.forgetPass.status = 'succeeded';
        state.forgetPass.data = action.payload;
        // console.log(action.payload, 'auth');
        state.forgetPass.success = action.payload.msg;
        // console.log(action.payload);
      })
      .addCase(forgetPas.rejected, (state, action) => {
        state.forgetPass.status = 'failed';
        state.forgetPass.error = action.payload.msg;
        // console.log(action.payload, 'payload error');
      })
      .addCase(resetPas.pending, state => {
        state.resetPass.status = 'loading';
        state.resetPass.error = null;
        state.resetPass.data = null;
      })
      .addCase(resetPas.fulfilled, (state, action) => {
        state.resetPass.status = 'succeeded';
        state.resetPass.data = action.payload.data;
        
        state.resetPass.success = action.payload.msg;
        // console.log(action.payload);
      })
      .addCase(resetPas.rejected, (state, action) => {
        state.resetPass.status = 'failed';
        state.resetPass.error = action.payload.msg;
        // console.log(action.payload, 'payload error');
      });
  },
});

export const {resetStatus} = authSlice.actions;
export default authSlice.reducer;
