import React from 'react';
import { render } from '@testing-library/react';
import App from './app';
import Welcome from './containers/welcome';
import MainNavBar from './containers/main-nav-bar';

test('renders learn react link', () => {
  var component = TestUtils.renderIntoDocument(
    <MainNavBar />
  );
});
