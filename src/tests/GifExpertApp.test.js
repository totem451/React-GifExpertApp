import React from 'react';

import '@testing-library/jest-dom';
import '@wojtekmaj/enzyme-adapter-react-17';

import { shallow } from 'enzyme';

import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    
    test('debe mostrarse correctamente ', () => {
        
        const wrapper = shallow(<GifExpertApp />);

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe mostrar una lista de categorias ', () => {
        
        const categorias = ['Rick and Morty', 'weed'];
        const wrapper = shallow(<GifExpertApp defaultCategorias = { categorias } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categorias.length );
        
    })
    
})
