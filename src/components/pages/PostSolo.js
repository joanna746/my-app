import {useParams} from 'react-router'
import { getPostById } from '../../redux/postsRedux';
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom'




const PostSolo =()=>{
    const {postId}=useParams();
    console.log(postId)
    const postData = useSelector(state => getPostById(state,postId));
    console.log(postData)
    if(!postData) return <Navigate to="/" />
return(
    <h1>{postData.title}</h1>
   
)
}
export default PostSolo;