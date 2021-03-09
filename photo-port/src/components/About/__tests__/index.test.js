import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
afterEach(cleanup);

describe('About component', () => {
    //renders about test
    //First TEST
    it('renders', () => {
        render(<About/>);
    });
    //Second TEST
    it('matches snapshot DOM node structure', () => {
        //render ABOUT
        const {asFragment} = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    });
})
