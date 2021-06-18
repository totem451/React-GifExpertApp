import React from 'react'

export const GifGridItem = ({id, title, url}/*props*/) => {

    console.log(id, title, url/*props*/)


    return (
        <div className = 'card animate__animated animate__fadeInDown'>
            <img src = {url} alt = {title} />
            <p>{title}</p>
        </div>
    )

}
