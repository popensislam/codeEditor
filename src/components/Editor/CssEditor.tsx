

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/ext-language_tools";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCss } from "../../store/slice/cssSlice";

const CssEditor = () => {

    const { cssCode } = useAppSelector(store => store.css)
    const dispatch = useAppDispatch()

    return(
        <AceEditor
            placeholder="Write your CSS codes here!"
            value={cssCode}
            onChange={value => dispatch(setCss(value))}
            mode="css"
            theme="monokai"
            name="editor_css"
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

export default CssEditor