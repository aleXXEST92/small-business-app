import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'


const Navigation = (props) => {

    let loggedIn = document.cookie
 
        return (
            <>
            <AppBar style={{background:'purple'}} position="relative">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Small Business App - Austin, Texas
                    </Typography>
                    <details className="nav-ul">
                      <summary>Menu</summary>
                      <ul>
                        <li className="nav-li">
                            <Link 
                            className='link'
                            to="/">Home</Link>
                        </li>
                    {loggedIn == 'loggedIn=true' ? 
                    ( <li className="nav-li">
                            <Link 
                            className='link'
                            onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                            }} to="/">Log Out</Link>
                        </li> ) : 
                    ( <li className="nav-li">
                            <Link 
                            className='link'
                            onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                            }} to="/login">Login</Link>
                        </li>
                    )}  
                    </ul>
                    </details>
                </Toolbar>
            </AppBar>
        </>
        )
    } 

export default Navigation