
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/ext-language_tools";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setHtml } from "../../store/slice/htmlSlice";


const HtmlEditor = () => {

    const { htmlCode } = useAppSelector(store => store.html)
    const dispatch = useAppDispatch()

    return(
            <AceEditor
                placeholder="Write your HTML codes here!"
                value={htmlCode}
                onChange={value => dispatch(setHtml(value))}
                mode="html"
                theme="monokai"
                name="editor_html"
                fontSize="16px"
                height="100%"
                width='100%'
                showPrintMargin={false}
                showGutter={false}
                highlightActiveLine={true}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    tabSize: 2
                }}
            />
    )
}

export default HtmlEditor