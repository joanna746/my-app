import { useSelector } from "react-redux/es/exports";
import { getAllCategories } from "../../redux/postsRedux";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Categories=()=>{
    const categories=useSelector(getAllCategories);
    console.log(categories)
    return(
        <div className="mar-x-post">
      <h2>All categories</h2>
        {categories.map(category => 
        <Nav.Link as={NavLink} to={"/categories/" + category}>
          <Card key={category} className="p-2 fs-5">{category}</Card>
        </Nav.Link>
        )}
    </div>
  );
    
}
export default Categories;