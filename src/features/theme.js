import {createSlice} from '@reduxjs/toolkit'

export const themeSlice = createSlice({
name:'theme',
initialState:{value:{color:'black'}},
reducers:{
ChangeColor:(state,action)=> {
    state.value = action.payload
},

}

});

export const {ChangeColor}=themeSlice.actions;
export default themeSlice.reducer;





