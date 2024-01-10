import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
function Password() {
    const {user}=useContext(UserContext)
    if(!user)return <>please login</>
    else return <>Welcome {user.Username}</>
}

export default Password