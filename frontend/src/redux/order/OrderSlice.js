import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const initialState =  {
    carts: []
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        doAddBookAction: (state, action) => {
            let carts = state.carts;
            const item = action.payload;

            let isExistIndex = carts.findIndex(c => c._id === item._id);
            if(isExistIndex > -1) {
                carts[isExistIndex].quantity = carts[isExistIndex].quantity + item.quantity; 

                if(carts[isExistIndex].quantity > carts[isExistIndex].detail.quantity )  {
                    carts[isExistIndex].quantity = carts[isExistIndex].detail.quantity;
                } 
            } else {
                carts.push({quantity: item.quantity, _id: item._id, detail: item.detail})
            }
            state.carts = carts;
            message.success("Sản phẩm được thêm vào giỏ hàng!! yeahhh")
        },
    // },

    doUpdateCartAction: (state, action) => {
        let carts = state.carts;
        const item = action.payload;

        let isExistIndex = carts.findIndex(c => c._id === item._id);
        if(isExistIndex > -1) {
            carts[isExistIndex].quantity = item.quantity;   
            if(carts[isExistIndex].quantity > carts[isExistIndex].detail.quantity )  {
                carts[isExistIndex].quantity = carts[isExistIndex].detail.quantity;
            } 
        } else {
            carts.push({quantity: item.quantity, _id: item._id, detail: item.detail})
        }
        state.carts = carts;
    },

    doDeleteItemCartAction: (state, action) => {
        state.carts = state.carts.filter(c =>c._id !== action.payload._id)
        message.warning('Đã xóa 1 sản phẩm  ^^^')
    }
    
},
extraReducers: (builder) => {
   
},
}
)

export const { doAddBookAction, doUpdateCartAction, doDeleteItemCartAction } = orderSlice.actions;

export default orderSlice.reducer;