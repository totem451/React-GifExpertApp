import React from 'react';
import '@testing-library/jest-dom';
import '@wojtekmaj/enzyme-adapter-react-17'
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const categoria = 'weed';

    // const wrapper = shallow( <GifGrid categoria = {categoria}/> );
    
    test('debe mostrar el componente correctamente ', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid categoria = {categoria}/> );

        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar items cuando se cargan imagenes useFetchGifs ', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier.cos.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid categoria = {categoria}/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
        
    });
    
})
