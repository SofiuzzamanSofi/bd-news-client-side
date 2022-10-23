import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCart from '../../Shared/NewsSummeryCard/NewsSummeryCart';

const Category = () => {

    const categoryNews = useLoaderData();


    return (
        <div>
            <h6>This is Category </h6>
            <h2>This is Category length: {categoryNews.length} </h2>
            <div>
                {categoryNews.map(news => <NewsSummeryCart key={news._id} news={news} />)}
            </div>
        </div>
    );
};

export default Category;