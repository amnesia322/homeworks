import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.value) {
            setName(event.currentTarget.value)
            setError('')
        } else {
            setError('name is require!')
            setName('')
        }
         // need to fix
    }
    const addUser = () => {
        if (name.length) {
           addUserCallback(name)
            alert(`Hello  ${name}!`)
        } else alert(`${error}`) }



    const totalUsers = users.length


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
