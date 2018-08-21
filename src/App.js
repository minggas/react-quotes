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
      .get(
        `https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=${new Date().getTime()}`
      )
      .then(res => {
        if (res.status === 200) {
          return res.data[0];
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
    this.setState({
      quote: stripHtml(data.content),
      author: data.title,
      show: true
    });
  };
  handleClick = e => {
    this.setState({ show: false });
    this.fetchData();
    e.currentTarget.blur();
  };
  render() {
    const twitterMsg = '"' + this.state.quote + '"\n ' + this.state.author;
    return (
      <div className="container" id="quote-box">
        <h2 className="title">Quote-O-Matic</h2>
        <Text
          quote={this.state.quote}
          author={this.state.author}
          className={["text", this.state.show && "show"].join(" ")}
        />
        <Buttons msg={twitterMsg} onClick={this.handleClick} />
      </div>
    );
  }
}

function stripHtml(html) {
  // Create a new div element
  if (html) {
    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)

    return (
      temporalDivElement.querySelector("p").textContent ||
      temporalDivElement.querySelector("p").innerText ||
      ""
    );
  }
}

export default App;
