import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  }

  // returns 5 Star components
  genStars = () => {
    const stars = [];
    for (let i=0; i < 5; i++) {
      stars.push(<Star score={i + 1} updateRating={this.updateRating} />);
    }
    return stars;
  }

  // updates the rating state.
  updateRating = score => {
    this.setState( () => {
      return {
        rating: score
      };
    });
  }

  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        {this.genStars()}
      </ul>
    );
  }
}

export default StarRating;