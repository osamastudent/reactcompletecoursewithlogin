import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     count:0
// }
const initialState = {
    
    students: [
        {
            "id": 1,
            "name": "bangladesh",
            "email": "quia et suscipit\nsuscipit recusandae consequuntur expedita et "
        },
        {
            "id": 2,
            "name": "pakistan",
            "email": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea ",
            "password":123
        },
        {
            "id": 3,
            "name": "india",
            "email": "et iusto sed quo iure\nvoluptatem ",
            "password": 123
         },
        {
            "id": 4,
            "name": "eum et est occaecati",
            "email": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident ",
            "password": 123,
        },
    ],
    student: {
        name: "",
        email: "",
    },
    count:0
    // student:null
}

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        getStudent: (state, action) => {
            // console.log(state,action)
            state.student = state.students.find((el) => el.id == action.payload);
        },
        clearStudent: (state) => {
            state.student = {
                student: {
                    name: "",
                    email: "",
                }
            }
        },
        addStudentmore: (state, action) => {
            state.students = [action.payload, ...state.students];
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter((el) => el.id != action.payload);
          },
          updateStudentRecord: (state, action) => {
            state.students = state.students.map((el) => el.id === action.payload.id ? action.payload : el);
        },
        




        Increment:(state,action)=>{
            state.count +=1;
        }
    },
  


});

export const { getStudent, clearStudent ,addStudentmore,deleteStudent,Increment,updateStudentRecord} = CounterSlice.actions;
export default CounterSlice.reducer;