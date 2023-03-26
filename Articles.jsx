import ArticleCard from '../cards/ArticleCard'
import { data } from '../data'
import React from 'react'
import "./Articles.styles.css"

const Articles = () => {
   
  
      const Articles = data.map((item) => {
        return <ArticleCard {...item} key={item.id} />;
      });
  
    // const HemnArticles = tllpa.map((item) => {
    //   return (
    //     <Link to={"/addarticle/" + item.id}>
    //       <ArticleCard {...item} key={item.id} />;
    //     </Link>
    //   );
    // });
    return <div className="cards">{Articles}</div>;
  };
  
  export default Articles;