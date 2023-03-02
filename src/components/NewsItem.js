import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title, text, imgUrl, url } = this.props
    return (
      <div className='container'>
        <div className="card " style={{ width: "18rem" }}>
          <img src={!imgUrl ? "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{text}...</p>
            <a href={url} target="_blank" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem