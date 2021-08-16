import React from 'react'

const Button = ({link, classType, text, downloadable}) => {
    return (
        <a href={link} {...downloadable === true && "downloadable"} target="_blank" rel="noreferrer" className={classType}>{text}</a>          
    )
}

Button.defaultProps = {
    colorClass: "btn btn-success",
}

export default Button;
