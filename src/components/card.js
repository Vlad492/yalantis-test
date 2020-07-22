import React from 'react'

const Card = (props) => {
    let color = ''
    if (props.count < 2) color = 'grey'
    else if(props.count < 6) color = 'blue' 
    else if(props.count < 10) color = 'green'
    else color = 'red'



    
    return (
        <div className="month" style={{backgroundColor: color}}>
            <div className="container">
                <h1>{props.month}</h1>
            </div>
            <div className="popUp" style={{backgroundColor: color}}>
                <div className="popUpContent">
                    <h2>{props.month}</h2>
                    {props.users.map((elem, index) => <p key = {index}>{elem.firstName} {elem.lastName}</p>)}
                </div>
            </div>
        </div>
    )
}


export default Card