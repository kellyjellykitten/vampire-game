import { createSlice } from "@reduxjs/toolkit";

// initialize vampire object to state
const initialState = {
    vampire: {
        origin: [{
            name: "",
            originExperience: ""
        }],
        sideCharacters: ["", "", ""],
        skills: ["", "", ""],
        resources: ["", "", ""],
        memories: ["", "", "", "", ""],
        conversion: [{
            immortal: "",
            mark: "",
            conversionExperience: ""
        }],
    },
};

// tell slice how to react w/ the state whenever some action happens
const vampireSlice = createSlice({
    name: "vampire",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.vampire.origin[0] = action.payload;
        },
        setSideCharacters: (state, action) => {
            const { index, value } = action.payload;
            //ensure always an array
            if (!state.vampire.sideCharacters) {
                state.vampire.sideCharacters = ["", "", ""];
            }
            //if index is outside current array, extend the array
            while (state.vampire.sideCharacters.length <= index) {
                state.vampire.sideCharacters.push("");
            }
            //update specific sideCharacter at given index
            state.vampire.sideCharacters[index] = value;
        },
        setSkills: (state, action) => {
            const { index, value } = action.payload;
            if (!state.vampire.skills) {
                state.vampire.skills = ["", "", ""];
            }
            //if index is outside current array, extend the array
            while (state.vampire.skills.length <= index) {
                state.vampire.skills.push("");
            }
            state.vampire.skills[index] = value;
        },
        setResources: (state, action) => {
            const { index, value } = action.payload;
            if (!state.vampire.resources) {
                state.vampire.resources = ["", "", ""];
            }
            while (state.vampire.resources.length <= index) {
                state.vampire.resources.push("");
            }
            state.vampire.resources[index] = value;
        },
        setMemoryExperience: (state, action) => {
            const { index, value } = action.payload;
            if (!state.vampire.memories) {
                state.vampire.memories = ["", "", "", "", ""];
            }
            while (state.vampire.memories.length <= index) {
                state.vampire.memories.push("");
            }
            state.vampire.memories[index] = value;
        },
        setConversion: (state, action) => {
            // since coversion is an array w/ 1 object, update index [0] to store new values
            state.vampire.conversion[0] = action.payload;
        },
        importVampireCharacter: (state, action) => {
            state.vampire = action.payload;
        }
    },
});

export const {
    setOrigin,
    setSideCharacters,
    setSkills,
    setResources,
    setMemoryExperience,
    setConversion,
    importVampireCharacter
} = vampireSlice.actions;

export default vampireSlice.reducer;