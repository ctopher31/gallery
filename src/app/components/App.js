import React, { Fragment } from 'react';
import TabsContainer from '../../tabs/components/TabsContainer';
import ImagesContainer from '../../images/components/ImagesContainer';
import VideosContainer from '../../videos/components/VideosContainer';

const App = () => (
  <Fragment>
    <TabsContainer />
    <ImagesContainer />
    <VideosContainer />
  </Fragment>
);

export default App;
