import React from 'react';
import '../../style.css'

const  Button = (props) => {
    return <button className='buttonStyle'>{props.label}</button>
}
export default Button;