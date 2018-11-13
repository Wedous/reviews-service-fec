import React, {Component} from 'react';

const seeMoreLess = {
    border:'1px solid transparent',
    color:'#007791', coursor:'pointer',
    whiteSpace:'nowrap',
    verticalAllign:'middle',
    marginBottom: '0',
    fontWeight:'400'
}

const hiddenSpan = {
    display: 'block',
    height: '45px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
 }

class TextBody extends Component {
    constructor(props) {
      super(props);
        this.state = {
        folded: true,
      };
    }
  
    handleClick(){
        this.setState({
            folded: !this.state.folded
        })
    }

    render(){
        if (this.state.folded){
            if (this.props.text.length > 200){
                return(
                    <div>
                        <div style={hiddenSpan}> {this.props.text} </div>
                        <button onClick={this.handleClick.bind(this)} style={seeMoreLess}>+ See more</button>
                    </div>
                )
            } else {
                return(
                    <div>
                        <div style={hiddenSpan}> {this.props.text} </div>
                    </div>
                )
            }
        } else {
            return(
                <div>
                    <div>{this.props.text}</div>
                    <button onClick={this.handleClick.bind(this)} style={seeMoreLess}>+ See less</button>
                </div>
            )
        }
    }
  }

  export default TextBody;




