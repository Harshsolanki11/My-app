import { useState } from "react"

const Demo = () => {
    const [name, setName] = useState("Harsh")
    const [namelist, setNamelist]= useState([])
    const addname = () =>{
        setNamelist([
            ...namelist,
            name
        ])
        setName("")
    }
    console.log(name)
    console.log(namelist)
    return(
        <>
        <h1>To do List</h1>
        <input
         type="text"
         value={name}
         onChange={(e) => setName(e.target.value)}
         placeholder="Enter Name"
         />
        <button onClick={addname}>Add</button>
        <ul>
            {namelist.map((list) => (
                <li>{list}</li>
            ))}
        </ul>

        </>
    )
}
export default Demo