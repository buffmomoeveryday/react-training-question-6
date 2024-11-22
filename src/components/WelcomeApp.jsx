import { useState } from "react"
import WelcomeList from "./WelcomeList"

export default function WelcomeApp() {
    const [names, setNames] = useState(['ram', "shyam", "haru"])
    const [newName, setNewName] = useState("")

    const addNewName = () => {
        if (newName.trim() !== "" && !names.includes(newName) && names.length < 5) {
            setNames([...names, newName])
            setNewName("")
        }
    }

    const removeName = (nameToRemove) => {
        const names1 = names.filter((name) => name !== nameToRemove)
        setNames(names1);
    };

    let nameLength = names.length
    console.log(nameLength)

    return (
        <>
            {names.length}
            <ul>
                {names.map((name, index) => (
                    <WelcomeList index={index} name={name} onRemove={() => removeName(name)} />
                ))}
            </ul>




            {names.length < 5 && (
                <div>
                    <input name="" value={newName} onChange={(e) => setNewName(e.target.value)}></input>
                    <button onClick={addNewName}>Add Name </button>
                </div>

            )}
            {names.length >= 5 && <p>Cannot Add More</p>}

        </>
    )
}