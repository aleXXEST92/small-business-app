import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';


const Business = (props) => {
    const id = parseInt(props.match.params.id)
    const business = props.businesses.find(business => business.id === id)

    return (
        <Container maxWidth="sm" className="business-info">
            <h2><u>{business.name}</u></h2>
            <h4>{business.address}</h4>
            <img style={{width: '400px', height: '300px'}} src={business.url} />
            <p>{business.about}</p>
            <h4>Hours Of Operation:</h4>
            <p>{business.hours}</p>       
        </Container>
    )
}

export default Business