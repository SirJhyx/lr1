import React from 'react'

//Creates a context object

//A context object as the name states, it is a data type of an object that can be used to store information that can be shared to other components within the application.

const UserContext = React.createContext();

//Provider Component - it allows other components to consume/use the context objects and supply the necessary information needed to the context object.
export const UserProvider = UserContext.Provider

export default UserContext;