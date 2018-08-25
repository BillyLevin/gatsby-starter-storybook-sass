import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Button', module).add('with text', () => <Button>Text only</Button>);

storiesOf('Button', module).add('with emojis', () => <Button>Emojis 👌😎</Button>);
