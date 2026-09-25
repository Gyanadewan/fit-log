"use client"

import { createContext, useState } from "react"
 export const FitlogContext = createContext()
function FitLogProvider({children}) {
    const [plan, setPlan] =  useState([])
     const [saved, setSaved] = useState([]);
    const fitlogData = {
    plan,
    setPlan,
    saved,
    setSaved,
};
  return (
      <FitlogContext.Provider value={fitlogData }>
            {children}
      </FitlogContext.Provider>
  )
}

export default FitLogProvider
