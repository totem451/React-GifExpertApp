import React/*, { useState, useEffect }*/ from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

    // const [count, setCount] = useState(0)

    // const [images, setImages] = useState([]);

    // const state = useFetchGifs();
    const {data:images, loading} = useFetchGifs( categoria );
    // console.log(data);
    // console.log(loading);

    // useEffect(() => {
    //     getGifs(categoria)
    //         .then(setImages);
    // }, [categoria])

    // const getGifs = async() => {

    //     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=XQYohDnNz7C9bpUK8df50bU8ybj42vmY`;
    //     const resp = await fetch(url);
    //     // resp.ok
    //     const {data} = await resp.json();

    //     // console.log(data);

    //     const gifs = data.map(img => {

    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }

    //     })

    //     console.log(gifs);
    //     setImages(gifs);

    // };

    return (  

        // <>
        //     <h3>{categoria}</h3>
        //     <div className='card-grid'>
        //         {/* <h3>{count}</h3>
        //         <button onClick = {() => setCount(count + 1)}></button> */}
        //         {/* <ol>
        //             {
        //                 images.map(img => (
        //                     <li key = {img.id}>{img.title}</li>
        //                 ))
        //             }
        //             {
        //                 images.map(({id, title}) => (
        //                     <li key = {id}>{title}</li>
        //                 ))
        //             }
        //         </ol> */}
        //         {
        //             images.map(img => (
        //                 <GifGridItem
        //                     key={img.id}
        //                     img={img}
        //                     {...img}
        //                 />
        //             ))
        //         }
        //     </div>
        // </>

        <>
            <h3 className = 'animate__animated animate__fadeInDown'>{categoria}</h3>

            {/* {loading ? 'Cargando...' : 'Data cargada'} */}
            { loading && <p className = 'animate__animated animate__flash'>Loading...</p> }
            
            <div className = 'card-grid'>

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            img={img}
                            {...img}
                        />
                    ))
                }
            </div>

        </>
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired
}