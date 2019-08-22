import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const WelcomeFrame = () => (
    <div>
        <img src="https://marmelab.com/posters/beard-2.jpeg" />
        <div>
            <h2>Welcome to react-admin demo</h2>
            <p>
                This is the admin of an imaginary poster shop. Fell free to explore and modify the
                data - it's local to your computer, and will reset each time you reload.
            </p>
        </div>
        <div
            css={css`
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                width: 100%;
            `}
        >
            <a href="https://marmelab.com/react-admin">
                <span>react-admin site</span>
            </a>
            <a href="https://github.com/marmelab/react-admin/tree/master/examples/demo">
                <span>Source for this demo</span>
            </a>
        </div>
    </div>
);

export default WelcomeFrame;
