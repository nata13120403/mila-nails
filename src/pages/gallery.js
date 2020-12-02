import React from 'react';
import RedNails from '../photo/IMG_0783.JPEG';
import FrenchNails from '../photo/IMG_1491.JPG';
import DarkRed from '../photo/IMG_1489.JPG';
import WhiteNails from '../photo/IMG_1497.JPG';
import Card from '../components/card';


const Gallery = () => {
   
    return (
    <div className="Gallery">
		<Card picture={RedNails} />
		<Card picture={FrenchNails}/>
		<Card picture={DarkRed}/>
		<Card picture={WhiteNails}/>
		
	</div>
	)};
        
export default Gallery;     