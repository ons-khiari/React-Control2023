import { configureStore } from '@reduxjs/toolkit';
import participantsReducer from './ParticipantSlice';

const store = configureStore({
    reducer: {
        participants: participantsReducer,
    },
});

export default store;