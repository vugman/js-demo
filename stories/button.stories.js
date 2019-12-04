import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, number } from '@storybook/addon-knobs';
import COLORS from '../styles/colors';
import Button from '../components/Button';

const NAME = 'Button';

const stories = storiesOf(NAME, module);

stories.addDecorator(withKnobs);

stories.add(NAME, () => {
    const bgColor = radios('Background color', COLORS, COLORS.red);
    const glowing = boolean('Glowing', false);

    return (
        <>
            <Button {...{ bgColor, glowing }}>Click here!</Button>
        </>
    );
});
