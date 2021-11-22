import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {changeName} from "../../store/modules/user/actions"

function Inicial(){
    const [input, setInput] = useState("")
    const dispatch = useDispatch();
    const nome = useSelector((state) => state.user.name);

    const handleClick = () => {
        dispatch(changeName(input))
    }

    return(
        <div>
            <h2>User name: {nome}</h2>
            <input onChange={(e) => setInput(e.target.value)} type="text" />
            <button onClick={handleClick}>Change</button>
        </div>
    )
}

export default Inicial