import { Box, Button } from "@mui/material"
import { useState } from "react"
import CssEditor from "../Editor/CssEditor"
import HtmlEditor from "../Editor/HtmlEditor"
import JsEditor from "../Editor/JsEditor"
import { useStyles } from "./style"


const CodeBar = () => {

    const classes = useStyles()

    const [activeLang, setActiveLang] = useState<string>('HTML')
    const langProg: string [] = ['HTML', 'CSS', 'JS']

    return(
        <div className={classes.codebar}>
            <Box className={classes.tab}>
                {
                    langProg.map((item, i) =>
                    <Button 
                    key={i} 
                    sx={ 
                        activeLang === item 
                        ? {color: '#fff', fontSize: '15px', background: 'red'} 
                        : {color: '#fff', fontSize: '15px'}} 
                    className={classes.item}
                    onClick={() => setActiveLang(`${item}`)}
                    >
                        {item}
                    </Button>
                    )
                }
            </Box>
            <div className={classes.editor}>
                {activeLang === 'HTML' ? <HtmlEditor/> : null}
                {activeLang === 'CSS' ? <CssEditor/> : null}
                {activeLang === 'JS' ? <JsEditor/> : null}
            </div>

        </div>
    )
}

export default CodeBar