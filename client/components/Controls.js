import React from 'react'
import YesBtn from './YesBtn'
import NoBtn from './NoBtn'


const controlsText ={
    color: '#686f7a',
    fontSize: '13px',
}

const controlsBtn ={
    color: '#686f7a',
    fontSize: '13px',
    border:'solid grey 1px',
    borderRadius: '1px',
    display: 'inline-block',
    padding:'7px'

}

const controlsBtn2 ={
    color: '#686f7a',
    fontSize: '13px',
    border:'none'
}



const Controls = () => {
    return(
        <div style={{paddingTop:'20px', paddingBottom:'20px',}}>
            <span style={controlsText}>Was this review helpful?    </span>
            <YesBtn style={controlsBtn}/>
            <span>      </span>
            <NoBtn style={controlsBtn}/>
            <span>                 </span>
            <button style={controlsBtn2}>Report</button>
        </div>
    )
}

export default Controls