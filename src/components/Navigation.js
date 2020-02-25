import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const Navigation = () => {
  let loggedIn = document.cookie
  if (loggedIn == "loggedIn=true") {
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    ATX - Small Business
                </Typography>
                <div>You are currently logged in</div>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item"
                        onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                      }}>
                        <li className="nav-list-item">
                          <Link to="/login">Log Out</Link>
                        </li>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
} else {
  return (
        <AppBar position='relative'>
            <Toolbar>
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                  ATX - Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                      <Link to="/login">Login</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
  }
}
export default Navigation