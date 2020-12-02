import React, {useState, useEffect} from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Gallery from './pages/gallery';
import Home from './pages/index';
import Product from './pages/product/product';
import AboutUs from './pages/about_us';
import Services from './pages/services';
import SalonEtiquett from './pages/salon_etiquette';
import SinglePostPage from './pages/product/SinglePostPage';



function App() {

 
    let fakePosts = [
        {title: 1, body: 2},
        {title: 1, body: 2},
      ] 
  
      let [posts, setPosts] = useState([]);
  
      useEffect(() => {
        const fakeApiUrl = 'https://jsonplaceholder.typicode.com/posts';
        
        fetch(fakeApiUrl)
        .then((res) => res.json())
        .then((data) => {
           
          setPosts(data);
        });
      }, []);
        console.log(fakePosts);
        console.log(posts);
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/gallery" component={Gallery}/>
      <Route path="/services" component={Services} />
      <Route path="/product" component={Product}>
        <Product posts={posts} /> 
      </Route>
      <Route path="/products:id"></Route>
      <Route path="/posts/:id">
        <SinglePostPage />
        </Route>

      <Route path="/about_us" component={AboutUs} />
      <Route path="/salon_etiquette" component={SalonEtiquett}/>
      </Switch>
    </BrowserRouter>
    <Footer />
    
    </div>
  );
}

export default App;
