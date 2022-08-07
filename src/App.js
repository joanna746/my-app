import {Routes, Route} from 'react-router-dom'
import PostSolo from './components/pages/PostSolo';
import Home from './components/pages/Home';
import PostAdd from './components/pages/PostAdd';
import PostEdit from './components/pages/PostEdit';
import PostDelete from './components/pages/PostDelete';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Footer from './components/views/Footer';
import {Container} from 'react-bootstrap'
import Header from './components/views/Header';
import Categories from './components/pages/Categories';
import Category from './components/pages/Category';


function App() {
  return (
    
    <Container>
    <Header/>
    
    <Routes>
    
          <Route path="/" element={<Home/>} />
          <Route path="/post/:postId" element={<PostSolo/>} />
          <Route path="/post/add" element={<PostAdd/>} />
          <Route path="/post/edit/:postId" element={<PostEdit/>} />
          <Route path="/post/delete/:postId" element={<PostDelete/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/categories" element={< Categories />} />
          <Route path="/categories/:category"element={<Category/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
       
        <Footer/>
        </Container>
    );  
}

export default App;
