import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductA from "../../photo/IMG_1481.JPG"

const SinglePostPage = () => {

	const [post, setPost] = useState({id: '', title: '', body: ''});

	let { id } = useParams();

	useEffect(() => {
      const fakeApiUrl = 'https://jsonplaceholder.typicode.com/posts/' + id;
      
      fetch(fakeApiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        
        
        const { id: postId, title, body } = data;
        setPost({id: postId, title: title, body: body});
        console.log('Fetched post', post);
      });

    }, []);
    //{JSON.stringify(post)}

	return (
		<main className="single-post-page">
		
			<div >
				<img src={ProductA} alt="" height="300" width="300" />
			</div>
			<div>
				<h1>{post.title}</h1>
				<p>
					{post.body}
				</p>
			</div>
		</main>
	);
}

export default SinglePostPage;