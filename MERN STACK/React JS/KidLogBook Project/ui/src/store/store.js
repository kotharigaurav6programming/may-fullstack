import {configureStore} from '@reduxjs/toolkit';
import admin from './adminSlice.js';
import commonSlice from './commonSlice.js';
import teacherSlice from './teacherSlice.js';
export default configureStore({
    reducer:{
        admin : admin,
        common : commonSlice,
        teacher : teacherSlice
    }
});