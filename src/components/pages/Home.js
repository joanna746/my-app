import { getAllPosts } from "../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Post from "./Post";
import Nav from 'react-bootstrap/Nav'
import Button from "react-bootstrap/esm/Button";
import { NavLink } from 'react-router-dom'
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row"
import shortid from "shortid";


const Home = () => {
    const posts = useSelector(getAllPosts);
    console.log(posts)
    
    return (
        <Container>
            <div className="d-flex justify-content-between mt-4 mb-2">
            <h1>All Posts</h1>
            <Nav.Link as={NavLink} to="/post/add"><Button variant="outline-success">Add post</Button></Nav.Link>
            </div>
            <Row lg="4" sm="12" className="my-3"  >
            {posts.map(post =>
                <Col lg="4" sm="12" className="my-3"key={post.id} >
                <Post
                    id={post.id}
                    title={post.title}
                    shortDescription={post.shortDescription}
                    category={post.category}
                    content={post.mainContent}
                    publishedDate={post.publishedDate}
                    author={post.author}>
                </Post>

                </Col>)}
            </Row>
            </Container>
    )
}
export default Home;