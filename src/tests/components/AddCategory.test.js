import React from 'react';
import '@testing-library/jest-dom';
import '@wojtekmaj/enzyme-adapter-react-17'
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en <AddCategory /> ', () => {

    // const setCategorias = () => {};
    const setCategorias = jest.fn();

    // const wrapper = shallow( <AddCategory setCategorias = { setCategorias }/> );
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategorias = { setCategorias }/> );
    } );
    
    test('debe mostrarse correctamente ', () => {    

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe cambiar la caja de texto ', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        // input.simulate('change', {
        //     target: {
        //         value: value
        //     }
        // } );
        input.simulate('change', {target: {value}});

        expect( wrapper.find('p').text().trim() ).toBe( value );

    });
    
    test('no debe postear la informacion con submit ', () => {
        
        // wrapper.find('form').simulate('submit', {preventDefault: () => {}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect( setCategorias ).not.toHaveBeenCalled();

    });

    test('debe llamar el setCategorias y limpiar la caja de texto ', () => {

        const value = 'Hola Mundo';
        
        wrapper.find('input').simulate('change', {target: {value}});

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect( setCategorias ).toHaveBeenCalled();
        expect( setCategorias ).toHaveBeenCalledTimes(1);
        expect( setCategorias ).toHaveBeenCalledWith( expect.any(Function) );

        expect( wrapper.find('input').prop('value').trim() ).toBe('');
        
    });
    
});
