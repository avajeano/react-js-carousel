import React from 'react';
import { render } from'@testing-library/react';
import Card from './Card';
import TEST_IMAGES from './_testCommon';


// smoke test
it("renders without crashing", function() {
    render(<Card />)
})

// snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<Card 
        caption="src/_testCommon.js"
        src="test1.com"
        currNum={1}
        totalNum={3}
        />)
    expect(asFragment()).toMatchSnapshot()
})