import React from 'react'

const Button = ({buttondisplayname, clickHandler}) => {
return <button onClick = {clickHandler}>{buttondisplayname}</button>
}

export default Button