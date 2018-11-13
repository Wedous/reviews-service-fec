import React, { Component } from 'react'

const noBtnClicked ={
    color: 'red',
    width:'60px',
    fontSize: '13px',
    border:'solid red 1px',
    borderRadius: '1px',
    display: 'inline-block',
    padding:'7px'
}

const noBtn ={
    width:'60px',
    color: 'grey',
    fontSize: '13px',
    border:'solid grey 1px',
    borderRadius: '1px',
    display: 'inline-block',
    padding:'7px'
}

class NoBtn extends Component {
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
            return <button style={noBtnClicked} onClick={this.handleClick.bind(this)}><span>✕</span> No </button>
        }
        return <button  style={noBtn}onClick={this.handleClick.bind(this)}>No</button> 
    }
}

export default NoBtn;
