import React from 'react'
import './Articles.css'
import data from '../../data/articles.json';
import ReadMore from '../ReadMore/ReadMore';

const Articles = () => {

    const acrticles = data.map((item) => {
        return (
            <div className='article_container' key={item.id}>
                <div className='article-title'><p>{item.title}</p></div>
                <div className='article-annotation'>{item.annotation}</div>
                <ReadMore text={item.text}/>
            </div>
        )
    });

    return (
        <div className='articles_block'>
            {acrticles}
        </div>
    )
}

export default Articles