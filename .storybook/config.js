import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import { StoryWrapper } from './StoryWrapper';

// Add global story wrapper
addDecorator((story, context) => (
  <StoryWrapper title={context.kind} subtitle={context.story}>
    {story()}
  </StoryWrapper>
));

// Override default options
//
// See https://github.com/storybooks/storybook/tree/master/addons/options#getting-started
// for a list of options, their default values, and what they do.
setOptions({
  name: 'Gatsby Storybook',
  addonPanelInRight: true,
  sortStoriesByKind: true,
});

// add `knobs` capability to any story
addDecorator(withKnobs);

// load all stories
configure(loadStories, module);

function loadStories() {
  // load all `story.js` files
  const req = require.context('../src', true, /story\.js$/);
  const paths = req.keys();
  paths.forEach(path => req(path));
}
