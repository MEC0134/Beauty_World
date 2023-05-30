import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card } from "react-bootstrap";
import "../css/Fetch.css";


function CreateCard(props) {
    return ( 
        <Card  className="Fade-in item-card" id={props.id} style={{ width: "18rem" }}>
          <Card.Img className="card-img" variant="top" src={props.image_link} />
            <Card.Body>
              <Card.Title className="card-title">
                {props.name} 
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>Brand: {props.brand}</li>
                  <li>Type: {props.product_type}</li>
                  <li>Price: ${props.price}</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <IconButton className="remove-btn" onClick={() => props.remove(props.id)} aria-label="delete" size="small">
              <DeleteIcon fontSize="small" />
            </IconButton>
        </Card>
      );
}


export default CreateCard;