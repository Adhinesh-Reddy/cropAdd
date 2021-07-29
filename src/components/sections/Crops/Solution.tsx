import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
// import { render } from "react-dom";
// import { FormattedMessage } from 'react-intl';
import { useReactToPrint } from 'react-to-print';
import { exportComponentAsJPEG } from 'react-component-export-image';
// @ts-ignore
import Speech from './Speech';
import { FormattedMessage } from 'react-intl';

// import '../Home/card-style.css';
import '../Home/home.scss';
import './solution.css'

import { Symptom } from "../../../backend/responseTypes"
import { ctxt } from '../../../utils/AppContext';

const download = require('./../../../../assets/images/download.jpg');

type Props = {
  problem: string;
  chemicalAdvice: string;
  organicAdvice: string;
  ipmMeasure: string;
  symptomsConfirmed: Symptom[];
  otherSymptoms: Symptom[];
  BackBtn: () => JSX.Element;
  StartAgainBtn: () => JSX.Element;
};

const Solution = (props: Props) => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  const localeContext = React.useContext(ctxt)
  const lang = localeContext?.locale + "_IN"

  const BackBtn = props.BackBtn
  const StartAgainBtn = props.StartAgainBtn
  return (
    <div>
      <div className='d-flex row navRow px-4 justify-content-between' >
        <BackBtn />
        <StartAgainBtn />
        {/* <hr /> */}
      </div>
      <div className='container-fluid d-flex  justify-content-center' >
        <div className='cardsolution column shadow' style={{ flexGrow: 1 }} ref={componentRef}>
          <br />
          <div className="d-flex justify-content-between" style={{flex:1}}>
            <div>
              <p style={{ fontSize: '25px', color: '#000000' }}>
                <FormattedMessage id='Problem' />{' '}
              </p>
              <h1 style={{ color: '#E24C4B' }}>
                <b>{props.problem}</b>
              </h1>
            </div>
            <div className="d-flex align-items-center" style={{marginRight: 20}}>
              <Speech size={"4em"} text={props.problem} pitch={0.5} rate={0.8} volume={0.2} lang={lang} locale={localeContext?.locale || 'en'} />
            </div>
          </div>
          <br/>
          <br/>
          <div style={{ fontSize: "25px" }}>
            {!!props.chemicalAdvice && (
              <span>
                <hr style={{ width: '97%', color: '#000000' }} />
                <p>
                  <b> <FormattedMessage id='Solution.ChemicalAdvice' /></b>
                </p>
                <p >
                  {' '}
                  {props.chemicalAdvice}
                </p>
                <hr style={{ color: 'black', backgroundColor: 'black', width: '97%' }} />
              </span>
            )}
            {!!props.organicAdvice && (
              <span>
                <p>
                  <b><FormattedMessage id='Solution.OrganicAdvice' /></b>
                </p>
                <p>{props.organicAdvice}</p>
                <hr style={{ color: 'black', backgroundColor: 'black', width: '97%' }} />
              </span>
            )}
            {!!props.ipmMeasure && (
              <span>
                <p>
                  <b><FormattedMessage id='Solution.IPMMeasures' /></b>
                  <p>{props.ipmMeasure}</p>
                </p>
                <hr style={{ color: 'black', backgroundColor: 'black', width: '97%' }} />
              </span>
            )}

            <p>
              <b><FormattedMessage id='Solution.ConfirmedSymptoms' /></b>
            </p>
            <p>
              {props.symptomsConfirmed.map((symp: Symptom) => {
                return (
                  <div className="col-md-6" key={symp.sid} >
                    <ul>
                      <li> {symp.name}  </li>
                    </ul>
                  </div>
                )
              }
              )}
            </p>
            <hr style={{ color: 'black', backgroundColor: 'black', width: '97%' }} />

            {props.organicAdvice !== "" && (
              <span>
                <p>
                  <b><FormattedMessage id='Solution.OtherSymptoms' /></b>
                </p>
                <p>
                  {props.otherSymptoms.map((symp: Symptom) => {
                    return (
                      <div className="col-md-6" key={symp.sid} >
                        <ul>
                          <li> {symp.name}  </li>
                        </ul>
                      </div>
                    )
                  }
                  )}
                </p>
              </span>
            )}
          </div>
        </div>
      </div>

      <div className='row navRow px-4 container-fluid d-flex  justify-content-center'>
        <p style={{ float: 'right', width: '15.15%', padding: '8px', fontSize: '40px' }}>
          <p style={{ fontSize: '25px', color: "green" }}> <FormattedMessage id="Download.Options" /></p>
          <Button ref={componentRef.current} onClick={handlePrint} style={{ backgroundColor: 'white', borderRadius: '10', borderColor: 'green', borderStyle: 'solid', color: "black", fontSize: "18px" }}><img src={download} alt='download' style={{ width: '20px', height: '20px' }} />
          &nbsp;&nbsp;<b><FormattedMessage id='Save.Option1' /></b>
          </Button>
          &nbsp;&nbsp;

          <Button ref={componentRef.current} onClick={() => exportComponentAsJPEG(componentRef)} style={{ backgroundColor: 'white', borderRadius: '10', borderColor: 'green', borderStyle: 'solid', color: "black", fontSize: "18px" }}><img src={download} alt='download' style={{ width: '20px', height: '20px' }} />
          &nbsp;&nbsp;<b><FormattedMessage id='Save.Option2' /></b>
          </Button>
        </p>
      </div>

    </div>
  );
}

export default Solution;
