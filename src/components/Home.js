import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import Businesses from '../Businesses.json'
import { Link } from 'react-router-dom'

const Home = () => {
   
    return (
        <div className="card-container">
            {Businesses.map((business, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{business.Name.toUpperCase()}</span>
                        <ul>
                        <li>About Us: {business["About Us"]}</li>
                        <li>Address: {business["Address"]}</li>
                        <li>Hours Of Operation: {business["Hours of Operation"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/business/${business.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home