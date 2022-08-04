import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";


import "react-datepicker/dist/react-datepicker.css";




const PostForm = ({ action, actionText, ...props }) => {



  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author) || '';
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  
  const [contentError, setContentError] = useState(false);



  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    setContentError(!content)
    
    if (content ) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register("title", { required: true, minLength: 3 })}
          type="text" value={title} onChange={e => setTitle(e.target.value)} />
        {errors.title && <small className="d-block form-text text-danger mt-2">Minimum 3 characters required!</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register("author", { required: true, minLength: 3 })}
          type="text" value={author} onChange={e => setAuthor(e.target.value)} />
        {errors.author && <small className="d-block form-text text-danger mt-2">Minimum 3 characters required! </small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Published</Form.Label>
        <Form.Control type="date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          {...register("shortDescription", { required: true, minLength: 20 })}
          as="textarea" aria-label="With textarea" type="text" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
        {errors.shortDescription && <small className="d-block form-text text-danger mb-3">Minimum 20 characters required!</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Main content</Form.Label>

        <ReactQuill theme="snow" value={content} onChange={setContent} />
        {contentError && <small className="d-block form-text text-danger mt-2 mb-3">Content can't be empty</small>}

      </Form.Group>






      <Button variant="primary" type="submit" >
        {actionText}
      </Button>
    </Form>
  )
}


export default PostForm;