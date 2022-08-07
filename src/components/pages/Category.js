import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { getPostsByCategory } from "../../redux/postsRedux";
import Post from "./Post";



const Category = () => {
    const { category } = useParams();
    console.log(category)
    const postWithCategory = useSelector(state => getPostsByCategory(state, category));
    console.log(postWithCategory)
    return (
<div>
    <h1>{category}</h1>
    <section className="px-0">
        {postWithCategory.map(post=>
         <Post key={post.id}
         title={post.title}
         shortDescription={post.shortDescription}
              content={post.mainContent}
              publishedDate={post.publishedDate}
              author={post.author}
              category={post.category}></Post>
         )}
    </section>
</div>
    )
}
export default Category;