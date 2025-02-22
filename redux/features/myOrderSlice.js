import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// get my orders
export const MyOrder = createAsyncThunk(
  'order/fetchOrder',
  async (userEmail) => {
    const response = await fetch(`https://eduker-server.onrender.com/myOrder/${userEmail}`)
    const orderItems = response.json();
    return orderItems;
  }
)
// MyCourses
export const MyCourses = createAsyncThunk (
  'peyment/setPayment',
  async(email,_id) => {
    const response = await fetch(`https://eduker-server.onrender.com/paymentInfo/${_id}`)
    const paymentItem = response.json();
    return paymentItem;
  }
)

export const eventSlice = createSlice({
  name: 'counter',
  initialState: {
    myOrders: [],
    status: '',
  },
  reducers: {
  
  },

  extraReducers: (builder) => {
    // all event
    builder.addCase(MyOrder.fulfilled, (state, action) => {
      state.myOrders = action.payload
      state.status = 'fulfilled'
    }),
      builder.addCase(MyOrder.pending, (state, action) => {
        state.status = 'pending'
    })
  },

})
// export const {  } = eventSlice.actions
export default eventSlice.reducer
