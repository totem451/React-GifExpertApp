import React from 'react';
import { shallow } from 'enzime';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem /> ', () => {
    
    test('debe mostrar el componente correctamente ', () => {
        
        const wrapper = shallow( <GifGridItem  /> );

        expect( wrapper ).toMatchSnapshot();
    })
    
})
