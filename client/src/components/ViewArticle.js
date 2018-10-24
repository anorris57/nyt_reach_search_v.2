import React, { Component } from 'react'
import axios from 'axios';
class ViewArticle extends Component{
  state = {
    articles: []
  };
  componentDidMount(){
    this.loadArticles();
  }
  loadArticles = () =>{
    return axios.get("/api/articles")
    .then(res => this.setState({ articles: res.data }))
    .catch(err => console.log(err));
  }
  
  
  render() {
    return (
        <div className ="row">
        <div className ="col-md-2"></div>
          <div className="col-md-8">
          <h2>Previous Articles</h2>
          <ul>
            {this.state.articles.map(article => (
              <li key= {article._id}>
                
                <a href={"/articles/"+ article._id}>
                {article.title}
                </a><p></p>
                <button onClick={() => this.deleteArticle(article._id)}>Delete</button>
              </li>
            ))}
          </ul>
      </div>
      <div className ="col-md-2"></div>

        </div>
    );//return
  }//render
  deleteArticle =(id)=> {
    console.log(id);
    return axios.delete('/api/articles/'+ id)
    .then( res => {
      console.log(res);
      console.log(res.data);
      this.loadArticles();

    })
  }
  
}//component

export default ViewArticle