import React, {createContext, useState} from "react";
import User from "../classes/User";

export const ConnectedContext = createContext();

const ConnectedContextProvider = props =>{



    const user1 = new User();
    if (localStorage.getItem('user')){
        let localValue = JSON.parse(localStorage.getItem('user'));
        user1.id = localValue[0]
        user1.pseudo = localValue[1]
        user1.email = localValue[2]
        user1.image = localValue[3]
        user1.id_droit = localValue[4]
    } else {

    }

    const [user, setUser] = useState(user1);


    console.log("Context: "+ user.pseudo)

    return(
        <ConnectedContext.Provider value={{user}}>
            {props.children}
        </ConnectedContext.Provider>
    )
}
export default ConnectedContextProvider;
