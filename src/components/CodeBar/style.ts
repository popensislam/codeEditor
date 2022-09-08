import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme?: any) => ({
  codebar: {
    width: '600px',
    background: '#272822',
    position: 'relative'
  },

  tab: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '70px',
    gap: '15px',
    borderBottom: '2px solid #333'
  },

  item: {
    display: 'flex',
    height: '50px',
    flex: '1 1 auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    background: '#333',
    fontWeight: '600'
  },

  editor: {
    height: 'calc(100vh - 70px)',
    padding: '10px'
  }
}))