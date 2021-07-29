import React, { useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Dropdown, Card } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import client from '../../backend/client';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { CropContext } from './ExpertSideNav';
import { ctxt } from './../../utils/AppContext';

const ExpertProblemPage2 = (props: any) => {
  const myContext = useContext(ctxt);

  const disease = props.disease;
  const cropContext = useContext(CropContext);
  const [showContentProblemView, setShowContentProblemView] = useState(true);
  const [showContentProblemAdd, setShowContentProblemAdd] = useState(false);
  const [showContentProblemEdit, setShowContentProblemEdit] = useState(false);
  const [showContentProblemDelete, setShowContentProblemDelete] = useState(false);

  function handleViewClick() {
    setShowContentProblemView(true);
    setShowContentProblemAdd(false);
    setShowContentProblemEdit(false);
    setShowContentProblemDelete(false);
  }

  function handleAddClick() {
    setShowContentProblemView(false);
    setShowContentProblemAdd(true);
    setShowContentProblemEdit(false);
    setShowContentProblemDelete(false);
  }

  function handleEditClick() {
    setShowContentProblemView(false);
    setShowContentProblemAdd(false);
    setShowContentProblemEdit(true);
    setShowContentProblemDelete(false);
  }

  function handleDeleteClick() {
    setShowContentProblemView(false);
    setShowContentProblemAdd(false);
    setShowContentProblemEdit(false);
    setShowContentProblemDelete(true);
  }
  const ShowProblemView = () => {
    const l1_sym = props.l1_sym;
    const l2_sym = props.l2_sym;
    const [backGroundColorView, setBackGroundColorView] = useState('white');
    const [textColorView, setTextColorView] = useState('black');
    const [commonName, setCommonName] = useState(disease[0].chemical_name);
    const [chemicalAdvice, setChemicalAdvice] = useState(disease[0].chemicalAdvice);
    const [scientificName, setScientificName] = useState(disease[0].scientific_name);
    const [organicAdvise, setOrganicAdvise] = useState(disease[0].organiceAdvice);
    const [ipmMeasures, setIpmMeasures] = useState(disease[0].ipmMeasures);
    const [symptomsData, setSymptomsData] = useState([]);
    const [dropdownSearch, setDropdownSearch] = useState('');
    const [diseaseId, setDiseaseId] = useState(disease[0].disId);
    let [diseaseFilter, setDiseaseFilter] = useState(disease);
    console.log('diseases', diseaseFilter);
    const [showTextSymptom, setShowTextSymptom] = useState(true);
    const onClickAngleDownSymptom = () => {
      if (showTextSymptom == true) {
        setShowTextSymptom(false);
      } else {
        setShowTextSymptom(true);
      }
    };
    const Showsymptom = () => {
      return (
        <Container style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <Row style={{ padding: '0px' }}>
            <Col style={{ color: '#000000', fontSize: '22px' }}>
              <b>
                <FormattedMessage id='ExpertView.Text7' />
              </b>
            </Col>
            <Col style={{ color: '#000000', fontSize: '22px' }}>
              <b>
                <FormattedMessage id='ExpertView.Text8' />
              </b>
            </Col>
            <Col style={{ color: '#000000', fontSize: '22px' }}>
              <b>
                <FormattedMessage id='ExpertView.Text9' />
              </b>
            </Col>
            <Col style={{ color: '#000000', fontSize: '22px' }}>
              <b>
                <FormattedMessage id='ExpertView.Text10' />
              </b>
            </Col>
          </Row>
          <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '1px' }} />
          {symptomsData.map(function (i: any) {
            let parentSym = '';
            if (i.level == 2) {
              for (let l1 in l1_sym) {
                if (i.parentId == l1_sym[l1].sid) {
                  parentSym = l1_sym[l1].name;
                }
              }
            } else {
              for (let l2 in l2_sym) {
                if (i.parentId == l2_sym[l2].sid) {
                  for (let l1 in l1_sym) {
                    if (l2_sym[l2].parentId == l1_sym[l1].sid) {
                      parentSym = l1_sym[l1].name;
                    }
                  }
                }
              }
            }
            return (
              <Row key={i.sid} style={{ padding: '0px' }}>
                <Col style={{ color: '#000000', fontSize: '20px' }}>{i.name}</Col>
                <Col style={{ color: '#000000', fontSize: '20px' }}>L{i.level}</Col>
                <Col style={{ color: '#000000', fontSize: '20px' }}>{parentSym}</Col>
                <Col style={{ color: '#000000', fontSize: '20px' }}>{i.qn}</Col>
                <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '1px', width: '97%' }} />
              </Row>
            );
          })}
        </Container>
      );
    };
    React.useEffect(() => {
      client
        .get('apidisease/' + diseaseId + '/symptoms', {
          headers: {
            'Accept-Language': myContext?.locale + '_' + 'IN',
          },
        })
        .then(res => {
          setSymptomsData(res.data);
        });
    }, [diseaseId, myContext?.locale]);
    function handleClick(d: any) {
      for (let i in disease) {
        if (disease[i].disId == d.disId) {
          setCommonName(disease[i].chemical_name);
          setChemicalAdvice(disease[i].chemicalAdvice);
          setScientificName(disease[i].scientific_name);
          setOrganicAdvise(disease[i].organiceAdvice);
          setIpmMeasures(disease[i].ipmMeasures);
          setDiseaseId(d.disId);
        }
      }
      setDropdownSearch('');
      setDiseaseFilter([...disease]);
    }
    function handleDropdownSearch(searchString: any) {
      setDropdownSearch(searchString);
      searchString = searchString.trim().toLowerCase();
      if (searchString.length > 0) {
        diseaseFilter = disease.filter(function (i: any) {
          return i.chemical_name.toLowerCase().match(searchString);
        });
      } else {
        diseaseFilter = [...disease];
      }
      setDiseaseFilter(diseaseFilter);
    }
    return (
      <Container fluid>
        <Row style={{ padding: '0px' }}>
          <Col sm={9} style={{ paddingRight: '0px', paddingLeft: '0px' }}>
            <div>
              <div>
                <br />
                <br />
                <Container fluid>
                  <Row style={{ padding: '0px' }}>
                    {/* <Col sm={2}></Col> */}
                    <Col sm={2}>
                      <AddIcon
                        onClick={handleAddClick}
                        style={{ fontSize: '45px', color: '#696969', float: 'right', marginRight: '52px', marginTop: '-5px' }}
                      />
                    </Col>
                    <Col sm={1}>
                      <EditIcon
                        onClick={handleEditClick}
                        style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '50px' }}
                      />
                    </Col>
                    <Col sm={1}>
                      <DeleteIcon
                        onClick={handleDeleteClick}
                        style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '50px' }}
                      />
                    </Col>
                  </Row>
                </Container>
                <br />
              </div>
              <hr style={{ color: '#C4C4C4', backgroundColor: '#C4C4C4', height: '1px' }} />
              <div style={{ width: '100%' }}>
                <Container fluid style={{ marginLeft: '0', marginRight: '0', width: '100%' }}>
                  <Row style={{ padding: '0px' }}>
                    {commonName !== '' && (
                      <>
                        <Col sm={2} style={{ color: '#4FB872' }}>
                          <FormattedMessage id='ExpertView.Text1' />
                        </Col>
                        <Col sm={2} style={{ color: '#000000' }}>
                          {commonName}
                        </Col>
                      </>
                    )}
                    {chemicalAdvice !== '' && (
                      <>
                        <Col sm={2} style={{ color: '#4FB872' }}>
                          <FormattedMessage id='ExpertView.Text2' />
                        </Col>
                        <Col sm={6} style={{ color: '#000000' }}>
                          {chemicalAdvice}
                        </Col>
                      </>
                    )}
                  </Row>
                  <br />
                  <Row style={{ padding: '0px' }}>
                    {scientificName !== '' && (
                      <>
                        <Col sm={2} style={{ color: '#4FB872' }}>
                          <FormattedMessage id='ExpertView.Text3' />
                        </Col>
                        <Col sm={2} style={{ color: '#000000' }}>
                          {scientificName}
                        </Col>
                      </>
                    )}
                    {organicAdvise !== '' && (
                      <>
                        <Col sm={2} style={{ color: '#4FB872' }}>
                          <FormattedMessage id='ExpertView.Text4' />
                        </Col>
                        <Col sm={6} style={{ color: '#000000' }}>
                          {organicAdvise}
                        </Col>
                      </>
                    )}
                  </Row>
                  <br />
                  <Row style={{ padding: '0px' }}>
                    <>
                      <Col sm={2} style={{ color: '#4FB872' }}>
                        <FormattedMessage id='ExpertView.Text5' />
                      </Col>
                      <Col sm={2} style={{ color: '#000000' }}>
                        No description
                      </Col>
                    </>
                    {ipmMeasures !== null && ipmMeasures !== '' && (
                      <>
                        <Col sm={2} style={{ color: '#4FB872' }}>
                          <FormattedMessage id='ExpertView.Text16' />
                        </Col>
                        <Col sm={6} style={{ color: '#000000' }}>
                          {ipmMeasures}
                        </Col>
                      </>
                    )}
                  </Row>
                  <br />
                </Container>
              </div>
              <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '2px' }} />
              <div>
                <p style={{ color: '#696969', fontSize: '25px', paddingLeft: '70px' }}>
                  <FormattedMessage id='ExpertView.Text6' />
                  <i
                    className='fas fa-angle-down'
                    onClick={onClickAngleDownSymptom}
                    style={{ fontSize: '30px', color: '#C4C4C4', float: 'right', paddingRight: '30px' }}
                  ></i>
                </p>
                {showTextSymptom ? <Showsymptom /> : null}
                <br />
              </div>
              <br />
              <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '2px' }} />
              <br />
            </div>
          </Col>
          <Col sm={3} style={{ padding: '0px' }}>
            <Col style={{ padding: '0px' }}>
              {/* <Card border='dark'> */}
              <div className='expertcard'>
                <Card.Header style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                  <FormattedMessage id='ExpertDelete.Text2' />
                </Card.Header>
                {diseaseFilter.map(function (i: any) {
                  return (
                    <div style={{ textAlign: 'center', height: '44px' }}>
                      <div onClick={() => handleClick(i)} style={{ cursor: 'pointer' }}>
                        {i.chemical_name}
                      </div>
                      <hr style={{ border: '1px solid #C4C4C4' }} />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  };
  const ShowProblemAdd = () => {
    const [backGroundColorView, setBackGroundColorView] = useState('white');
    const [textColorView, setTextColorView] = useState('black');
    const [commonName, setCommonName] = useState('');
    const [chemicalAdvice, setChemicalAdvice] = useState('');
    const [scientificName, setScientificName] = useState('');
    const [organicAdvice, setOrganicAdvice] = useState('');
    const [ipmMeasures, setIpmMeasures] = useState('');
    const [description, setDescription] = useState('');
    const [l1_sym, setl1_sym] = useState(props.l1_sym);
    const [l2_sym, setl2_sym] = useState(props.l2_sym);
    const [l3_sym, setl3_sym] = useState(props.l3_sym);
    const [dropdownSearch, setDropdownSearch] = useState('');
    const symptoms = l2_sym.concat(l3_sym);
    let [symptomsFilter, setSymptomsFilter] = useState(symptoms);
    const [symptom, setSymptom] = useState('');
    const [l2_symp, setl2_symp] = useState([
      {
        sid: 101,
        level: 2,
        parentId: 0,
        name: '',
        qn: '',
      },
    ]);

    const [disable, setDisable] = useState([false]);
    const [value, setValue] = useState(['Select Symptom']);
    function handleChangeName(newSymptomName: any, index: any) {
      l2_symp[index].name = newSymptomName;
      setl2_symp([...l2_symp]);
    }

    function handleChangeQn(newSymptomQn: any, index: any) {
      l2_symp[index].qn = newSymptomQn;
      setl2_symp([...l2_symp]);
    }
    function handleChangeLevel(newSymptomLevel: any, index: any) {
      l2_symp[index].level = newSymptomLevel;
      setl2_symp([...l2_symp]);
    }
    const onClickPlus = () => {
      const values = [...l2_symp];
      values.push({
        sid: 0,
        level: 2,
        parentId: 0,
        name: '',
        qn: '',
      });
      value.push('Select Symptom');
      disable.push(false);
      setValue([...value]);
      setDisable([...disable]);
      setl2_symp(values);
    };
    const onClickMinus = (i: any) => {
      l2_symp.splice(i, 1);
      value.splice(i, 1);
      disable.splice(i, 1);
      setValue([...value]);
      setDisable([...disable]);
      setl2_symp([...l2_symp]);
    };
    function handleChangeSymptom(event: any, index: any) {
      value[index] = event.target.value;

      if (event.target.value == 'Select Symptom') {
        disable[index] = false;
      } else {
        disable[index] = true;
      }
      setValue([...value]);
    }
    function handleAddProblem() {
      console.log(commonName + ' ' + chemicalAdvice + ' ' + organicAdvice + ' ' + scientificName + ' ' + description + ' ' + ipmMeasures);
      console.log(l2_symp);
      console.log(value);
      const data = {
        description: description,
        locale_code: 'en_IN',
        chemicalName: commonName,
        cid: '3',
        scientificName: scientificName,
        organicAdvice: organicAdvice,
        chemicalAdvice: chemicalAdvice,
        ipmMeasures: ipmMeasures,
      };
      client
        .post('/apidisease', data, {
          headers: {
            locale_code: 'en_IN',
          },
        })
        .then(res => {
          console.log(res.data);
        });
    }
    function handleClickL1Symptom(s: any, symp: any, index: any) {
      l2_symp[index].parentId = s;
      setl2_symp([...l2_symp]);
      console.log(symp);
      setSymptom(symp);
      setDropdownSearch('');
      setSymptomsFilter([...symptoms]);
    }

    React.useEffect(() => {
      let c = cropContext + 1;
      client.get('/apicrops/' + c + '/symptom/level/2').then(res => {
        setl2_sym(res.data);
      });
      client.get('/apicrops/' + c + '/symptom/level/3').then(res => {
        setl3_sym(res.data);
      });
    }, [cropContext]);

    return (
      <Container fluid>
        <Row style={{ padding: '0px' }}>
          <Col sm={9}>
            <div>
              <div>
                <br />
                <Container fluid>
                  <Row style={{ padding: '0px' }}>
                    <Col sm={2}>
                      <Button
                        onClick={() => {
                          setBackGroundColorView('#4FB872');
                          setTextColorView('white');
                          handleViewClick();
                        }}
                        style={{
                          backgroundColor: backGroundColorView,
                          borderColor: 'black',
                          borderStyle: 'solid',
                          borderRadius: '15px',
                          width: '125px',
                          color: textColorView,
                          fontSize: '25px',
                        }}
                      >
                        <FormattedMessage id='View' />
                      </Button>
                    </Col>
                    <Col sm={2}>
                      <Button
                        onClick={handleAddProblem}
                        style={{
                          backgroundColor: '#4FB872',
                          borderColor: 'black',
                          borderStyle: 'solid',
                          borderRadius: '15px',
                          width: '125px',
                          color: 'white',
                          fontSize: '25px',
                        }}
                      >
                        <FormattedMessage id='ExpertAdd.Text6' />
                      </Button>
                    </Col>
                    <Col sm={1}>
                      <EditIcon
                        onClick={handleEditClick}
                        style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '50px' }}
                      />
                    </Col>
                    <Col sm={1}>
                      <DeleteIcon
                        onClick={handleDeleteClick}
                        style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '48px' }}
                      />
                    </Col>
                  </Row>
                  <br />
                </Container>
              </div>
              <hr style={{ color: '#C4C4C4', backgroundColor: '#C4C4C4', height: '1px' }} />
              <Container>
                <Row style={{ padding: '0px' }}>
                  <Col style={{ color: '#4FB872' }}>
                    <FormattedMessage id='ExpertView.Text1' />
                  </Col>
                  <Col style={{ color: '#000000' }}>
                    <input type='text' value={commonName} onChange={e => setCommonName(e.target.value)} />
                  </Col>
                  <Col style={{ color: '#4FB872' }}>
                    <FormattedMessage id='ExpertView.Text2' />
                  </Col>
                  <Col style={{ color: '#000000' }}>
                    <input type='text' value={chemicalAdvice} onChange={e => setChemicalAdvice(e.target.value)} />
                  </Col>
                </Row>
                <br />
                <Row style={{ padding: '0px' }}>
                  <Col style={{ color: '#4FB872' }}>
                    <FormattedMessage id='ExpertView.Text3' />
                  </Col>
                  <Col style={{ color: '#000000' }}>
                    <input type='text' value={scientificName} onChange={e => setScientificName(e.target.value)} />
                  </Col>
                  <Col style={{ color: '#4FB872' }}>
                    <FormattedMessage id='ExpertView.Text4' />
                  </Col>
                  <Col style={{ color: '#000000' }}>
                    <input type='text' value={organicAdvice} onChange={e => setOrganicAdvice(e.target.value)} />
                  </Col>
                </Row>
                <br />
                <Row style={{ padding: '0px' }}>
                  <Col style={{ color: '#4FB872' }}>
                    <FormattedMessage id='ExpertView.Text5' />
                  </Col>
                  <Col style={{ color: '#000000' }}>
                    <input type='text' value={description} onChange={e => setDescription(e.target.value)} />
                  </Col>
                  <Col style={{ color: '#4FB872' }}>
                    <FormattedMessage id='ExpertView.Text16' />
                  </Col>
                  <Col style={{ color: '#000000' }}>
                    <input type='text' value={ipmMeasures} onChange={e => setIpmMeasures(e.target.value)} />
                  </Col>
                </Row>
                <br />
              </Container>
              <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '2px' }} />
              <div>
                <p style={{ color: '#696969', fontSize: '25px', paddingLeft: '70px' }}>
                  <FormattedMessage id='ExpertEdit.Text1' />
                </p>
                <br />
                {l2_symp.map((l2_symp, index) => {
                  return (
                    <>
                      <Container style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                        <br />
                        <Row style={{ padding: '0px' }}>
                          <Col style={{ color: '#4FB872' }}>
                            <FormattedMessage id='ExpertAdd.Text1' />
                          </Col>
                          <Col style={{ color: '#000000' }}>
                            <select
                              style={{ overflowY: 'scroll', width: '250px', overflowX: 'scroll' }}
                              value={value[index]}
                              onChange={event => handleChangeSymptom(event, index)}
                            >
                              <option>Select Symptom</option>
                              {symptomsFilter.map(function (i: any) {
                                return <option key={i.sid}>{i.name}</option>;
                              })}
                            </select>
                          </Col>
                          <Col style={{ color: '#4FB872' }}>
                            <FormattedMessage id='ExpertAdd.Text2' />
                          </Col>
                          <Col style={{ color: '#000000' }}>
                            <input
                              type='text'
                              value={l2_symp.name}
                              onChange={e => handleChangeName(e.target.value, index)}
                              disabled={disable[index]}
                            />
                          </Col>
                        </Row>
                        <br />
                        <Row style={{ padding: '0px' }}>
                          <Col style={{ color: '#4FB872' }}>
                            <FormattedMessage id='ExpertAdd.Text3' />
                          </Col>
                          <Col style={{ color: '#000000' }}>
                            <select name='L1Symptom' style={{ width: '250px' }} disabled={disable[index]}>
                              <option>Select L1 Symptom</option>
                              {l1_sym.map(function (i: any) {
                                return (
                                  <option key={i.sid} onClick={() => handleClickL1Symptom(i.sid, i.name, index)}>
                                    {i.name}
                                  </option>
                                );
                              })}
                            </select>
                          </Col>
                          <Col style={{ color: '#4FB872' }}>
                            <FormattedMessage id='ExpertAdd.Text4' />
                          </Col>
                          <Col style={{ color: '#000000' }}>
                            <input
                              type='text'
                              value={l2_symp.qn}
                              onChange={e => handleChangeQn(e.target.value, index)}
                              disabled={disable[index]}
                            />
                          </Col>
                        </Row>
                        <br />
                        <Row style={{ padding: '0px' }}>
                          <Col style={{ color: '#4FB872' }}>
                            <FormattedMessage id='ExpertAdd.Text5' />
                          </Col>
                          <Col style={{ color: '#000000' }}>
                            <select
                              name='Level'
                              style={{ width: '250px' }}
                              onChange={e => handleChangeLevel(e.target.value, index)}
                              disabled={disable[index]}
                            >
                              <option>Select Level</option>
                              <option>L2</option>
                              <option>L3</option>
                            </select>
                          </Col>
                          <Col style={{ color: '#000000' }}>{''}</Col>
                          <Col>
                            {' '}
                            <div style={{ marginLeft: '224px' }} onClick={() => onClickMinus(index)}>
                              {' '}
                              <DeleteIcon style={{ color: '#696969' }} />{' '}
                            </div>
                          </Col>
                        </Row>
                        <br />
                      </Container>
                      <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '2px', width: '95%' }} />
                    </>
                  );
                })}
                <i
                  className='fas fa-plus'
                  style={{ fontSize: '14px', color: '#696969', float: 'right', paddingRight: '48px' }}
                  onClick={onClickPlus}
                >
                  &nbsp;&nbsp;
                  <FormattedMessage id='Add' />
                </i>
                <br />
                <br />
              </div>
            </div>
          </Col>
          <Col sm={3} style={{ padding: '0px' }}>
            <Col style={{ padding: '0px' }}>
              <div className='expertcard'>
                <Card.Header style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                  <FormattedMessage id='ExpertDelete.Text2' />
                </Card.Header>
                {disease.map(function (i: any) {
                  return (
                    <div style={{ textAlign: 'center', height: '44px' }}>
                      <div>{i.chemical_name}</div>
                      <hr style={{ border: '1px solid #C4C4C4' }} />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  };
  const ShowProblemEdit = () => {
    const l1_sym = props.l1_sym;
    const l2_sym = props.l2_sym;

    const [backGroundColorView, setBackGroundColorView] = useState('white');
    const [textColorView, setTextColorView] = useState('black');
    const [diseaseId, setDiseaseId] = useState(disease[0].disId);
    const [commonName, setCommonName] = useState(disease[0].chemical_name);
    const [chemicalAdvice, setChemicalAdvice] = useState(disease[0].chemicalAdvice);
    const [scientificName, setScientificName] = useState(disease[0].scientific_name);
    const [organicAdvice, setOrganicAdvice] = useState(disease[0].organiceAdvice);
    const [ipmMeasures, setIpmMeasures] = useState(disease[0].ipmMeasures);
    const [symptomsData, setSymptomsData] = useState([
      {
        level: 0,
        name: '',
        parentId: 0,
        qn: '',
        sid: 0,
      },
    ]);
    const [symptomsDatae1, setSymptomsDatae1] = useState([
      {
        level: 0,
        name: 'hello',
        parentId: 0,
        qn: '',
        sid: 0,
      },
    ]);
    const [dropdownSearch, setDropdownSearch] = useState('');
    let [diseaseFilter, setDiseaseFilter] = useState(disease);
    let [count, setCount] = useState(0);
    React.useEffect(() => {
      client
        .get('apidisease/' + diseaseId + '/symptoms', {
          headers: {
            'Accept-Language': myContext?.locale + '_' + 'IN',
          },
        })
        .then(res => {
          setSymptomsData(res.data);
          // console.log(res.data)
        });
      client.get('apidisease/' + diseaseId + '/symptoms').then(res => {
        setSymptomsDatae1(res.data);
      });
    }, [diseaseId, myContext?.locale]);
    function handleClick(d: any) {
      for (let i in disease) {
        if (disease[i].disId == d) {
          setCommonName(disease[i].chemical_name);
          setChemicalAdvice(disease[i].chemicalAdvice);
          setScientificName(disease[i].scientific_name);
          setOrganicAdvice(disease[i].organiceAdvice);
          setIpmMeasures(disease[i].ipmMeasures);
          setDiseaseId(d);
        }
      }
      setDropdownSearch('');
      setDiseaseFilter([...disease]);
    }
    function handleDropdownSearch(searchString: any) {
      setDropdownSearch(searchString);
      searchString = searchString.trim().toLowerCase();
      if (searchString.length > 0) {
        diseaseFilter = disease.filter(function (i: any) {
          return i.chemical_name.toLowerCase().match(searchString);
        });
      } else {
        diseaseFilter = [...disease];
      }
      setDiseaseFilter(diseaseFilter);
    }
    const onClickPlus = () => {
      count += 1;
      setCount(count);
      const values = [...symptomsData];
      values.push({
        level: 0,
        name: '',
        parentId: 0,
        qn: '',
        sid: count,
      });
      setSymptomsData([...values]);
    };
    const onClickMinus = (i: any) => {
      const values = [...symptomsData];
      console.log(values);
      values.splice(i, 1);
      console.log(values);
      setSymptomsData([...values]);
    };
    function handleChangeName(newSymptomName: any, index: any) {
      symptomsData[index].name = newSymptomName;
      setSymptomsData([...symptomsData]);
    }

    function handleChangeQn(newSymptomQn: any, index: any) {
      symptomsData[index].qn = newSymptomQn;
      setSymptomsData([...symptomsData]);
    }
    function handleEdit() {
      console.log(commonName);
      console.log(scientificName);
      console.log(chemicalAdvice);
      console.log(organicAdvice);
      console.log(ipmMeasures);
      console.log(symptomsData);
    }
    return (
      <Container fluid>
        <Row style={{ padding: '0px' }}>
          <Col sm={9}>
            <div>
              <div>
                <br />
                <Container fluid>
                  <Row style={{ padding: '0px' }}>
                    <Col>
                      <Button
                        onClick={() => {
                          setBackGroundColorView('#4FB872');
                          setTextColorView('white');
                          handleViewClick();
                        }}
                        style={{
                          backgroundColor: backGroundColorView,
                          borderColor: 'black',
                          borderStyle: 'solid',
                          borderRadius: '15px',
                          width: '125px',
                          color: textColorView,
                          fontSize: '25px',
                        }}
                      >
                        <FormattedMessage id='View' />
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        onClick={handleEdit}
                        style={{
                          backgroundColor: '#4FB872',
                          borderColor: 'black',
                          borderStyle: 'solid',
                          borderRadius: '15px',
                          width: '125px',
                          color: 'white',
                          fontSize: '25px',
                        }}
                      >
                        <FormattedMessage id='Edit' />
                      </Button>
                    </Col>
                    <Col>
                      <AddIcon
                        onClick={handleAddClick}
                        style={{ fontSize: '45px', color: '#696969', float: 'right', marginRight: '52px', marginTop: '-5px' }}
                      />
                    </Col>
                    <Col>
                      <DeleteIcon
                        onClick={handleDeleteClick}
                        style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '48px' }}
                      />
                    </Col>
                    <Col>
                      {/* <Dropdown>
                        <Dropdown.Toggle
                          id='dropdown-custom-components'
                          style={{ width: '405px', backgroundColor: '#D5DCED', borderColor: '#D5DCED', color: '#000000' }}
                        >
                          Search Problem
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ height: '150px', overflowY: 'scroll', width: '405px' }}>
                          <input
                            type='text'
                            value={dropdownSearch}
                            placeholder='search problem...'
                            onChange={e => handleDropdownSearch(e.target.value)}
                          />
                          {diseaseFilter.map(function (i: any) {
                            return (
                              <Dropdown.Item key={i.disId} onClick={() => handleClick(i.disId)}>
                                {i.chemical_name}
                              </Dropdown.Item>
                            );
                          })}
                        </Dropdown.Menu>
                      </Dropdown> */}
                    </Col>
                  </Row>
                </Container>
                <br />
              </div>
              <hr style={{ color: '#C4C4C4', backgroundColor: '#C4C4C4', height: '1px' }} />
              <Container fluid>
                <Row style={{ padding: '0px' }}>
                  <Col sm={2} style={{ color: '#4FB872' }}>
                    <FormattedMessage id='ExpertView.Text1' />
                  </Col>
                  <Col sm={3} style={{ color: '#000000' }}>
                    <input type='text' value={commonName} onChange={e => setCommonName(e.target.value)} />
                  </Col>
                  <Col sm={2} style={{ color: '#4FB872' }}>
                    <FormattedMessage id='ExpertView.Text2' />
                  </Col>
                  <Col sm={5} style={{ color: '#000000' }}>
                    <textarea style={{ width: '440px' }} value={chemicalAdvice} onChange={e => setChemicalAdvice(e.target.value)} />
                  </Col>
                </Row>
                <br />
                <Row style={{ padding: '0px' }}>
                  <Col sm={2} style={{ color: '#4FB872' }}>
                    <FormattedMessage id='ExpertView.Text3' />
                  </Col>
                  <Col sm={3} style={{ color: '#000000' }}>
                    <input type='text' value={scientificName} onChange={e => setScientificName(e.target.value)} />
                  </Col>
                  <Col sm={2} style={{ color: '#4FB872' }}>
                    <FormattedMessage id='ExpertView.Text4' />
                  </Col>
                  <Col sm={5} style={{ color: '#000000' }}>
                    <textarea style={{ width: '440px' }} value={organicAdvice} onChange={e => setOrganicAdvice(e.target.value)} />
                  </Col>
                </Row>
                <br />
                <Row style={{ padding: '0px' }}>
                  <Col sm={2} style={{ color: '#4FB872' }}>
                    <FormattedMessage id='ExpertView.Text5' />
                  </Col>
                  <Col sm={3} style={{ color: '#000000' }}>
                    No description
                  </Col>
                  <Col sm={2} style={{ color: '#4FB872' }}>
                    <FormattedMessage id='ExpertView.Text16' />
                  </Col>
                  <Col sm={5} style={{ color: '#000000' }}>
                    <textarea style={{ width: '440px' }} value={ipmMeasures} onChange={e => setIpmMeasures(e.target.value)} />
                  </Col>
                </Row>
                <br />
              </Container>
              <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '2px' }} />
              <div>
                <p style={{ color: '#696969', fontSize: '25px', paddingLeft: '70px' }}>
                  <FormattedMessage id='ExpertEdit.Text1' />
                </p>
                <br />
                <Container style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                  <Row style={{ padding: '0px' }}>
                    <Col style={{ color: '#000000', fontSize: '22px' }}>
                      <b>
                        <FormattedMessage id='ExpertView.Text7' />
                      </b>
                    </Col>
                    <Col style={{ color: '#000000', fontSize: '22px' }}>
                      <b>
                        <FormattedMessage id='ExpertView.Text9' />
                      </b>
                    </Col>
                    <Col style={{ color: '#000000', fontSize: '22px' }}>
                      <b>
                        <FormattedMessage id='ExpertView.Text10' />
                      </b>
                    </Col>
                  </Row>
                  <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '1px' }} />
                  {symptomsData.map(function (i: any, index: any) {
                    let parentSym = '';
                    if (i.level == 2) {
                      for (let l1 in l1_sym) {
                        if (i.parentId == l1_sym[l1].sid) {
                          parentSym = l1_sym[l1].name;
                        }
                      }
                    } else {
                      for (let l2 in l2_sym) {
                        if (i.parentId == l2_sym[l2].sid) {
                          for (let l1 in l1_sym) {
                            if (l2_sym[l2].parentId == l1_sym[l1].sid) {
                              parentSym = l1_sym[l1].name;
                            }
                          }
                        }
                      }
                    }
                    return (
                      <>
                        {/* <Row>
                          <Col>{symptomsData1[index].name}</Col>
                        </Row> */}
                        <Row key={i.sid} style={{ padding: '0px' }}x>
                          <Col style={{ color: '#000000', fontSize: '20px' }}>
                            {/* <p>{symptomsDatae1[0].name}</p> */}
                            <input type='text' value={i.name} onChange={e => handleChangeName(e.target.value, index)} />
                          </Col>
                          {/* <Col style={{color:"#000000",fontSize:"20px"}}>L{i.level}</Col> */}
                          <Col style={{ color: '#000000', fontSize: '20px' }}>
                            <input type='text' value={parentSym} />
                          </Col>
                          <Col style={{ color: '#000000', fontSize: '20px' }}>
                            <input type='text' value={i.qn} onChange={e => handleChangeQn(e.target.value, index)} />
                          </Col>
                          <>
                            <div onClick={() => onClickMinus(index)}>
                              <DeleteIcon style={{ float: 'right', color: '#696969', marginRight: '1px', fontSize: '28px' }} />
                            </div>
                          </>
                          <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '1px', width: '97%' }} />
                        </Row>
                      </>
                    );
                  })}
                </Container>
                <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '2px' }} />
                <div>
                  <i
                    className='fas fa-plus'
                    onClick={onClickPlus}
                    style={{ fontSize: '14px', color: '#696969', float: 'right', paddingRight: '48px' }}
                  >
                    &nbsp;&nbsp;
                    <FormattedMessage id='Add' />
                  </i>
                </div>
                <br />
                <br />
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <Col style={{ padding: '0px' }}>
              <div className='expertcard'>
                <Card.Header style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                  <FormattedMessage id='ExpertDelete.Text2' />
                </Card.Header>
                {disease.map(function (i: any) {
                  return (
                    <div style={{ textAlign: 'center', height: '44px' }}>
                      <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          handleClick(i.disId);
                        }}
                      >
                        {i.chemical_name}
                      </div>
                      <hr style={{ border: '1px solid #C4C4C4' }} />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  };
  const ShowProblemDelete = () => {
    const [backGroundColorView, setBackGroundColorView] = useState('white');
    const [textColorView, setTextColorView] = useState('black');
    const [disease, setDisease] = useState([
      {
        chemical_name: '',
      },
    ]);
    // const [newDisease, setNewDisease] = useState(disease);
    function handleDelete(i: any) {
      disease.splice(i, 1);
      console.log(disease);
      setDisease([...disease]);
    }
    React.useEffect(() => {
      let c = cropContext + 1;
      client
        .get('apicrops/' + c + '/disease', {
          headers: {
            'Accept-Language': myContext?.locale + '_' + 'IN',
          },
        })
        .then(res => {
          setDisease(res.data);
        });
    }, [cropContext, myContext?.locale]);
    return (
      <div>
        <Button
          onClick={() => {
            setBackGroundColorView('#4FB872');
            setTextColorView('white');
            handleViewClick();
          }}
          style={{
            backgroundColor: backGroundColorView,
            borderColor: 'black',
            borderStyle: 'solid',
            borderRadius: '15px',
            width: '125px',
            color: textColorView,
            fontSize: '25px',
            float: 'right',
            marginRight: '30px',
          }}
        >
          <FormattedMessage id='View' />
        </Button>
        <Col>
          <AddIcon
            onClick={handleAddClick}
            style={{ fontSize: '45px', color: '#696969', float: 'right', marginRight: '52px', marginTop: '-5px' }}
          />
        </Col>
        <Col>
          <EditIcon onClick={handleEditClick} style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '50px' }} />
        </Col>
        <div>
          <br />
          <br />
        </div>
        <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '2px' }} />
        <br />

        <Container style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <p style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', fontSize: '33px', fontWeight: 'bold' }}>
            <FormattedMessage id='ExpertDelete.Text2' />
          </p>
          <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '1px', width: '100%' }} />
          {disease.map(function (i: any, index: any) {
            return (
              <Row>
                <Col style={{ fontSize: '20px', fontWeight: 'bold' }}>{i.chemical_name}</Col>
                <Col>
                  <div onClick={() => handleDelete(index)}>
                    <DeleteIcon style={{ fontSize: '25px', color: '#ff0000' }} />
                  </div>
                </Col>
                <hr style={{ color: '#C4C4C4', backgroundColor: '#C4C4C4', height: '1px', width: '97%' }} />
              </Row>
            );
          })}
        </Container>
      </div>
    );
  };

  // useEffect(() => {
  //   client
  //     .get('apidisease/' + diseaseId + '/symptoms')
  //     .then(res => {
  //       setSymptomsDatae1(res.data);
  //       // console.log(res.data)
  //     });
  // }, [diseaseId])

  return (
    <div>
      {showContentProblemView ? <ShowProblemView /> : null}
      {showContentProblemAdd ? <ShowProblemAdd /> : null}
      {showContentProblemEdit ? <ShowProblemEdit /> : null}
      {showContentProblemDelete ? <ShowProblemDelete /> : null}
    </div>
  );
};

export default ExpertProblemPage2;
