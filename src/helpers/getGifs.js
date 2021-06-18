// import React from 'react';

export const getGifs = async(categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=XQYohDnNz7C9bpUK8df50bU8ybj42vmY`;
    const resp = await fetch(url);
    // resp.ok
    const {data} = await resp.json();

    // console.log(data);

    const gifs = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }

    })

    return gifs;
    
};