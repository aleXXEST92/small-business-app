import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'


const Home = (props) => {

    let loggedIn = document.cookie

        return (
        <>
        <div> {loggedIn == 'loggedIn=true' && 
          ( <Link 
                className='new'
                to="/admin"><b>Click Here To Add a New Business</b>
            </Link>)}
        </div>

        <Container maxWidth="lg" className="business-container">
            <div className="flex-container"></div>
            <Table>
                <TableHead>
                <TableRow>        
                    <TableCell>Company Name </TableCell>
                    <TableCell>About Us</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Hours of Operation</TableCell>
                    {loggedIn == 'loggedIn=true' && 
                    (<TableCell>Delete</TableCell>)}
                </TableRow>
                </TableHead>
                    <TableBody>
                    {props.businesses.map((business, idx) => (
                        <TableRow key={business.id}>
                            <TableCell><Link to={`/business/${business.id}`}>{business["name"]}</Link></TableCell>
                            <TableCell>{business.about}</TableCell>
                            <TableCell>{business.address}</TableCell>
                            <TableCell>{business.hours}</TableCell>
                            {loggedIn == 'loggedIn=true' && (<TableCell>
                            <DeleteIcon
                                onClick={() => props.deleteBusiness(idx)}
                                className="icon text-red" />
                            </TableCell>)}
                        </TableRow>
                        ))}
                </TableBody>
            </Table>
        </Container>
        </>
        )
}

export default Home