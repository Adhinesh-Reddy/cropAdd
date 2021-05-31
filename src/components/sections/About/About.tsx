import React from 'react';
import { FormattedMessage } from 'react-intl';

import './about.scss'

const about = () => {
  return (
    <div className='aboutdiv'>
      <div className='section-header pt-5 text-center'>
        <h3 className='section-title'>
          <FormattedMessage id='About.Title' defaultMessage='Welcome to Crop Darpan Application..' />

        </h3>

          <div >
            {/* <h3 className='about-title'>About us</h3> */}
            <div className='about-description ' style={{fontSize:'20px'}}>
              <p>
                <FormattedMessage id='About.Text1' />

              </p>
              <p>
                <FormattedMessage id='About.Text2' />
              </p>
              <p>
                <FormattedMessage id='About.Text3' />

              </p>
              <p>
                <FormattedMessage id='About.Text4' />

              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default about;

