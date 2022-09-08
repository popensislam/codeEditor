import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme?: any) => ({
    header: {
        height: '70px',
        flexShrink: '0',
        background: '#272822',
        color: '#fff',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '0 15px',
        gap: '15px'
    },
    btn: {
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
        borderRadius: '4px',
        color: '#fff',
        background: "#333",
        fontWeight: '600',
        cursor: 'pointer',
        border: 0,
        outline: 0,
        "&:hover": {
            background: '#444'
        }
    }
}))