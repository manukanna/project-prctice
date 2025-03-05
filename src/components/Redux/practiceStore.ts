// store.ts
import { configureStore } from '@reduxjs/toolkit';
import componentSlice from './practiceSlice';  // import your slice's reducer

const store = configureStore({
  reducer: {
    swicthLoginSignUpComponent: componentSlice,  // Add the counter reducer to the store
    updateSignUpData: componentSlice,
    updateLoginDetails:componentSlice,
  },
});

export default store;
