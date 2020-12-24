import React, { Component } from 'react'

export default class FeedbackItem extends Component {
    render() {
        const { feedback } = this.props;
        return (
            <div className="feedback__item">
                <div className="card">
                    <img className="card-img-top" src={feedback.imgFeedback} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{feedback.name}</h4>
                        <p className="card-text">{feedback.major}</p>
                        <p className="card-text feedback__item__content">
                            {feedback.comment}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
