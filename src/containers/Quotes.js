import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { upvoteQuote, downvoteQuote, removeQuote } from "../actions/quotes";

class Quotes extends Component {
  renderQuotes = () => {
    return this.props.quotes.map((quote, idx) => (
      <QuoteCard
        key={idx}
        quote={quote}
        downvoteQuote={this.props.downvoteQuote}
        upvoteQuote={this.props.upvoteQuote}
        removeQuote={this.props.removeQuote}
      />
    ));
  };
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">{this.renderQuotes()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  };
};

const actionCreators = {
  removeQuote,
  upvoteQuote,
  downvoteQuote
};
export default connect(mapStateToProps, actionCreators)(Quotes);
