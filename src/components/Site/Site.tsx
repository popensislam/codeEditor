import { Typography } from "@mui/material";
import { FC, useEffect, useMemo } from "react";
import { useAppSelector } from "../../hooks/hooks";


const Site: FC = () => {

    const cssCode = useAppSelector(store => store.css.cssCode)
    const jsCode = useAppSelector(store => store.js.jsCode)
    const htmlCode = useAppSelector(store => store.html.htmlCode)

    const document = useMemo(() => {
        if (!cssCode && !jsCode && !htmlCode) return
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${cssCode}</style>
        </head>
        <body>
        ${htmlCode}
        <script>${jsCode}</script
        </body>
        </html>
        `
    }, [htmlCode, jsCode, cssCode])

    return (
        <div className="site" style={{ height: '100vh', width: '100%' }}>
            {
                document
                    ? <iframe title='preview' style={{height: '100vh', width: '100%'}} srcDoc={document} />
                    : <Typography
                        sx={
                            { 
                                height: '100vh', 
                                width: '100%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                background: '#333',
                                color: '#fff'
                            }}
                    >
                        Your code will be displayed here
                    </Typography>
            }
        </div>
    )
}

export default Site