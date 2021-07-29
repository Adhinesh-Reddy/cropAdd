import React, { useState, useContext } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ExpertNav from './ExpertNav';
export let CropContext = React.createContext(0);
import { FormattedMessage } from 'react-intl';
import client from '../../backend/client';
import { ctxt } from './../../utils/AppContext';
const ExpertSideNav = () => {
  const myContext = useContext(ctxt);
  const cotton = '../../../../assets/images/cotton.png';
  const Rice = '../../../../assets/images/wheat.png';
  const sugarcane = '../../../../assets/images/sugarcane.png';
  const sunflower = '../../../../assets/images/sunflower.png';

  // client
  //   .get('apicrops/', {
  //     headers: {
  //       'Accept-Language': myContext?.locale + '_' + 'IN',
  //     },
  //   })
  //   .then(res => {
  //     setCrop(res.data);
  //   });

  const [crop, setCrop] = useState([
    {
      cid: 0,
      name: '',
      // imageUrl:''
    },
  ]);
  const [cropv, setCropv] = useState(0);
  let [styleCropActive, setStyleCropActive] = useState({
    background: '#A2E786',
    color: 'white',
  });
  let [styleCropPassive, setStyleCropPassive] = useState({
    background: 'white',
    color: 'black',
  });

  function handleClick(index: any) {
    console.log(crop[index].name);
    setCropv(crop[index].cid - 1);
  }
  console.log(cropv);

  // function handleClickCotton() {
  //   setCropv(0);

  //   styleCotton.background = '#A2E786';
  //   styleCotton.color = 'white';
  //   stylePaddy.background = 'white';
  //   stylePaddy.color = 'black';
  //   setStylePaddy(stylePaddy);
  //   setStyleCotton(styleCotton);
  // }

  // function handleClickPaddy() {
  //   setCropv(1);
  //   stylePaddy.background = '#A2E786';
  //   stylePaddy.color = 'white';
  //   styleCotton.background = 'white';
  //   styleCotton.color = 'black';
  //   setStylePaddy(stylePaddy);
  //   setStyleCotton(styleCotton);
  // }

  React.useEffect(() => {
    client
      .get('apicrops/', {
        headers: {
          'Accept-Language': myContext?.locale + '_' + 'IN',
        },
      })
      .then(res => {
        setCrop(res.data);
      });
  }, [myContext]);

  return (
    <div>
      <CropContext.Provider value={cropv}>
        <ExpertNav />
      </CropContext.Provider>
      {/* <Card style={{ position: 'absolute', width: '80px', top: '198px', padding: '0px', margin: '0px' }}> */}
      <div className='expertsidecard'>
        <ListGroup variant='flush'>
          {crop.map(function (i: any, index: any) {
            return (
              <div
                onClick={() => {
                  handleClick(index);
                }}
                style={{
                  backgroundColor: cropv === index? styleCropActive.background : styleCropPassive.background,
                  height: '85px',
                  margin: '0px',
                  padding: '10px 1px',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                {/* <img src={i.imageUrl} alt={i.name} width='50px' height='50px' /> */}
                <img src={cotton} alt={i.name} width='50px' height='50px' />
                <p style={{ fontSize: '15px', fontWeight: 'bold', color: cropv === index? styleCropActive.color : styleCropPassive.color}}>{i.name}</p>
              </div>
            );
          })}
          {/* <div
            onClick={handleClickCotton}
            style={{
              backgroundColor: styleCotton.background,
              height: '85px',
              margin: '0px',
              padding: '1px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <img src={cotton} alt='cotton' width='50px' height='50px' />
            <p style={{ color: styleCotton.color, fontSize: '15px', fontWeight: 'bold' }}>
              <FormattedMessage id='Cotton' />
            </p>
          </div>
          <div
            onClick={handleClickPaddy}
            style={{
              backgroundColor: stylePaddy.background,
              height: '85px',
              margin: '0px',
              padding: '1px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <img src={wheat} alt='cotton' width='50px' height='50px' />
            <p style={{ color: stylePaddy.color, fontSize: '15px', fontWeight: 'bold' }}>
              <FormattedMessage id='Paddy' />
            </p>
          </div>
          <div style={{ margin: '0px', padding: '1px', textAlign: 'center' }}>
            <img src={sugarcane} alt='cotton' width='50px' height='50px' />
            <p style={{ color: 'black', fontSize: '15px', fontWeight: 'bold' }}>
              <FormattedMessage id='Sugarcane' />
            </p>
          </div>
          <div style={{ margin: '0px', padding: '1px', textAlign: 'center' }}>
            <img src={sunflower} alt='cotton' width='50px' height='50px' />
            <p style={{ color: 'black', fontSize: '15px', fontWeight: 'bold' }}>
              <FormattedMessage id='Sunflower' />
            </p>
          </div> */}
        </ListGroup>
        {/* </Card> */}
      </div>
    </div>
  );
};

export default ExpertSideNav;
