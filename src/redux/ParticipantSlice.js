import { createSlice } from '@reduxjs/toolkit';

const participantsSlice = createSlice({
    name: 'participants',
    initialState: [],
    reducers: {
        addParticipant(state, action) {
            const participant = action.payload;
            if (!state.some(item => item.username === participant.username)) {
                state.push(participant);
            }
        },
        removeParticipant(state, action) {
            const usernameToRemove = action.payload;
            return state.filter(participant => participant.username !== usernameToRemove);
        },
    },
});

export const { addParticipant, removeParticipant } = participantsSlice.actions;
export default participantsSlice.reducer;