import React from 'react';
import { getGifs } from '../../helpers/getGifs';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import '@wojtekmaj/enzyme-adapter-react-17'

describe('Pruebas en getGifs Fetch ', () => {
    
    test('debe traer 10 elementos ', async() => {
        
        const gifs = await getGifs('Peaky Blinders');

        expect( gifs.length ).toBe( 10 );

    });
    
    test('debe traer 0 elementos ', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
        
    });

});
