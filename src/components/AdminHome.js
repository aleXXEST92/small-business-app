import React from 'react'
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import AddBusiness from '../containers/AddBusiness'
import { Link } from 'react-router-dom'


const AdminHome = (props) => {
    
    return (
        <Container maxWidth="lg">
            <div className="flex-container">
            <AddBusiness/>
            </div>
            <Table className="table">
                <TableHead>
                    <TableRow>
                        <TableCell>Company Name</TableCell>
                        <TableCell>About Us</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Hours of Operations</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.businesses.map((business, idx) => (
                    <TableRow key={business.id}>
                        <TableCell><Link to={`/business/${business.id}`}>{business["name"]}</Link></TableCell>
                        <TableCell>{business.about}</TableCell>
                        <TableCell>{business.address}</TableCell>
                        <TableCell>{business.hours}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default AdminHome
