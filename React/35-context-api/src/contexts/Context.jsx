import { createContext } from "react"

// Creating Context
export const contextdata = createContext();

function Context(props) {
  return (
    <div>
        {/* Providing Context */}
        <contextdata.Provider value={"Ayush"}>
            {props.children}
        </contextdata.Provider>
    </div>
  )
}

export default Context
