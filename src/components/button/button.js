import React from 'react';
import styles from '../../styles/button.styl'

const  Button = (props) => {
    return <button className={styles.buttonStyle}>{props.label}</button>
}
export default Button;