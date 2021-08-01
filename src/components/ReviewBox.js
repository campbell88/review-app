import React, { useState, useEffect  } from 'react'
import './ReviewBox.css'
import ReviewData from '../data/review.json'
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom'

function formatDate(date){
    return date.substr(4, 11);
}

function ReviewBox() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='review-box'>
        <ul>
        {ReviewData.map((review) => {
            return <li key={review.id}> 
                <div className="store-name">{review.place}</div>
                <div>  <Rating defaultValue={review.rating} readOnly /></div>
                <div className="author">{review.author} {formatDate(review.published_at)}</div>
            </li>
        })}
        </ul>
        </div>
    )

}

export default ReviewBox