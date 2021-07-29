// import axios from 'axios';
import React, { useState } from 'react';
// import {useEffect} from 'react'
import client from '../../backend/client';
import ExpertTree from './ExpertTree';

function ExpertTreeData() {
  const [flag, setFlag] = useState(0);
  const [l1_sym, setl1_sym] = useState([{ sid: '', name: '' }]);
  const [l2_sym, setl2_sym] = useState([{ sid: '', parentId: '', name: '' }]);
  const [l3_sym, setl3_sym] = useState([{ sid: '', parentId: '', name: '' }]);

  React.useEffect(() => {
    client.get('crops/1/symptom/level/1').then(res => {
      setl1_sym(res.data);
      console.log(res.data);
    });
  }, []);

  React.useEffect(() => {
    client.get('crops/1/symptom/level/2').then(res => {
      setl2_sym(res.data);
    });
  }, []);

  React.useEffect(() => {
    client.get('crops/1/symptom/level/3').then(res => {
      setl3_sym(res.data);
      setFlag(1);
    });
  }, []);

  return (
    // <Tree1 />
    //{tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder}/> : 'No Tasks To Show.'}
    <div>{flag == 1 ? <ExpertTree l1_sym={l1_sym} l2_sym={l2_sym} l3_sym={l3_sym} /> : 'loading...'}</div>
  );
}

export default ExpertTreeData;
