import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyDownAddName: (e: KeyboardEvent<HTMLInputElement>) => void
    onBlur: (event: ChangeEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownAddName}
) => {
    const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.greeting}>
            <div>
                <input value={name} onChange={setNameCallback}
                       className={inputClass}
                       onKeyDown={onKeyDownAddName} onBlur={setNameCallback}/>
                <div className={s.error}>{error}</div>
            </div>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <span className={s.count}>{totalUsers}</span>

        </div>
    )
}

export default Greeting
