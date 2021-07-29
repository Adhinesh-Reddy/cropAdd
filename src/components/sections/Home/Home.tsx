import React, { useContext } from 'react';
// import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import './card-style.css';
import './home.scss';
import Card from './Cards';
import client from '../../../backend/client';
import { ctxt } from './../../../utils/AppContext';

const cotton = require('./../../../../assets/images/cotton.png');
// const sugarcane = "./../../../assets/images/sugarcane.png";
// const sunflower = "./../../../assets/images/sunflower.png";
const wheat = require('./../../../../assets/images/wheat.png');

type Crop = {
  cid: number;
  name: string;
  image: string;
};

function Home() {
  const crops_img = [cotton, wheat];
  const myContext = useContext(ctxt);
  const [crops, setCrops] = React.useState([]);
  const localeContext = React.useContext(ctxt);
  const { locale, languages, ulSetter } = localeContext!; //eslint-disable-line
  const codes = ['en', 'te'];
  React.useEffect(() => {
    console.log(codes);
    client
      .get('apicrops', {
        params: {},
        headers: {
          'Accept-Language': myContext?.locale + '_' + 'IN',
        },
      })
      .then(res => setCrops(res.data));
  }, [myContext?.locale]);
  return (
    <>
      <div style={{ paddingTop: '30px', fontSize: '30px', paddingLeft: '750px', justifyContent: 'space-between' }}>
        <FormattedMessage id='Select.Language' />
        <br />
        {codes.map(code => {
          return (
            <div
              key={code}
              className='btn py-1 themed-container'
              onClick={() => ulSetter(code)}
              style={{ fontSize: '25px', color: code === locale ? '#4FB872' : 'black' }}
            >
              {languages[code]}
            </div>
          );
        })}
      </div>

      <div className='container-fluid d-flex justify-content-center'>
        <div className='row'>
          {crops.map((crop: Crop, index: number) => {
            return (
              <div className='col-md-6' key={crop.cid}>
                <Card imgsrc={crops_img[index]} text={crop.name} cid={crop.cid} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
