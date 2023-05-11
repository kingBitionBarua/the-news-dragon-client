import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque libero facilis quam reiciendis porro fugit. Magni culpa ab esse perferendis, ea autem pariatur laudantium porro! Nobis, accusamus non. Soluta, architecto?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;