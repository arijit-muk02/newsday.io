import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
import '../assets/newslist.css'
export default function Newslist() {
    const [news, setNews] = useState([])
    const[cat,setCat]=useState("general")
    const [search,setSearch]=useState("")
    useEffect(() => {
        function getArticles() 
        {
            fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&q=${search}&apiKey=1e88e661a5594e6193bfca068250da86`).then((res)=>res.json()).then((data)=>{setNews(data.articles)})
        }
        getArticles()          
    },[cat,search])
   
    function handleForm(event){
      setSearch(event.target.value);
    }
        
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="#"><img className='brand' src="images/brand.png" alt="..." /><img className='brand_phone' src="images/brand_name.png" alt="..." /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
         <li className="nav-item">
          <a className="nav-link" aria-current="page"  onClick={() => setCat("health")}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => setCat("sports")}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => setCat("technology")}>Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " onClick={() => setCat("entertainment")}>Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " onClick={() => setCat("science")}>Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " onClick={() => setCat("business")}>Business</a>
        </li>
      </ul>
    </div>
    <form class="d-flex">
        <input class="form-control me-2" type="search" onChange={handleForm} placeholder="Search" value={search}aria-label="Search" />      </form>
  </div>
</nav>
<div className="headlines">
  
  <h3 className='slide-right'>Today's Headlines</h3>
  
 </div>

<div className="container">

<div className='row'>
            {news.map(article => {
                return(
                      <NewsItem 
                        title={article.title}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                  )
            })}
        </div>

</div>
   </>
        
        
    )
}
