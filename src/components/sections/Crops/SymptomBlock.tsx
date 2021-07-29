import React from 'react';
// @ts-ignore
// import Speech from 'react-speech';
import Speech from './Speech'
import { Symptom } from '../../../backend/responseTypes';
import { ctxt } from './../../../utils/AppContext'

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-toggle': string;
  'data-target': string;
}

type SymptomBlockProps = {
  symptom: Symptom;
  onClick?: (arg0: Symptom) => void | undefined; // eslint-disable-line
  selected?: boolean;
  textProps?: DivProps ;
};

// @ts-ignore
function SymptomBlock({ symptom, onClick = undefined, selected = false, textProps = {} }: SymptomBlockProps) {
  const localeContext = React.useContext(ctxt)
  const lang = localeContext?.locale + "_IN"
  return (
    <div
    style={{ cursor: 'pointer'}}
    >
      <div
        className={`d-flex shadow rounded justify-content-between align-items-center ${!selected ? '' : 'symptomActive'}`}
        // onClick={}
        // onClick={() => onClick && onClick(symptom)}
        style={{
          border: '2px solid grey',
          marginBottom: '2em',
          padding: '1em',
          // padding
          // borderRadius: '13px',
          display: 'tableCell',
          width: '100%',
          height: "100%",
          // boxShadow: '2px 2px #888888',
          backgroundColor: '#14141405'
        }}
      >
        <div 
          onClick={() => onClick && onClick(symptom)} 
          className='d-flex flex-column justify-content-center ' style={{ fontSize: '2em', flex: 6 }} {...textProps}>
          {symptom.qn}
        </div>
        <div className='' style={{ flex: 1 }}>
          <Speech text={symptom.qn} lang={lang} locale={localeContext?.locale || 'en'}/>
          {/* <Speech text={symptom.qn} pitch='0.5' rate='0.8' volume='0.2' lang='en-GB' voice='US English Female' /> */}
        </div>
      </div>
    </div>
  );
}

export default React.memo(SymptomBlock);