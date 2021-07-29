import { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import '../Home/card-style.css';
import '../Home/home.scss';
const alert = require('./../../../../assets/images/alert.png');
// const close = './../../../assets/images/close.png';

class Alert extends Component {
  render() {
    return (
      <div className='container-fluid d-flex justify-content-center'>
        <div className='cardalertsymptom'>
          {/* <div style={{ float: 'right' }}>
            <img src={close} alt='close' style={{ width: '40px', height: '40px' }} />
          </div> */}
          <br />
          <div style={{ textAlign: 'center' }}>
            <img src={alert} alt='alertsymptom' style={{ width: '80px', height: '75px' }} />
          </div>
          <br />
          <p style={{ fontSize: '27px', textAlign: 'center' }}>
            <b> <FormattedMessage id="AlertSymptom.Text1"/> </b>{' '}
          </p>
          <p style={{ fontSize: '26px', textAlign: 'center' }}>
            {' '}
            <FormattedMessage id="AlertSymptom.Text2"/>{' '}
            <span style={{ color: '#4FB872' }}> <FormattedMessage id="AlertSymptom.Text3"/> </span> <FormattedMessage id="AlertSymptom.Text4"/>{' '}
          </p>
          <br />
          <hr style={{ color: '#E24C4B', backgroundColor: '#E24C4B  ', width: '70%', height: '1.4px' }} />
        </div>
      </div>
    );
  }
}

export default Alert;
