import React from 'react';
import Stars from './Stars';
import TextBody from './Body';
import Controls from './Controls';
import moment from 'moment';

  const oneReviewRrapper = {
    borderBottom: '1px solid grey',
    borderTop: '1px solid grey',
    paddingTop: '20px',
    paddingBottom: '20px',
    maxWidth:'100%',
    height: 'auto',
    flexWrap:'wrap',
  }

  const avatar = {
    borderRadius:'50%',
    maxHeight: '100%',
    maxWidth: '100%'
  }

  const leftColumn = {
    display: 'inline-block',
    width: '300px',
    height:'100px',
    fontSize: '15px',
  }
  const emptySpace = {
    display: 'inline-block',
    width: '300px',
    height:'100px',
  }

  const rightColumn = {
    display: 'inline-block',
    maxWidth: '70%',
    paddingLeft: '1%',
    height: 'auto', 
    lineHeight:'1.43',
    fontSize: '15px',
    verticalAllign:'top',
  }

  const avatarContainer = {
    overflow: 'auto',
    display: 'block',
    width: '29%',
    maxHeight: '100%',
    maxWidth: '100%',
    float: 'left'
  }

  const authorTimeContainer = {
    display: 'block',
    width: '59%',
    paddingLeft: '1%',
    maxHeight: '100%',
    maxWidth: '100%',
    float: 'left',
    verticalAlign: 'middle', 
    lineHeight: '40px',
  }

  const raitings = {
    paddingTop: '20px',
    paddingBottom: '20px',
  }

  const author = {
    display:'block' , 
    paddingLeft: '20px',
    fontWeight: 'bold',

  }

  const time = {
    display:'block',
    paddingLeft: '20px',
  }

  const Review = ({review}) => (
  <div className="one-review-wrapper" style={oneReviewRrapper}>
    <div className="left-column" style={leftColumn}>
      <div className="avatar-container" style={avatarContainer}>
        <img className="avatar" src={review.authorImgUrl} style={avatar}></img>
      </div>
      <div className="author-time-container" style={authorTimeContainer}>
      <span className="time" style={time}>{ moment(review.created).fromNow()}</span>
      <span className="author" style={author}>{review.author}</span>
      </div>
      <div className="emptySpace" style={emptySpace}></div>
    </div>
    <div className="rigth-column" style={rightColumn}>
      <div className="stars-container" style={raitings}><Stars stars={review.stars}/></div>
      <div className="text-container" ><TextBody text={review.body}/></div>
      <div className="controls-container"><Controls /></div>
    </div>
  </div>
  );

export default Review;


