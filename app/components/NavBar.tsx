import { AppBar, Toolbar, Button, Box } from '@mui/material'

export default function NavBar() {
  
  const navItems: Array<String> = ["Projects", "About", "Contact"]

  const toolbarStyles = {
    display: "flex",
    justifyContent: "space-between"
  }

  return (
    <AppBar
      position="static"
      >
      <Toolbar
        sx={toolbarStyles}
      >
        <Box>
          Dominic Henley
        </Box>
        <Box>
          { navItems.map((buttonName, idx) => {
            return(
              <Button
                color="inherit"
                key={ idx }
                >
                { buttonName }
              </Button>
            )
          })}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
