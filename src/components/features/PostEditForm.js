import React from "react";
import PostForm from "./PostForm";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router'
import { getPostById } from "../../redux/postsRedux";



const PostEditForm = () => {
    const { postId } = useParams();
    console.log(postId)
    const postData = useSelector(state => getPostById(state, postId));
    console.log(postData)
  
  const myDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = post => {
    myDispatch(editPost({...post, id: postId}));
    navigate('/');
  };
  
  return (
    
    <PostForm  
      action={handleSubmit} 
      actionText="Update" 
      postId={postId}
      title={postData.title}
      author={postData.author}
      publishedDate={postData.publishedDate}
      shortDescription={postData.shortDescription}
      content={postData.content}>
    </PostForm>
   
  );
 
};


export default PostEditForm; 