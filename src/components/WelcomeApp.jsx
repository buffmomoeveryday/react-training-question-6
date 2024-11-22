import { useState } from "react"
import WelcomeList from "./WelcomeList"

export default function WelcomeApp() {
    const [names, setNames] = useState(['ram', "shyam", "haru"])
    const [newName, setNewName] = useState("")

    const addNewName = () => {
        if (newName.trim() !== "" && !names.includes(newName)) {
            setNames([...names, newName])
            setNewName("")
        }
    }

    const removeName = (nameToRemove) => {
        const names = names.filter((name) => name !== nameToRemove)
        setNames(names);
    };


    return (
        <>
            <ul>
                {names.map((name, index) => (
                    <WelcomeList index={name} name={name} onRemove={() => removeName(name)} />
                ))}
            </ul>

            <input name="" value={newName} onChange={(e) => setNewName(e.target.value)}></input>
            <button onClick={addNewName}>Add Name </button>
        </>
    )
}