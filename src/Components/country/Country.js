import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Country.css'

const Country = (props) => {
    console.log(props);
    const { name, area, region, flags, borders, population } = props.country
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flags.png} />
                <Card.Body>
                    <Card.Title>{name.common}</Card.Title>
                    <Card.Text>
                        {region}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Borders : {borders?.[0] ? borders?.[0] : 'No Border Found'}</ListGroupItem>
                    <ListGroupItem>population : {population}</ListGroupItem>
                    <ListGroupItem>Area : {area}</ListGroupItem>
                </ListGroup>

            </Card>
        </div>
    );
};

export default Country;