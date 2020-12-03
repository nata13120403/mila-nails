import React from 'react';

import {Link} from 'react-router-dom';

//import AdminPostsPage from './pages/AdminPostsPage';
//import ArchivePage from './ArchivePage'
//import LoginPage from './pages/LoginPage';
//import AdminPage from './pages/AdminPage';
//import SinglePostPage from './SinglePostPage';

import ProductA from '../../photo/IMG_1481.JPG';
import ProductB from '../../photo/IMG_1482.JPG';
import ProductC from '../../photo/IMG_1483.JPG';
import ProductD from '../../photo/IMG_1484.JPG';



        let products = [ProductA,
                        ProductB,
                        ProductC,
                        ProductD];

        console.log(products);
  
        const Product = (props) => {
            console.log(props.posts);
         
                 const postItems = props.posts.map((post, index) =>{
                return(
                    <li key={index} className='product'>
                        <div>
                            <img src={ProductA} alt="" height='150' width='150'  />
                        </div>
                       <p > 
                       <Link className="postLink" to={"/posts/" + post.id}>{post.title}</Link>
                       </p>
                       <p>{post.body}</p>
                    </li>
                 )
                
            })
            return(
                <div className='product-page'>
                {postItems}
                </div>
            );
        }

export default Product;       