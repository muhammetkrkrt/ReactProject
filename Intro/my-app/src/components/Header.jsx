import React from 'react'

const Header = (props) => {
  return (
    <header>
        <h1>{props.header.title}</h1>
        <p>{props.header.discreption}</p>
    </header>
  )
}

export default Header