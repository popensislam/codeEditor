import { useState } from "react"
import { BsFillCameraVideoFill, BsFillCameraVideoOffFill} from 'react-icons/bs'
import { useStyles } from "./style"

const Header = () => {

    const classes = useStyles()

    const [camera, setCamera] = useState(false)

    return (
        <header className={classes.header}>
            <button className={classes.btn} onClick={() => setCamera(!camera)}>
                { camera 
                    ? <BsFillCameraVideoFill fill='#fff' size={23}/> 
                    : <BsFillCameraVideoOffFill fill='#fff' size={23}/>
                }
            </button>
        </header>
    )
}

export default Header