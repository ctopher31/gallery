import React from 'react';
import Loader from '../../app/components/Loader';

const Images = ({ items }) => (
  <div className="images--container">
    {items.length < 1
      ? <Loader />
      : <div>Images</div>
    }
  </div>
);

export default Images;
