import React, { createContext, useState, useContext } from 'react'

const MainContext = createContext();

export function useMainContext(){
    return useContext(MainContext)
}

// harus children
export function ContextProvider({children}){
   const [showCari, setshowCari] = useState(false)
   const [linkRoute, setLinkRoute] = useState('')
   const [lostNotif, setLostNotif] = useState(false)
    const value = {
        showCari,
        setshowCari,
        linkRoute,
        setLinkRoute,
        lostNotif,
        setLostNotif
    }
    return(
        <>
            <MainContext.Provider value={value}>
                {children}
            </MainContext.Provider>
        </>
    )
}