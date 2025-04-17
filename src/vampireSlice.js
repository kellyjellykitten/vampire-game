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
        memories: [
            { id: "1", experiences: ["", "", ""] },
            { id: "2", experiences: ["", "", ""] },
            { id: "3", experiences: ["", "", ""] },
            { id: "4", experiences: ["", "", ""] },
            { id: "5", experiences: ["", "", ""] },
        ],
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
            //if index is outside currenty array, extend the array
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
            //if index is ourside currenty array, extend the array
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
            // memoryID identifies which memory to update
            // experienceIndex identifies which experience inside the memory to update
            // value is the new expreiences text the user enters
            const { memoryId, experienceIndex, value } = action.payload;
            // use find() to locate the memory w/ matching id. if found, update the experience at the specified experienceIndex
            const memory = state.vampire.memories.find((mem) => mem.id === memoryId);
            if (memory) {
                memory.experiences[experienceIndex] = value;
            }
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