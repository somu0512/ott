import React, { useEffect, useState } from 'react'

function News() {
    let[news,setNews]=useState(null);
    useEffect(()=>{
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=cd24366638d54f33b1b8e83909f53b71")
   .then((res)=>{return res.json()})
   .then((data)=>{console.log(data.articles)
      setNews(data.articles);
      console.log(news);
})
    },[])
  return (
    <div id="maindiv">
     
      {news!=null && news.map((v)=>{return (
        
        <div id="returndiv">
            <img src={v.urlToImage
} alt="" height="200px" width="200px" />
   <h5>title:{v.title}</h5>
       <h6>description :{v.content}</h6>
       <h6> Date : {v.publishedAt}</h6>
       <button> <a href={v.url}>read more</a></button>
     

        
        </div>
      )})}

    </div>
  )
}

export default News
