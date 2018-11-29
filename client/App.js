import React, {Component} from 'react';
import Reviews from './components/Reviews.js';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      courseId: 2,
      reviews: [],
      allReviews: [],
      showNumber: 5,
      search: '',
    }
  }
  
  handdleChange(e){
    e.preventDefault()
    this.setState({
      search: e.target.value
    })
    var courseId = this.state.courseId;
    var search = this.state.search;
    var pathArray = window.location.pathname.split('/:')
    var focalCourse = Number(pathArray[1]) || 1
    console.log('x', focalCourse)

    axios
      .get(`search/:${focalCourse}`,{
        params:{search: search, courseId: courseId},
        })
      .then(res => {
        console.log('x', focalCourse)
        this.setState({
          allReviews: res.data,
        })
        let holder = []
        for (let i=0; i <this.state.showNumber && i<this.state.allReviews.length; i++){
          holder.push(this.state.allReviews[i])

        }
        this.setState({
          reviews: holder,
        })
      })
      .catch(err => console.log('Error occured while trying to get the reviews for this course:' , err))
    
  }

  componentDidMount(){ 
    var focalCourse = Number(window.location.pathname.replace(/\//, ''))
    var courseId = this.state.courseId;
    var showNumber = this.state.showNumber;
    axios
    .get(`localhost:8000/reviews/:${focalCourse}`,{
      params:{courseId: courseId, showNumber: showNumber },
      })
    .then(res => {
      this.setState({
        allReviews: res.data,
      })
      let holder = []
      for (let i=0; i <this.state.showNumber && i<this.state.allReviews.length; i++){
        holder.push(this.state.allReviews[i])
      }
      this.setState({
        reviews: holder,
      })
    })
    .catch(err => console.log('Error occured while trying to get the reviews for this course:' , err))
  }

  handleShowmoreReviewsClick(){
    let newNumber = this.state.showNumber + 5;  
    this.setState({
      showNumber: newNumber,
    })
    this.componentDidMount()
  }

  render() {
      return (
          <div className="hm">
            <div className="topContainer" style={topContainer}>
              <div className="reviewsDescription" style={reviewDescr}>Reviews</div>
              <form style={searchForm}><input style={searchInput} onChange={this.handdleChange.bind(this)} type="text" placeholder="Search reviews"></input><button type="submit" style={searchBtn} disabled>🔍</button></form>
            </div>
            <Reviews reviews={this.state.reviews} />
            <div className="seeMoreReviewsBtnHolder" style={seeMoreReviewsBtnHolder}>
              <button style={seeMoreReviews} onClick={this.handleShowmoreReviewsClick.bind(this)}>See more reviews</button>
            </div>
          </div>
      );

  }
}

const seeMoreReviews = {
  border:'1px solid #007791',
  color:'#007791', coursor:'pointer',
  whiteSpace:'nowrap',
  verticalAllign:'middle',
  fontWeight:'600',
  fontSize: '15px',
}

const seeMoreReviewsBtnHolder = {
  paddingTop: '20px',
  paddingBottom: '20px',
  borderTop: '1px solid grey',
  maxWidth:'100%',
  textAllign: 'center',
  marginLeft: '50%',
  marginRight: '50%',  
}

const topContainer = {
  borderBottom: '1px solid grey',
  maxWidth:'100%',
}

const reviewDescr = {
  fontSize:'18px',
  fontWeight:'600',
  paddingBottom: '20px',
  paddingTop: '20px',
  display:'inline-block',
  width:'49%',
}

const searchForm = {
  paddingTop:'10px',
  float:'right',
  display: "inline-block",
  lineHeight: '25px', 
  verticalAlign:'top'
}

const searchBtn = {
  height: '30px',
  width:'30px',
  border: '2px solid #007791',
  backgroundColor: '#007791',
  display:'inline-block',
  verticalAlign:'top',
  textAlign: 'center',
}

const searchInput = {
  display:'inline-block',
  height: '30px', 
  border: '1px solid #007791',
  verticalAlign:'top'
}


export default App;