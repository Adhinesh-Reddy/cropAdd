import React, { useState, useContext } from 'react';
import client from '../../backend/client';
import ExpertProblemPage2 from './ExpertProblemPage2';
import { CropContext } from './ExpertSideNav';
import { ctxt } from './../../utils/AppContext';

const ExpertProblemPage = () => {
  const cropContext = useContext(CropContext);
  const myContext = useContext(ctxt);

  const [flag, setFlag] = useState(0);
  const [disease, setDisease] = useState({
    disId: '0',
    cId: '',
    chemical_name: '',
    scientific_name: '',
    chemicalAdvice: '',
    organicAdvice: '',
    ipmmeasures: null,
  });
  const [l1_sym, setl1_sym] = useState([]);
  const [l2_sym, setl2_sym] = useState([]);
  const [l3_sym, setl3_sym] = useState([]);

  React.useEffect(() => {
    let c = cropContext + 1;
    client
      .get('apicrops/' + c + '/symptom/level/1', {
        headers: {
          'Accept-Language': myContext?.locale + '_' + 'IN',
        },
      })
      .then(res => {
        setl1_sym(res.data);
      });
    client
      .get('apicrops/' + c + '/symptom/level/2', {
        headers: {
          'Accept-Language': myContext?.locale + '_' + 'IN',
        },
      })
      .then(res => {
        setl2_sym(res.data);
      });
    client
      .get('apicrops/' + c + '/symptom/level/3', {
        headers: {
          'Accept-Language': myContext?.locale + '_' + 'IN',
        },
      })
      .then(res => {
        setl3_sym(res.data);
      });
    client
      .get('apicrops/' + c + '/disease', {
        headers: {
          'Accept-Language': myContext?.locale + '_' + 'IN',
        },
      })
      .then(res => {
        setDisease(res.data);
        setFlag(1);
      });
  }, [cropContext, myContext?.locale]);
  return <div>{flag == 1 ? <ExpertProblemPage2 l1_sym={l1_sym} l2_sym={l2_sym} l3_sym={l3_sym} disease={disease} /> : null}</div>;
};

export default ExpertProblemPage;
