import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from 'react-icons/fa';



const NewsSummeryCart = ({ news }) => {
    const { _id, total_view, title, thumbnail_url, rating, image_url, details, author } = news;
    // console.log(_id);
    const { img, name, published_date } = author;
    const { badge, number } = rating;




    return (
        <Card className="my-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <div>
                        <Image roundedCircle src={img} style={{ height: '60px', border: '1px solid red', marginRight: '20px' }} />
                    </div>
                    <div>
                        <p className='mb-0 mt-1'>{name ? name : "No Name Found"}</p>
                        <p className='mb-0'>{published_date ? published_date : "No date found"}</p>
                    </div>
                </div>
                <div>
                    < FaRegBookmark className='me-2' />
                    < FaShareAlt />
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?

                            <>details?.slice(0, 250) + ('.... ') + <Link to={`/news/${_id}`} > Read More</Link></>
                            :
                            details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div className='d-flex align-items-center gap-2'>
                    <FaStar className='text-warning' /> <p>{number ? number : "---"}</p>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    {total_view ? <> <FaRegEye /> {total_view}</> : ""}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummeryCart;