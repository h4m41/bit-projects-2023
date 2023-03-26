import React from 'react'
import './ArticleCard'
const ArticleCard = ({imgUrl}) => {
  return (
    <article className="card google">
      <figure>
        <img src={imgUrl} alt="card pictur" />
      </figure>
     
    </article>
  )
}

export default ArticleCard