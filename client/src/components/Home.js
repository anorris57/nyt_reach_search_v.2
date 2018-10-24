import React, { Component } from 'react'
import axios from 'axios'
import SearchResults from './SearchResults'

class Home extends Component {
  
    state = {
      articles: [],
      title:"",
      begin: "",
      end: ""
    };

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }
   
    handleFormSubmit = (event) => {
      event.preventDefault();
      this.getArticles();
    }

    getArticles = (title, begin, end) => {
    
      return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params: {
        'api-key': "f0001b69ac3c4cf9accbe90943e5f752",
        'q': title,
        'begin_date': begin,
        'end_date': end,
        'sort': "newest",
        'fl': "web_url,headline,pub_date",
        'page': 0
        }
      }).then((res) => {this.setState({articles: res.data.response.docs.slice(0,5)});
      console.log("this.state.articles:", this.state.articles);
      });
    }
    render(){
    return(
        <div>
          <div className ="row">
          <div className ="col-md-2"></div>
          <div className="col-md-8">
              <h1>Search</h1>
            <form>
            <div className="form-group">
              <input type="text" className="form-control"
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Topic (required)"
              /></div>
              <div className="form-group">
              <input type="text" className="form-control"
                value={this.state.begin}
                onChange={this.handleInputChange}
                name="begin"
                placeholder="Begin Date: YYYYMMDD (required)"
              /></div>
              <div className="form-group">
              <input type="text" className="form-control"
                value={this.state.end}
                onChange={this.handleInputChange}
                name="end"
                placeholder="End Date: YYYYMMDD (required)"
              /></div>
              <button
                onClick={this.handleFormSubmit}
              >
                Search
              </button>
            </form>
            </div>
            <div className ="col-md-2"></div>
            </div>
            

            <div>
            <SearchResults articles={this.state.articles} />
            </div>
        </div>

    
);
}
}
    
    



export default Home;