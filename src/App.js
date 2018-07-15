import React from 'react';
import axios from 'axios';
import Buttons from './components/Buttons';
import Text from './components/Text';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.changeData = this.changeData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    axios.get(`https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=${new Date().getTime()}`)
      .then(res => {
        if (res.status === 200) {
          return res.data[0];
        } else {
          throw new Error("Error " + res.status);
        }
      })
      .then(json => this.changeData(json))
      .catch(err => {
        console.log(`${err} whilst contacting the quote API.`)
      });
  }
  changeData(data) {
    this.setState({
      quote: data.content,
      author: data.title
    });
  }
  handleClick() {
    this.fetchData();
  }
  render() {
    const quote = { __html: this.state.quote };
    return (
      <div className="container" id="quote-box">
        <h1 className="title">Quote-O-Matic</h1>
        <Text quote={quote} author={this.state.author} />
        <Buttons quote={this.state.quote} author={this.state.author} onClick={this.handleClick} />
      </div>
    );
  }
}




export default App;
