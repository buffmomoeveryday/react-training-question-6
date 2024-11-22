import { useEffect, useState } from "react"
import WelcomeList from "./WelcomeList"

export default function WelcomeApp() {

    const [names, setNames] = useState([])
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


    // Every time an item is added in the array, log "Welcome, {{person}}. Hope you have a great day!"
    // Add cleanup function to log "Unmounted" on the console when the component unmounts.
    useEffect(() => {
        const lastAddedName = names[names.length - 1]
        if (lastAddedName !== undefined) {
            console.log(`Welcome, ${lastAddedName}.Hope you have a great day`)
        }
        return (() => { console.log("Unmounted") })
    }, [names])



    return (
        <>
            {names.length}
            <ul>
                {names.map((name, index) => (
                    <WelcomeList index={index} name={name} onRemove={() => removeName(name)} />
                ))}
            </ul>




            {names.length < 5 ? (
                <div>
                    <input name="" value={newName} onChange={(e) => setNewName(e.target.value)}></input>
                    <button onClick={addNewName}>Add Name </button>
                </div>

            ) : <p> Cannot add more</p>}

        </>
    )
}