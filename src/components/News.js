import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  async componentDidMount() {
    let api = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3fe524989e4c40548f8297efa466eb72"
    let data = await fetch(api)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })

  }


  render() {
    return (
      <div>
        <div className="container">
          <h1>Top HeadLines</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element ? element.title : ""} text={element ? element.description : ""} imgUrl={element.urlToImage} url={element.url} />
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default News