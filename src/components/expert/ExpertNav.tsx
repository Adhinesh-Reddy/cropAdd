import React from 'react';
import { Card as ExpertCard, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import ExpertSections from './ExpertSections';
import { FormattedMessage } from 'react-intl';
import './style.css'

const ExpertNav = () => {
  return (
    <div>
      {/* <ExpertCard 
        border='dark'
        style={{
          position: 'absolute',
          width: '94.5%',
          left: '5.3%',
          top: '131px',
          margin: '0px',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        }}
      > */}
       <div className='expertcard'>
        <ExpertCard.Header style={{ backgroundColor: '#D5DCED', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', padding: '0' }}>
          <Row style={{ textAlign: 'center', lineHeight: '50px' }}>
            {/* <Col style={{backgroundColor:"#4FB872", fontSize: "20px",textDecoration: "none", padding:"0", marginLeft:"15px",borderTopLeftRadius:"16px", borderTopRightRadius:"16px"}}><Link to='/' style = {{textDecoration: "none", color:"white"}}>CROP</Link></Col> */}
            <Col style={{ padding: '0', paddingLeft: '15px' }}>
              <NavLink
                to='/expert/crop'
                className='nav-link'
                style={{ fontSize: '20px', textDecoration: 'none', lineHeight: '50px', margin: '0', padding: '0', color: 'black' }}
                activeStyle={{
                  backgroundColor: '#4FB872',
                  lineHeight: '50px',
                  fontSize: '20px',
                  textDecoration: 'none',
                  padding: '0',
                  margin: '0',
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                  color: 'white',
                }}
              >
                <b>
                  <FormattedMessage id='Crop' />
                </b>
              </NavLink>
            </Col>
            <Col style={{ padding: '0' }}>
              <NavLink
                to='/expert/problem'
                className='nav-link'
                style={{ fontSize: '20px', textDecoration: 'none', lineHeight: '50px', margin: '0', padding: '0', color: 'black' }}
                activeStyle={{
                  backgroundColor: '#4FB872',
                  lineHeight: '50px',
                  fontSize: '20px',
                  textDecoration: 'none',
                  padding: '0',
                  margin: '0',
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                  color: 'white',
                }}
              >
                <b>
                  <FormattedMessage id='ExpertProblem' />
                </b>
              </NavLink>
            </Col>
            <Col style={{ padding: '0', paddingRight: '15px' }}>
              <NavLink
                to='/expert/hierarchy'
                className='nav-link'
                style={{ fontSize: '20px', textDecoration: 'none', lineHeight: '50px', margin: '0', padding: '0', color: 'black' }}
                activeStyle={{
                  backgroundColor: '#4FB872',
                  lineHeight: '50px',
                  fontSize: '20px',
                  textDecoration: 'none',
                  padding: '0',
                  margin: '0',
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                  color: 'white',
                }}
              >
                <b>
                  <FormattedMessage id='Hierarchy' />
                </b>
              </NavLink>
            </Col>
          </Row>
        </ExpertCard.Header>
        <ExpertCard.Body style={{ padding: '0px' }}>
          <ExpertSections />
        </ExpertCard.Body>
      {/* </ExpertCard> */}
      </div>
    </div>
  );
};

export default ExpertNav;
