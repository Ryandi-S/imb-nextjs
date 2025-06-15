import { Users } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/**
 * Define the state interface for the user slice
 * @returns The state interface for the user slice
 */
export interface UserState {
  users: Users | null;
  isRegistered: boolean;
}

/**
 * Define the initial state for the user slice
 * @returns The initial state for the user slice
 */
const initialState: UserState = {
  users: null,
  isRegistered: false,
};

/**
 * Create the user slice
 * @returns The user slice
 */
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    /**
     * Set the profile user
     * @param state - The state
     * @param action - The action
     * @returns The state
     */
    setProfileUser: (state, action: PayloadAction<Users>) => {
      state.users = action.payload;
      state.isRegistered = true;
    },
    /**
     * Logout the user
     * @param state - The state
     * @returns The state
     */
    logout: (state) => {
      state.users = null;
      state.isRegistered = false;
    },
  },
});

// Export the actions for the user slice
/**
 * Export the actions for the user slice
 * @returns The actions for the user slice
 */
export const { setProfileUser, logout } = userSlice.actions;

// Export the reducer for the user slice
/**
 * Export the reducer for the user slice
 * @returns The reducer for the user slice
 */
export default userSlice.reducer;
