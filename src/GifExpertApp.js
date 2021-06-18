import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categorias = ['Breacking bad', 'Peaky blinders', 'Suits'];

const [categorias, setCategorias] = useState(['Rick and Morty'/*, 'Breacking bad', 'Peaky blinders', 'Suits'*/]);

    // const handleAdd = () => {

    //     setCategorias([...categorias, 'Nueva serie']); // Agrega al final
    //     // setCategorias(['Nueva serie', ...categorias]); // Agrega al principio
    //     // setCategorias(c => [...c, 'Nueva serie']); // Agrega al final

    // };

    return (

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias = {setCategorias}/>
            <hr />

            {/* <button onClick = {handleAdd}>Agregar</button> */}


            <ol>
                {
                    categorias.map(categoria => (

                        // <li key = {categoria}>{categoria}</li>
                        <GifGrid 
                            categoria = {categoria}
                            key = {categoria}
                        />
                    ))
                }
            </ol>
            {/* <>
                {
                    categorias.map((categoria, i) => {
                        return <li>{categorias[i]}</li>
                    })
                }
            </> */}
        </>

    );
}