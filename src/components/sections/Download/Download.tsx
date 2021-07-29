import React from "react"
import { FormattedMessage } from 'react-intl';
import './download.scss'
const downloadTemplate = require("./../../../../assets/images/download-template.jpeg");

const download = () => {
  return (

    <div className='downloaddiv' >

        <div className="flex social-btns">
        <img className="pic-div" src={downloadTemplate} alt='CropDarpan' />
        {/* <p ><FormattedMessage id='Download.Title' /></p> */}

          <a className="app-btn blu flex vert py-2" href="https://play.google.com/store/apps/details?id=in.iiit.cropdarpan">
            <i className="fab fa-google-play"></i>
            <p> <FormattedMessage id='Download.Text1' />  <br /> <span className="big-txt"><FormattedMessage id='Download.Option1' />
</span></p>
          </a>

          <a className="app-btn blu flex vert py-2 " href="https://apps.apple.com/us/app/crop-darpan/id1556486922">
            <i className="fab fa-apple"></i>
            <p><FormattedMessage id='Download.Text2' /> <br /> <span className="big-txt"><FormattedMessage id='Download.Option2' /></span></p>
          </a>
          </div>

    </div>

  );
}

export default download;

