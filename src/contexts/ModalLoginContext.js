import React, {createContext} from "react";

const ModalLoginContext = createContext({
    id: localStorage.getItem('user')
})

export default ModalLoginContext;