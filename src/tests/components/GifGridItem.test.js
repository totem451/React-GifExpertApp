import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import '@testing-library/jest-dom';
import '@wojtekmaj/enzyme-adapter-react-17'

describe('Pruebas en <GifGridItem /> ', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    
    const wrapper = shallow( <GifGridItem  title = { title } url = { url }/> );

    test('debe mostrar el componente correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe tener un parrafo con el titulo ', () => {
        
        const p = wrapper.find('p')

        expect( p.text().trim() ).toBe( title )

    });
    
    test('debe tener la imagen igual al url y alt de los props ', () => {
        
        const img = wrapper.find('img'); // una imagen
        // const img = wrapper.find('#img'); // mas de una imagen, id
        // const img = wrapper.find('.img'); // mas de una imagen, clase
        // const img = wrapper.find('img').at; // mas de una imagen, varias
        console.log( img.html() );
        console.log( img.props().src );
        console.log( img.prop('src'));

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('debe tener animate_-fadeInDown ', () => {
        
        const div = wrapper.find('div');

        expect( div.prop('className').includes('animate__fadeInDown') ).toBe( true );

    });
    
})
