import React from 'react';
import './gallery.scss'
import { FormattedMessage } from 'react-intl';

const Gallery = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" >
      <FormattedMessage id='Gallery.Title' />

    </div>
  );
};

export default React.memo(Gallery);
