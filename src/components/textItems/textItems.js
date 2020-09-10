import React from 'react'

function TextItems(props) {
    return (
        <div>
            <li className='text__item'>
                <h1 className='text__tittle'>
                    {props.tittle}
                </h1>
                <h5 className='text__content'>
                    {props.content}
                </h5>
            </li>
        </div>
    )
}

export default TextItems
