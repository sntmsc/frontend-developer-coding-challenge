import {createContext, useState} from 'react'

export const ToastContext = createContext()

export const ContextToast = ({children}) => {
    const [toast, setToast] = useState([]);

    return(
        <ToastContext.Provider value={{toast, setToast}}>{children}</ToastContext.Provider>
    )

}