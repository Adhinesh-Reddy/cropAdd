import React, { Component } from 'react';
import '../Home/card-style.css';
import '../Home/home.scss';
import CardText from '../Home/CardText';
import { FormattedMessage } from 'react-intl';

class Crop extends Component {
  render() {
    return (
      <div>
        <div className='row navRow px-4'>
          <div className='col-6'>
            <span style={{ fontSize: '30px', float: 'left' }}>
              <i className='fa fa-angle-left fa-1x px-1' aria-hidden='true'/>&nbsp;&nbsp;
              <FormattedMessage id='Previous' />
            </span>
          </div>
          <div className='col-6'>
            <span style={{ fontSize: '30px', float: 'right' }}>
            <FormattedMessage id='Next' />&nbsp;&nbsp;
              <i className='fa fa-angle-right fa-1x px-1' aria-hidden='true' />
            </span>
          </div>
        </div>
        <hr/>
        <div className='container-fluid d-flex justify-content-center'>
          <div className='row'>
             <CardText text={'Do you observe any spots with bright yellow / orange / brown coloured bolls?'} />

            {/* <CardText text={'Do you find lesions with circular or irregular spots with greyish white center surrounded by brown margin?'} />
            <CardText text={'Do you observe spherical or elliptical spots with purple colour on stems?'} />
            <CardText text={'Do you find any frosty irregular shape powdery spots on the lower surface of leaf'} />
            <CardText text={'Do you find plant with rotted root or few roots visible when uprooted?'} /> */}

            {/* <h3>Audio player in React - </h3> */}
            {/* <ReactPlayer
                        url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
                        width="100px"
                        height="50px"
                        playing={false}
                        controls={true}
                    /> */}
          </div>
          {/* <ReactAudioPlayer
                    src={require("./file1.ogg")}
                    autoPlay
                    controls
                /> */}
        </div>
      </div>
    );
  }
}

export default Crop;