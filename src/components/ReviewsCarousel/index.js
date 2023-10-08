import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {currentIndex: 0}

  currentReview = reviewsList => {
    const {currentIndex} = this.state
    const currentItem = reviewsList[currentIndex]

    return currentItem
  }

  onLeftArrow = () => {
    const {currentIndex} = this.state
    if (currentIndex <= 0) {
      this.setState({currentIndex: 0})
    } else {
      this.setState({currentIndex: currentIndex - 1})
    }
  }

  onRightArrow = () => {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    if (currentIndex >= reviewsList.length - 1) {
      this.setState({currentIndex: reviewsList.length - 1})
    } else {
      this.setState({currentIndex: currentIndex + 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const currentItem = this.currentReview(reviewsList)

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            data-testid="leftArrow"
            onClick={this.onLeftArrow}
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>

          <ul className="list-container">
            <li className="list-item">
              <img src={currentItem.imgUrl} alt={currentItem.username} />
              <p className="username">{currentItem.username}</p>
              <p className="company-name">{currentItem.companyName}</p>
              <p className="description">{currentItem.description}</p>
            </li>
          </ul>
          <button
            type="button"
            data-testid="rightArrow"
            onClick={this.onRightArrow}
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
