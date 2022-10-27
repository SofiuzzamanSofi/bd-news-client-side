Site Name-
# bd-news-client

Live site link-----
https://bd-news-clint.firebaseapp.com/








==============================================================
#from server site github---
=============================================================
server site link--------------------------------------------
============================================================
https://github.com/SofiuzzamanSofi/bd-news-server
==============================================================
# bd-news-server

i think it,s time to add something on this readme(shown) made 15.10.22 file added 28.10.22

#This is server site

live site---
https://bd-news-server-one.vercel.app/




---------------------------------------------------------------------------------------------------------------
News-category API---(for-navbar)
https://bd-news-server-one.vercel.app/news-categories


All News API---
https://bd-news-server-one.vercel.app/news

or-
https://bd-news-server-one.vercel.app/category/08
---------------------------------------------------------------------------------------------------------------





---------------------------------------------------------------------------------------------------------------
News By Category Wise API---
https://bd-news-server-one.vercel.app/category/${id}

Example/or-
https://bd-news-server-one.vercel.app/category/03


News Details By API---
https://bd-news-server-one.vercel.app/news/${id}

https://bd-news-server-one.vercel.app/news/${_id}

Example/or-
https://bd-news-server-one.vercel.app/news/0282e0e58a5c404fbd15261f11c2ab6a
---------------------------------------------------------------------------------------------------------------


Example---
                path: '/news/:_id', element: <PrivetRoutes><News /></PrivetRoutes>,
                loader: ({ params }) => fetch(`https://bd-news-server-one.vercel.app/news/${params._id}`)
