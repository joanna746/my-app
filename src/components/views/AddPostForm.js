import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../redux/postsRedux";

import PostForm from "../features/PostForm";




const AddPostForm = () => {
    const myDispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = post => {
      myDispatch(addPost(post));
      navigate('/');
      console.log(handleSubmit)
    };
  
    return (
        <div>
     <PostForm action ={handleSubmit} actionText="Add post"/>
     </div>
    );
  };
  
  
  export default AddPostForm;