import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import client from '../../../backend/client';

import '../Home/card-style.css';
import '../Home/home.scss';
// @ts-ignore
// import Speech from 'react-speech';
import { FormattedMessage } from 'react-intl';
import Solution from './Solution';
import { Location } from 'history';
import { ctxt } from './../../../utils/AppContext';
import Alert from '../Crops/AlertSymptom';
import './styles.scss';
import SymptomBlock from './SymptomBlock';
import { Symptom } from '../../../backend/responseTypes';
import Loader from './Loader';

type State = {
  para: number;
};
type Props = {
  location: Location<State>;
};

function symptomTraversal(props: Props) {
  const myContext = useContext(ctxt);
  const localeContext = React.useContext(ctxt);
  const { locale, languages, ulSetter } = localeContext!; //eslint-disable-line
  console.log('about', props.location.state.para);

  let cropName = '';
  if (props.location.state.para == 1) {
    cropName = 'Cotton';
  } else {
    cropName = 'Paddy';
  }

  const [disease, setDisease] = React.useState({
    disId: 0,
    chemicalAdvice: '',
    organiceAdvice: '',
    ipmMeasures: '',
    chemicalName: '',
    scientificName: '',
    otherSymptoms: [],
  });

  const [loading, setLoading] = React.useState(false);

  const [diseaseFound, setDiseaseFound] = React.useState(0);

  const [symptoms, setSymptoms] = React.useState<Symptom[]>([
    // { sid: 101, desc: 'a', qn: 'b' }
  ]);
  // @ts-ignore
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'ADD_SYMPTOM':
          if (prevState.confirmedSymptoms[prevState.index + 1] != action.symptom.sid) {
            return {
              index: prevState.index + 1,
              confirmedSymptoms: [...prevState.confirmedSymptoms.slice(0, prevState.index + 1), action.symptom],
              selected: -1,
            };
          } else {
            return {
              ...prevState,
              index: prevState.index + 1,
              selected: prevState.confirmedSymptoms[prevState.index + 2].sid,
            };
          }

        case 'BACK':
          setDiseaseFound(0);
          return {
            ...prevState,
            index: prevState.index - 1,
            selected: prevState.confirmedSymptoms[prevState.index].sid,
          };
        case 'FORWARD': {
          let selected;
          if (prevState.index + 2 < prevState.confirmedSymptoms.length) {
            selected = prevState.confirmedSymptoms[prevState.index + 2].sid;
          }
          return {
            ...prevState,
            index: prevState.index + 1,
            selected: selected,
          };
        }
        case 'RESTART':
          setDiseaseFound(0);
          return {
            index: -1,
            selected: -1,
            confirmedSymptoms: [],
          };
      }
    },
    {
      index: -1,
      selected: -1,
      confirmedSymptoms: [],
    }
  );

  React.useEffect(() => {
    setLoading(true);
    const { confirmedSymptoms, index } = state;
    const selectedIds = confirmedSymptoms.map((item: Symptom) => item.sid);

    console.log(selectedIds);
    client
      .get('apialgo', {
        params: {
          cid: props.location.state.para,
          sel: '[' + selectedIds.slice(0, index + 1).toString() + ']',
        },
        headers: {
          'Accept-Language': myContext?.locale + '_' + 'IN',
        },
      })
      .then(res => {
        setLoading(false);
        if (res.data.diseaseFound) {
          setDisease(res.data.disease);
          setDiseaseFound(1);
        } else setSymptoms(res.data.symptoms);
      });
  }, [state, myContext?.locale]);

  const BackBtn = () => {
    return (
      // <div className='col-3'>
      // {state.index >= 0 && ( */}
      <button className='btn btn-outline float-left' style={{ fontSize: '30px', float: 'left' }} onClick={() => dispatch({ type: 'BACK' })}>
        <i className='fa fa-angle-left fa-1x px-2' />
        <FormattedMessage id='Previous' />
      </button>

      // )}

      // </div>
    );
  };

  const CropName = () => {
    return (
      <p className='mb-0' style={{ fontSize: '35px', color: 'green' }}>
        <b>{cropName} </b>{' '}
      </p>
    );
  };

  const NextButton = () => (
    <button
      className='btn btn-outline flaat-right'
      style={{ fontSize: '30px', float: 'none' }}
      onClick={() => dispatch({ type: 'FORWARD' })}
    >
      <FormattedMessage id='Next' />
      <i className='fa fa-angle-right fa-1x px-2' />
    </button>
  );

  const onSymptomClick = (symptom: Symptom) => {
    dispatch({ type: 'ADD_SYMPTOM', symptom });
  };

  const StartAgainBtn = () => {
    return (
      // <div className='col-4' style={{ paddingLeft: "100px" }}>
      // {state.index >= 0 && (
      <button className='btn btn-outline' style={{ fontSize: '30px', float: 'right' }} onClick={() => dispatch({ type: 'RESTART' })}>
        <i className='fa fa-repeat fa-1x px-2' />
        <FormattedMessage id='Again' />
      </button>
    );
  };

  if (diseaseFound === 0) {
    return (
      <div>
        <div className='d-flex'>
          <div className='m-3 d-flex justify-content-between col-sm-9 align-items-center'>
            <div style={{ flex: 1 }}>{state.index >= 0 && <BackBtn />}</div>
            <div className='d-flex justify-content-center' style={{ flex: 1 }}>
              <CropName />
            </div>
            <div className='d-flex justify-content-end' style={{ flex: 1 }}>
              {state.confirmedSymptoms.length > state.index + 1 && <NextButton />}
            </div>
          </div>
          <div className='d-flex col-sm-2 justify-content-end'>{state.index >= 0 && <StartAgainBtn />}</div>
        </div>

        <hr />
        <div className='row'>
          <div
            className='col-sm-9 d-flex flex-column justify-content-center align-items-center'
            style={{ paddingLeft: '25px', flex: 1, textAlign: 'center', minHeight: '400px' }}
          >
            {loading ? (
              <Loader />
            ) : (
              <Row>
                {symptoms.map((symptom: Symptom, idx: number) => {
                  return (
                    <Col key={idx} sm={8} md={6} lg={6}>
                      <SymptomBlock symptom={symptom} selected={state.selected === symptom.sid} onClick={onSymptomClick} />
                    </Col>
                  );
                })}

                {/* Not Found */}
                <Col sm={8} md={6} lg={6}>
                  <SymptomBlock
                    symptom={{
                      qn: locale === 'te' ? 'నేను ఏ లక్షణాన్ని కనుగొనలేకపోయాను' : 'I cannot find any symptom',
                      sid: -1,
                      name: 'Symptom Not Found',
                    }}
                    textProps={{ 'data-toggle': 'modal', 'data-target': '#symptomModal' }}
                  />

                  <div
                    className='modal fade'
                    id='symptomModal'
                    tabIndex={-1}
                    role='dialog'
                    aria-labelledby='symptomModalLabel'
                    aria-hidden='true'
                  >
                    <div className='modal-dialog' role='document'>
                      <div className='modal-content'>
                        <div className='modal-body'>
                          <Alert />
                        </div>
                        <div className='modal-footer'>
                          <Button className='btn btn-danger' data-dismiss='modal'>
                            {' '}
                            <FormattedMessage id='Close' />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            )}

            {/* </Container> */}
          </div>
          <div className='col-sm-3'>
            <div style={{ fontSize: '30px', paddingLeft: '20px' }}>
              <div className='my-2'>
                <b>
                  <FormattedMessage id='Solution.ConfirmedSymptoms' />
                </b>
              </div>
              <ul>
                {state.confirmedSymptoms.map((symp: Symptom) => {
                  return (
                    <div key={symp.sid}>
                      <li style={{ fontSize: '1.5ch' }}>{symp.name}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    return (
      <Solution
        BackBtn={BackBtn}
        StartAgainBtn={StartAgainBtn}
        problem={disease.chemicalName}
        chemicalAdvice={disease.chemicalAdvice}
        organicAdvice={disease.organiceAdvice}
        ipmMeasure={disease.ipmMeasures}
        otherSymptoms={disease.otherSymptoms}
        symptomsConfirmed={state.confirmedSymptoms}
      ></Solution>
    );
  }
}

export default symptomTraversal;
