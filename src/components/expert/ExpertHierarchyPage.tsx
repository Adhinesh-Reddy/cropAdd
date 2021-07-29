import React, { useState, useContext } from 'react';
import client from '../../backend/client';
import ExpertHierarchyPage2 from './ExpertHierarchyPage2';
import { CropContext } from './ExpertSideNav';
import { ctxt } from './../../utils/AppContext';

const ExpertHierarchyPage = () => {
  const cropContext = useContext(CropContext);
  const myContext = useContext(ctxt);

  const [l1_sym, setl1_sym] = useState([]);
  const [l2_sym, setl2_sym] = useState([]);
  const [l3_sym, setl3_sym] = useState([]);
  const [flag, setFlag] = useState(false);

  let c = cropContext + 1;

  React.useEffect(() => {
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
        setFlag(true);
      });
  }, [cropContext, myContext?.locale]);

  return <div>{flag == true ? <ExpertHierarchyPage2 l1_sym={l1_sym} l2_sym={l2_sym} l3_sym={l3_sym} /> : null}</div>;
};

export default ExpertHierarchyPage;
