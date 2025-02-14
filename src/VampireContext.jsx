import { createContext, useContext, useState, useEffect } from 'react';

//Create the context
const VampireContext = createContext();

//Character provider component
// eslint-disable-next-line react/prop-types
export const VampireProvider = ({ children }) => {
    const [vampire, setVampire] = useState(() => {
        //Load from localstorage or initialize the character object
        const savedVampire = localStorage.getItem("vampire");
        return savedVampire
            ? JSON.parse(savedVampire)
            : {
                name: "",
                sideCharacters: ["", "", ""],
                skills: ["", "", ""],
                resources: ["", "", ""],
                memories: [
                    { id: "1", experiences: ["", "", ""]},
                    { id: "2", experiences: ["", "", ""]},
                    { id: "3", experiences: ["", "", ""]},
                    { id: "4", experiences: ["", "", ""]},
                    { id: "5", experiences: ["", "", ""]},
                ],
                conversion: { immortal: "", mark: "" },
            };
    });
    //Save to localstorage whenever characte updates
    useEffect(() => {
        localStorage.setItem("vampire", JSON.stringify(vampire));
    }, [vampire]);

    return (
        <VampireContext.Provider value={{ vampire, setVampire }}>
            {children}
        </VampireContext.Provider>
    );
};

//Custom hook to use the character state in any component
// eslint-disable-next-line react-refresh/only-export-components
export const useVampire = () => useContext(VampireContext);