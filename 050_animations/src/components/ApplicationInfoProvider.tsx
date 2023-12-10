"use client"

/* how to for context

 1. Define Datatype
 2. Define Context-Interface inkl. Mutators
 3. Use CreateContext to initialize the context
 4. Provide Hook (simple wrapper)
 5. Implements Provider and return XXXContent.Provider
 */

import {createContext, ReactNode, useContext, useState} from "react";


/* your payload-state object, just define it here.
 * the types will be automatically inferred to the code
 * that uses the context down the line.
 */

/* change to your object here */
const myContextState = {
    email: "stepan.rutz@gmx.de",
    firstname: "stepan",
    exchangeRate: 1.5,
    currency: "USD"
}



/* no need to change anything below here */
/* no need to change anything below here */
/* no need to change anything below here */

/* unless you want to define another context,
 * then all exportss must be adjusted to ensure 
 * unique namings */

export function useApplicationContext() {
    return useContext(ApplicationContext)
}
export type StateType = Partial<typeof myContextState>

export type ContextType<T> = {
    state: T
    setState: (state: T) => void
}

export const ApplicationContext = createContext<ContextType<StateType>>(null as  any)

export function ApplicationContextProvider(props: { value?: StateType, children: ReactNode }) {
    const[contextState, setContextState] = useState<StateType>(props.value || myContextState )
    const impl: ContextType<StateType> = {
        state: contextState,
        setState: (newState: StateType) => {
            setContextState({... contextState, ...newState})
        },
    }
    return (
        <ApplicationContext.Provider value={impl}>
            {props.children}
        </ApplicationContext.Provider>
    )
}