import React from 'react';
import Instagram from '../photo/instagram.jpg';

const AboutUs = () => {
    return (
    <div>
        <section class="about">
         <div>
             <h1>Contact Us:</h1>
                <ul>
                    <li>155 Reimer Ave W</li>
                    <li>Steinbach, MB, R5G 2J7</li>
                    <li>milasnail@gmail.com"</li>
                </ul>
        </div>
        <div> 
            <h1>Hours:</h1>
                <ul>
                    <li>Monday </li>
                    <li>Tuesdey</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                 </ul> 
        </div>
        </section>
        <div class="Instagram">
            <p id="Instagram"> We Would Love to Have You Visit Soon!</p>
            <p><a href="https://www.instagram.com/mila_nail/?hl=ru">
            <img class="Instagram_logo" src={Instagram} alt = 'Instagram' width="50" height="50"/> 
            </a> 
            </p> 
        </div>
</div>);
}

export default AboutUs;