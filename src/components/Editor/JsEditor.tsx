

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setJs } from "../../store/slice/javascriptSlice";

const JsEditor = () => {

    const { jsCode } = useAppSelector(store => store.js)
    const dispatch = useAppDispatch()
    
    return(
        <AceEditor
            placeholder="Write your JS codes here!"
            value={jsCode}
            onChange={value => dispatch(setJs(value))}
            mode="javascript"
            theme="monokai"
            name="editor_js"
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

export default JsEditor