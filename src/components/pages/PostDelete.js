import  Button  from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { removePost } from "../../redux/postsRedux";

const PostDelete = ({handleClose, id})=>{
    const myDispatch = useDispatch();

  const handleDelete = () => {
    myDispatch(removePost(id));
    handleClose();

  }
    return(
        <div>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
          </div>
    )
}
export default PostDelete;
