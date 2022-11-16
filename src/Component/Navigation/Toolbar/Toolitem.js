import React from 'react'

export default function Toolitem(props) {
  return (
          <li className='nav-item' >
              <a className='nav-link' href={props.mLink}>{props.lable}</a>
          </li>
  )
}
