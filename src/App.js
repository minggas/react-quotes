import React from "react";
import axios from "axios";
import Buttons from "./components/Buttons";
import Text from "./components/Text";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: "",
      show: false
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    axios
      .get("https://api.quotable.io/random")
      .then(res => {
        if (res.status === 200) {
          return res.data;
        } else {
          throw new Error("Error " + res.status);
        }
      })
      .then(json => this.changeData(json))
      .catch(err => {
        console.log(`${err} whilst contacting the quote API.`);
      });
  }
  changeData = data => {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.add("show");
    this.setState({
      quote: data.content,
      author: data.author,
      show: true
    });
  };
  handleClick = e => {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.remove("show");
    this.fetchData();
  };
  render() {
    const twitterMsg = '"' + this.state.quote + '"\n ' + this.state.author;
    return (
      <div className="container" id="quote-box">
        <h2 className="title">Quote-O-Matic</h2>
        <Text
          quote={this.state.quote}
          author={this.state.author}
          className={"text"}
        />
        <Buttons msg={twitterMsg} onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
