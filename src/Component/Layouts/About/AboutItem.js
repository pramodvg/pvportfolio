import React from 'react'
export default function AboutItem(props) {
    return (
        <div>
            <div className='col-md-12'>
                <p className='about-txt1'>{props.mData.title}</p>
                <p className='about-txt2'>{props.mData.description}</p>
            </div>
        </div>
    )
}
