import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
    isDarkMode: boolean
    onToggle: () => void
}

export default function NavBar({isDarkMode, onToggle}: Props) {
  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">
                RE-STORE
            </Typography>
            <IconButton onClick={onToggle}>
              {isDarkMode ? <DarkMode/> : <LightMode sx={{color:'yellow'}}/>}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}