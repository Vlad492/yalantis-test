import React from 'react'

const Card = (props) => {

    const setColor = (count) => {
        if (count < 3) return 'grey'
        else if (count < 7) return 'blue'
        else if (count < 11) return 'green'
        else return 'red'

    }

    let color = setColor(props.users.length)

    
return (
        <div className="month" style={{ backgroundColor: color }}>
            <div className="container">
                <h1>{props.month}</h1>
            </div>
            <div className="popUp" style={{ backgroundColor: color }}>
                <div className="popUpContent">
                    <h2>{props.month}</h2>
                    {props.users.map((elem, index) => <p key={index}>{elem.firstName} {elem.lastName}</p>)}
                </div>
            </div>
        </div>
    )
}


export default Card