import React from "react";
import Card from 'react-bootstrap/Card'

import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {NavLink} from "react-router-dom"



    const Post = ({title, author, publishedDate, shortDescription, id}) => {
       
       
        return (
            <Card >
                
              <Card.Body style={{ height: '15rem' }}>
                <Card.Title  >{title}</Card.Title >
                <p className="mb-2 fw-bold">Author: <span className="fw-normal">{author}</span></p>
                <p className="mb-2 fw-bold">Published: <span className="fw-normal">{publishedDate}</span></p>
                <p>{shortDescription}</p>
                <Nav.Link as={NavLink} to={"/post/" + id}><Button variant="success">Read more</Button></Nav.Link>
                
              </Card.Body>
            </Card>
        )
    }
   

export default Post;