import {createContext, useState} from 'react'

export const ContextAeropoints = createContext()

export const Aeropoints = ({children}) => {
    const [aeropoints, setAeropoints] = useState(0);

    return(
        <ContextAeropoints.Provider value={{aeropoints, setAeropoints}}>{children}</ContextAeropoints.Provider>
    )

}