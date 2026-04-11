import { useState } from "react"
import Home from "./pages/Home"
import Entrance from "./components/Entrance/Entrance"

function App(){

const [entered,setEntered] = useState(false)

return(

<>

{!entered && <Entrance onEnter={()=>setEntered(true)}/>}

{entered && <Home/>}

</>

)

}

export default App