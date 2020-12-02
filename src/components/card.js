import React, { useState } from 'react';



const Card = (props) => {
	// This styles are just our regular styles
	// that we store in variables and pass into our html later.
	// They can be moved to css stylesheet.
	// They are here just to have everything together.
	/*const cardContainerStyle = {
		'display': 'inline-block',
		'border': '1px solid black',
		'height': '500px',
		'width': '300px'
	};*/

	/*const cardStyle = {
		'height': '400px',
		'width': '250px',
		'border': '1px solid red',
		'margin': '0px auto'
	};*/

	// Placing our axis as state variables.
	// So when we change them component re-renders.
	const [axis, setAxis] = useState({x: 0, y: 0});
	// Placing transition as state variable as well.
	const [transition, setTransition] = useState(false); 

	// Here, function executes when mouseMove event is happening.
	// Function calculates xAxis, yAxis and sets them in state, triggering component re-render.
	const mouseMoveHandle = (e) => {
		let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //or /50
    	let yAxis = (window.innerHeight / 2 - e.pageY) / 20; //or /50
    	console.log(xAxis + ' ' + yAxis);

    	setAxis({
    		x: xAxis,
    		y: yAxis
    	});
	
	}

	// Here, because our transition is different when mouse enter and mouse leave,
	// we change it in state and then based on that animating component.
	const mouseEnterHandle = (e) => {
		setTransition(false);
	}

	const mouseLeaveHandle = (e) => {
    	setAxis({
    		x: 0,
    		y: 0
    	});

    	setTransition(true);
	}

	// Destructuring state variables to use them in following html elements.
	const { x, y } = axis;
	const { picture } = props;
	return (
		// Here we asign each handler function to each related event.
		/* When 
			1. event happens,
			2. function is executed
			3. state is changed
			4. component is re-rendered
			5. inline style animation is happening, based on changed state variables x and y and transition.
		*/
	
		<div className="container" /*style={cardContainerStyle}*/ onMouseEnter={mouseEnterHandle} onMouseMove={mouseMoveHandle} onMouseLeave={mouseLeaveHandle}>
			<div className="card" style={{/*...cardStyle,*/ 'transform': `rotateX(${x}deg) rotateY(${y}deg)`, 'transition': transition ? 'all 0.5s ease' : 'none'} } >
				<div className="photo">
				<img src={picture} alt='IMG'/>
				</div>
			</div>
		
	</div>	
	);
}

export default Card;