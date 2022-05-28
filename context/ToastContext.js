import {createContext, useState} from 'react'

export const ToastContext = createContext()

export const ContextToast = ({children}) => {
    const [toast, setToast] = useState([{status: 'success', fade:'in', event:'product', product:'I pad'}]);

    return(
        <ToastContext.Provider value={{toast, setToast}}>{children}</ToastContext.Provider>
    )

}