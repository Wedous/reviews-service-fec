import React, { Component } from 'react'

const yesBtnClicked ={
    color: 'green',
    width:'60px',
    fontSize: '13px',
    border:'solid green 1px',
    borderRadius: '1px',
    display: 'inline-block',
    padding:'7px'
}

const yesBtn ={
    width:'60px',
    color: 'grey',
    fontSize: '13px',
    border:'solid grey 1px',
    borderRadius: '1px',
    display: 'inline-block',
    padding:'7px'
}

class YesBtn extends Component {
    constructor(){
        super();
        this.state = {
            active: false
        }
    }

    handleClick(e){
        e.preventDefault()
        this.setState({ 
            active: !this.state.active
        })
    }

    render() {
        if (this.state.active){
            return <button style={yesBtnClicked} onClick={this.handleClick.bind(this)}><span>✓</span> Yes </button>
        }
        return <button  style={yesBtn}onClick={this.handleClick.bind(this)}>Yes</button> 
    }
}

export default YesBtn;
