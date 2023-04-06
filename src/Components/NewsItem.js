import React from 'react'
import '../assets/newsItem.css'
export default function NewsItem({ title, url, urlToImage }) {
  return (
  <>
  <div className="col-lg-3 col-md-4 col-sm-6 news-item">
  <div className="card" style={{width: "18rem" ,border:"none"}}>
  <img src={urlToImage} className="card-img-top" style={{aspectRatio:"3/2"}} alt="No image available"/>
  <div className="card-body" style={{backgroundColor:"#FEFBE9"}}>
  <h5 className="card-title" style={{fontSize:"17px"}}>{title}</h5>
  <a href={url} className="btn btn-primary">Read More...</a>
</div>
</div>
  </div>
  </>
    
  )
}
