import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCart from '../Shared/NewsSummeryCard/NewsSummeryCart';

const Home = () => {

    const allNews = useLoaderData();
    // console.log(allNews);

    return (
        <div>
            <h1>this is home.js</h1>
            <h1>this is home.js length : {allNews.length}</h1>
            <div>
                {allNews.map(news => <NewsSummeryCart key={news._id} news={news} />)}
            </div>
        </div>
    );
};

export default Home;