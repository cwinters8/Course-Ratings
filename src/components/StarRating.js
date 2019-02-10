import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  }

  // Write a function that returns 5 Star components
  genStars = () => {
    const stars = [];
    for (let i=0; i < 5; i++) {
      stars.push(<Star />);
    }
    return stars;
  }

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props


  render() {
    // create an array of stars

    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        {this.genStars()}
      </ul>
    );
  }
}

export default StarRating;