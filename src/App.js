import React from 'react';
import Button from './components/button';
import { random } from 'lodash';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data => data.json())
    .then(quotes => this.setState({quotes}, this.assignNewQuoteIndex)
    );
  }
 
  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex()})
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1)
}

  render() {
   
  return (
    
    <div className="App" id="quote-box">
       { this.selectedQuote ? (
      <div className="qm">
       <span id="text">"{this.selectedQuote.quote}"</span>- <span id="author">{this.selectedQuote.author} </span> 
      {/* <Button buttondisplayname="Next Quote" clickHandler= {this.assignNewQuoteIndex} /> */}
      <div className="btn">
        <div>
      <button id="new-quote" className="btn btn-primary" onClick={this.assignNewQuoteIndex}>"Next Quote"</button>
     </div>
     <div>
      <a target='_blank'
       href={`https://twitter.com/intent/tweet?text=${this.selectedQuote.quote}&hashtags=IshumitaMohan`}
         id="tweet-quote">
      <button className="btn btn-primary icon-btn"><FontAwesomeIcon icon={ faTwitter } size="md"> </FontAwesomeIcon></button>
      </a>
      </div>
      </div>
       </div> ) : null }
    </div>
  );
  }
}

export default App;
