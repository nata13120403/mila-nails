import React from 'react';
import Left from '../photo/IMG_1494.JPG';
import Right from '../photo/IMG_1498.JPG';




const Home = () => {
    
    return (
    <div>
        <section class="home">
            <div id="home_page">
                 <p>
                    <img src={Left} alt=" " width="400" height="450" />
                </p>
                 <p>
                     We are so EXCITED to be offering you ONLINE BOOKING!
                </p>
                <p>
                    <button >
                        <a href="book.html"> BOOK NOW</a>
                    </button>
                </p>
            </div>
            
            <div id="newsletter">
                <p>
                    <img src={Right} alt=" " width="200" height="250" />
                </p>
                <p>
                    Stay in the loop on all things Mila's Nail!<br />
                    Be the first to hear about upcoming promotions, <br />
                    sales and much more!
                    Get the Mila's Nail Newsletter 
                </p>
                <p>
                    Sign up for our Newsletter!
                </p>
                <p>
                    * Indicates required field
                </p>
                <p>
                    <form action="submit.html" method="get" target="-self">
                        <label >First name*</label><br /> 
                        <input type="text" id="fname" name="fname" required /><br />
                        <label>Last name*</label><br />
                        <input type="text" id="lname" name="lname" required /><br />
                        <label> Email*</label><br />
                        <input type="email" id="email" name='email' required /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </p>
            </div>
        </section>
</div>
);
}

export default Home;