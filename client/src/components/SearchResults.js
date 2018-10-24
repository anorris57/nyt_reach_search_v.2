import React, { Component } from 'react'
import axios from 'axios';

class SearchResults extends Component{
  render() {
    const { articles } = this.props;
    const articleList = articles.map( (article, index) => {
      return (
        
          <form key={index}>
          Headline:
          <input name='title' defaultValue= { article.headline.main }/>
          Date Published: <input name='date' defaultValue={ article.pub_date }/> 
          Url: <input name='url' defaultValue= { article.web_url }/>
          <input onClick={ () => this.postArticles(article.headline.main, article.pub_date, article.web_url )} type="submit" value="Save"/>
          <p></p>
          </form>
        
      )//return
    }//article fat arrow
    );//map
  return (
    
    <div className ="row">
          <div className ="col-md-2"></div>
          <div className="col-md-8">
              <h1>Search Results</h1>
      { articleList }
      </div>
      <div className ="col-md-2"></div>
    </div>
     );
  }//render

   postArticles = (title,date,url) =>{
     const articleData = {
       title: title,
       date: date,
       url: url
     }
     console.log(articleData);
     return axios.post('/api/articles', articleData);
   }
  }//component


export default SearchResults