import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const News = () => {

    const newsDetails = useLoaderData();
    // console.log(newsDetails);

    const { category_id, _id, total_view, title, thumbnail_url, rating, image_url, details, author } = newsDetails;
    // console.log(_id);
    const { img, name, published_date } = author;
    const { badge, number } = rating;


    return (
        <Card>
            <Card.Title className='mt-3 m-1'>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>


                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}><Button variant="primary">More News In this Category.</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default News;