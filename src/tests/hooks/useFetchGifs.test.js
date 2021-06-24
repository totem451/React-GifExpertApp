import React from 'react';

import '@testing-library/jest-dom';
import '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en hook useFetchGifs ', () => {
    
    test('debe retornar el estado inicial ', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Rick and Morthy' ));
        const { data, loading } = result.current;

        await waitForNextUpdate({timeout:3000});

        // console.log(data, loading);

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );

    });
    
    test('debe retornar un arreglo de imgs y el loading en false ', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Rick and Morthy' ));

        await waitForNextUpdate({timeout:3000});

        const { data, loading } = result.current;

        // console.log(data, loading);

        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe( false );

    });
    
})
