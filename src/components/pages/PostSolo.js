import { useParams } from 'react-router'
import { getPostById } from '../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import PostDelete from './PostDelete';
import EditPost from './PostEdit';
import PostEditForm from '../features/PostEditForm';



const PostSolo = () => {
    const { postId } = useParams();
    console.log(postId)
    const postData = useSelector(state => getPostById(state, postId));
    console.log(postData)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (!postData) return <Navigate to="/" />
    return (

        <Container col-xs="6" col-md="4">
            <Row  >

                <Card   >
                    <h1>{postData.title}</h1>


                    <Card.Body >
                        <Card.Title className="mb-2 fw-bold">Author: <span className="fw-normal">{postData.author}</span>   </Card.Title>
                        <Card.Text className="mb-2 fw-bold">Published:<span className="fw-normal">{postData.publishedDate}</span>


                        </Card.Text>
                        
                        <p dangerouslySetInnerHTML={{ __html: postData.content }} />
                    </Card.Body>
                </Card>

                <div className="d-flex justify-content-between">
                    <Nav.Link as={NavLink} to={"/post/edit/" + postId} className="px-0" ><Button variant="outline-info">Edit</Button></Nav.Link>
                    <Nav.Link as={NavLink} to={"/post/" + postId} className="ps-2"><Button variant="outline-danger" onClick={handleShow} >Delete</Button></Nav.Link>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Are you sure?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Do you want to delete this post?
                        </Modal.Body>
                        <Modal.Footer>
                            <PostDelete showModal={handleShow} handleClose={handleClose} id={postData.id} />

                        </Modal.Footer>
                    </Modal>
                </div>


            </Row>

        </Container>

    )
}
export default PostSolo;