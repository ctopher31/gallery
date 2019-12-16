import React from 'react';
import Loader from '../../app/components/Loader';

const Videos = ({ items }) => (
  <div className="videos--container">
    {items.length < 1
      ? <Loader />
      : <div>Videos</div>
    }
  </div>
);

export default Videos;
