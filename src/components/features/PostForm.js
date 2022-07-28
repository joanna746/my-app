import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";



const PostForm = ({action, actionText, ...props })=>{



  const [title, setTitle] =  useState(props.title || '');
  const [author, setAuthor] = useState(props.author) || '';
  const [publishedDate, setPublishedDate] = useState(props.publishedDate ||'');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content});
  }

 
  
 


return(
  <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"  value={title} onChange={e => setTitle(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Published</Form.Label>
        <Form.Control type="date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3"  controlId="formBasicPassword">
        <Form.Label>Short Description</Form.Label>
        <Form.Control style={{ height: '10rem' }} type="text" value={shortDescription} onChange={e => setShortDescription(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3"  controlId="formBasicPassword">
        <Form.Label>Main content</Form.Label>
        <Form.Control style={{ height: '20rem' }} type="text"value={content} onChange={e => setContent(e.target.value)} />
      </Form.Group>




      
      
      <Button variant="primary" type="submit" >
     {actionText}
      </Button>
    </Form>
)
}


export default PostForm;

