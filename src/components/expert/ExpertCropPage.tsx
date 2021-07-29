import React, { useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
// import {Button} from 'react-bootstrap';
import client from '../../backend/client';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { CropContext } from './ExpertSideNav';
import { ctxt } from '../../utils/AppContext';
import { QueuePlayNextTwoTone } from '@material-ui/icons';

const ExpertCropPage = () => {
  const myContext = useContext(ctxt);

  const [showContentCropView, setShowContentCropView] = useState(true);
  const [showContentCropAdd, setShowContentCropAdd] = useState(false);
  const [showContentCropEdit, setShowContentCropEdit] = useState(false);
  const [showContentCropDelete, setShowContentCropDelete] = useState(false);
  const addImage = '../../../../assets/images/addImage.png';
  const cottonImage = '../../../../assets/images/cotton.png';
  const paddyImage = '../../../../assets/images/wheat.png';
  const cropContext = useContext(CropContext);

  let [l1_sym, setl1_sym] = useState([
    {
      sid: 0,
      level: 1,
      parentId: -1,
      name: '',
      qn: '',
    },
  ]);
  let [crop, setCrop] = useState([
    {
      cid: '1',
      name: '',
      imageUrl: '',
      image: cottonImage,
    },
    {
      cid: '2',
      name: '',
      imageUrl: '',
      image: paddyImage,
    },
  ]);
  const [disease, setDisease] = useState([]);
  const [crop1, setCrop1] = useState([
    {
      cid: 0,
      name: '',
    },
  ]);
  let [l1_syme1, setl1_syme1] = useState([
    {
      name: '',
      qn: ',',
    },
  ]);

  function handleViewClick() {
    setShowContentCropView(true);
    setShowContentCropAdd(false);
    setShowContentCropEdit(false);
    setShowContentCropDelete(false);
  }

  function handleAddClick() {
    setShowContentCropView(false);
    setShowContentCropAdd(true);
    setShowContentCropEdit(false);
    setShowContentCropDelete(false);
  }

  function handleEditClick() {
    setShowContentCropView(false);
    setShowContentCropAdd(false);
    setShowContentCropEdit(true);
    setShowContentCropDelete(false);
  }

  function handleDeleteClick() {
    setShowContentCropView(false);
    setShowContentCropAdd(false);
    setShowContentCropEdit(false);
    setShowContentCropDelete(true);
  }

  const ShowCropView = () => {
    const [backGroundColorView, setBackGroundColorView] = useState('white');
    const [textColorView, setTextColorView] = useState('black');
    const [showTextSymptom, setShowTextSymptom] = useState(true);
    const [showTextDisease, setShowTextDisease] = useState(true);

    // console.log(crop[1].name)
    const onClickAngleDownSymptom = () => {
      if (showTextSymptom == true) {
        setShowTextSymptom(false);
      } else {
        setShowTextSymptom(true);
      }
    };
    const onClickAngleDownDisease = () => {
      if (showTextDisease == true) {
        setShowTextDisease(false);
      } else {
        setShowTextDisease(true);
      }
    };

    const Showsymptom = () => {
      return (
        <Container style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <Row>
            <Col style={{ color: '#000000', fontSize: '22px' }}>
              <b>
                <FormattedMessage id='ExpertView.Text7' />
              </b>
            </Col>
            <Col style={{ color: '#000000', fontSize: '22px' }}>
              <b>
                <FormattedMessage id='ExpertView.Text5' />
              </b>
            </Col>
            <Col style={{ color: '#000000', fontSize: '22px' }}>
              <b>
                <FormattedMessage id='ExpertView.Text10' />
              </b>
            </Col>
          </Row>
          <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '1px' }} />
          {l1_sym.map(function (i: any) {
            return (
              <Row>
                <Col style={{ color: '#000000', fontSize: '20px' }}>{i.name}</Col>
                <Col style={{ color: '#000000', fontSize: '20px' }}>{i.name}</Col>
                <Col style={{ color: '#000000', fontSize: '20px' }}>{i.qn}</Col>
                <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '1px', width: '97%' }} />
              </Row>
            );
          })}
        </Container>
      );
    };
    const Showdisease = () => {
      return (
        <div>
          {disease.map(function (i: any) {
            return <li style={{ listStyle: 'none', color: 'black', fontSize: '20px', paddingLeft: '60px' }}>{i.chemical_name}</li>;
          })}
        </div>
      );
    };

    return (
      <div>
        <div>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Button onClick={()=>{setBackGroundColorView("#4FB872");setTextColorView('white')}} style={{backgroundColor:backGroundColorView,borderColor:"black",borderStyle:"solid",borderRadius:"15px",width:"125px",color:textColorView,fontSize:"25px"}} href="/home"><FormattedMessage id="View"/></Button> */}
          {/* <Button onClick={()=>{handleViewClick()}} style={{backgroundColor:"#4FB872",borderColor:"black",borderStyle:"solid",borderRadius:"15px",width:"125px",color:"white",fontSize:"25px"}}><FormattedMessage id="View"/></Button> */}
          <DeleteIcon onClick={handleDeleteClick} style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '50px' }} />
          <EditIcon onClick={handleEditClick} style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '50px' }} />
          <AddIcon
            onClick={handleAddClick}
            style={{ fontSize: '45px', color: '#696969', float: 'right', marginRight: '52px', marginTop: '-5px' }}
          />
          {/* <AddIcon style={{fontSize:"45px",color:"#696969",float:'right',marginRight:"52px",marginTop:"-5px"}}/> */}
        </div>
        <hr style={{ color: '#C4C4C4', backgroundColor: '#C4C4C4', height: '1px' }} />
        <Container>
          <br />
          <Row>
            <Col style={{ color: '#4FB872' }}>
              <FormattedMessage id='ExpertView.Text12' />
            </Col>
            <Col style={{ color: '#000000' }}>{crop[cropContext].name}</Col>
          </Row>
          <br />
          <Row>
            <Col style={{ color: '#4FB872' }}>
              <FormattedMessage id='ExpertView.Text13' />
            </Col>
            <Col style={{ color: '#000000' }}>{crop[cropContext].name}</Col>
          </Row>
          <br />
        </Container>
        <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '2px' }} />
        <div>
          <p style={{ color: '#696969', fontSize: '25px', paddingLeft: '70px' }}>
            <FormattedMessage id='ExpertView.Text14' />
            <i
              onClick={onClickAngleDownSymptom}
              className='fas fa-angle-down'
              style={{ fontSize: '30px', color: '#C4C4C4', float: 'right', paddingRight: '30px' }}
            ></i>
          </p>
          {showTextSymptom ? <Showsymptom /> : null}
          <br />
          <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '2px' }} />
          <p style={{ color: '#696969', fontSize: '25px', paddingLeft: '70px' }}>
            <FormattedMessage id='ExpertView.Text15' />
            <i
              onClick={onClickAngleDownDisease}
              className='fas fa-angle-down'
              style={{ fontSize: '30px', color: '#C4C4C4', float: 'right', paddingRight: '30px' }}
            ></i>
          </p>
          {showTextDisease ? <Showdisease /> : null}
          <br />
        </div>
      </div>
    );
  };

  const ShowCropAdd = () => {
    const [backGroundColorView, setBackGroundColorView] = useState('white');
    const [textColorView, setTextColorView] = useState('black');
    const [cropName, setCropName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [cropDescription, setCropDescription] = useState('');
    const [file, setFile] = useState(addImage);
    const [filename, setFileName] = useState('');
    const useStyles = makeStyles((theme: Theme) =>
      createStyles({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        input: {
          display: 'none',
        },
      })
    );
    const classes = useStyles();
    const handleImage = (event: any) => {
      setFile(URL.createObjectURL(event.target.files[0]));
      // setFile(event.target.files[0])
      setFileName(event.target.files[0].name);
      // console.log(event.target.files[0].name)
    };
    // const inputRef = useRef<HTMLInputElement>(null);

    // const handleUpload = (event:any) => {
    //   inputRef.current?.click();
    //   setFile(URL.createObjectURL(event.target.files[0]))
    // };
    const [l1_symAdd1, setl1_symAdd1] = useState([
      {
        sid: 0,
        level: 1,
        parentId: -1,
        name: '',
        qn: '',
      },
    ]);

    function handleChangeName(newSymptomName: any, index: any) {
      l1_symAdd1[index].name = newSymptomName;
      setl1_symAdd1([...l1_symAdd1]);
    }

    function handleChangeDescription(newSymptomDescription: any, index: any) {
      l1_symAdd1[index].name = newSymptomDescription;
      setl1_symAdd1([...l1_symAdd1]);
    }

    function handleChangeQn(newSymptomQn: any, index: any) {
      l1_symAdd1[index].qn = newSymptomQn;
      setl1_symAdd1([...l1_symAdd1]);
    }

    const onClickPlus = () => {
      const values = [...l1_symAdd1];
      values.push({
        sid: 0,
        level: 1,
        parentId: -1,
        name: '',
        qn: '',
      });
      setl1_symAdd1(values);
    };
    const onClickMinus = (i: any) => {
      const values = [...l1_symAdd1];
      values.splice(i, 1);
      setl1_symAdd1(values);
    };

    function handleAddCrop() {
      console.log(cropName + ' ' + filename);
      const data = {
        name: cropName,
        imageUrl: filename,
        locale_code: 'en_IN',
        description: cropName,
      };

      client
        .post('/apicrops', data, {
          headers: {
            locale_code: 'en_IN',
          },
        })
        .then(res => {
          console.log(res.data);
        });

      let cropid = 0;
      for (let c1 in crop1) {
        cropid = crop1[c1].cid;
      }

      cropid = cropid + 1;

      const level = '1';
      console.log(level);
      console.log(l1_symAdd1);

      let i = 100;
      for (let l1 in l1_symAdd1) {
        i = i + 1;
        const dataSymptom = {
          level: 1,
          cid: cropid,
          image: null,
          local_id: '' + i + '',
          locale_code: 'en_IN',
          name: l1_symAdd1[l1].name,
          description: l1_symAdd1[l1].name,
          question: l1_symAdd1[l1].qn,
        };
        console.log(cropid);
        client
          .post(`/apisymptom/${cropid}`, dataSymptom, {
            headers: {
              locale_code: 'en_IN',
            },
          })
          .then(res => {
            console.log(res);
          });
      }
      setCropName('');
      setCropDescription('');
      setFile(addImage);
      setl1_symAdd1([
        {
          sid: 0,
          level: 1,
          parentId: -1,
          name: '',
          qn: '',
        },
      ]);
    }

    return (
      <div>
        <div>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Button onClick={()=>{setBackGroundColorView("#4FB872");setTextColorView('white')}} style={{backgroundColor:backGroundColorView,borderColor:"black",borderStyle:"solid",borderRadius:"15px",width:"220px",color:textColorView,fontSize:"25px"}}><FormattedMessage id="ExpertAdd.Text6"/></Button> */}
          <Button
            onClick={() => {
              handleViewClick();
            }}
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
            <FormattedMessage id='View' />
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            onClick={handleAddCrop}
            style={{
              backgroundColor: '#4FB872',
              borderColor: 'black',
              borderStyle: 'solid',
              borderRadius: '15px',
              width: '220px',
              color: 'white',
              fontSize: '25px',
            }}
          >
            <FormattedMessage id='ExpertAdd.Text6' />
          </Button>
          <DeleteIcon onClick={handleDeleteClick} style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '50px' }} />
          <EditIcon onClick={handleEditClick} style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '50px' }} />
        </div>
        <hr style={{ color: '#C4C4C4', backgroundColor: '#C4C4C4', height: '1px' }} />
        <Container>
          <br />
          <Row>
            <Col style={{ color: '#4FB872' }}>
              <FormattedMessage id='ExpertView.Text12' />
            </Col>
            <Col style={{ color: '#000000' }}>
              <input type='text' value={cropName} onChange={e => setCropName(e.target.value)} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>{''}</Col>
            <Col>{''}</Col>
            <Col>{''}</Col>
            {/* <Col><i className="fas fa-plus" style={{fontSize:"14px",color:"#696969",float:'right',paddingRight:"48px"}}>&nbsp;&nbsp;<FormattedMessage id="AddImage"/></i></Col> */}
            {/* <Col> <Form.File label="Add Image" value = {imageUrl} onChange={(e:any) => setImageUrl(e.target.value)}/></Col> */}
            <>
              <div className={classes.root}>
                <img src={file} style={{ width: '100px', height: '100px', border: '0px solid black' }} />
                <input accept='image/*' onChange={handleImage} className={classes.input} id='contained-button-file' multiple type='file' />
                <label htmlFor='contained-button-file'>
                  <Button variant='contained' component='span' style={{ backgroundColor: '#4FB872', color: 'white', fontSize: '15px' }}>
                    Upload Image
                  </Button>
                </label>
              </div>
            </>
          </Row>
          <br />
          <Row>
            <Col style={{ color: '#4FB872' }}>
              <FormattedMessage id='ExpertView.Text13' />
            </Col>
            <Col style={{ color: '#000000' }}>
              <input type='text' value={cropDescription} onChange={e => setCropDescription(e.target.value)} />
            </Col>
          </Row>
          <br />
        </Container>
        <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '2px' }} />
        <div>
          <p style={{ color: '#696969', fontSize: '25px', paddingLeft: '70px' }}>
            <FormattedMessage id='ExpertView.Text14' />
          </p>
          {/* <br/> */}
          <Container style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            <Row>
              <Col style={{ color: '#000000', fontSize: '22px' }}>
                <b>
                  <FormattedMessage id='ExpertView.Text7' />
                </b>
              </Col>
              <Col style={{ color: '#000000', fontSize: '22px' }}>
                <b>
                  <FormattedMessage id='ExpertView.Text5' />
                </b>
              </Col>
              <Col style={{ color: '#000000', fontSize: '22px' }}>
                <b>
                  <FormattedMessage id='ExpertView.Text10' />
                </b>
              </Col>
            </Row>
            <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '1px' }} />
            <br />
            {l1_symAdd1.map((l1_symAdd1, index) => {
              return (
                <>
                  <Row>
                    <Col>
                      <input
                        type='text'
                        value={l1_symAdd1.name}
                        placeholder={'Enter Name'}
                        onChange={e => handleChangeName(e.target.value, index)}
                      />
                    </Col>
                    <Col>
                      <input
                        type='text'
                        value={l1_symAdd1.name}
                        placeholder={'Enter Description'}
                        onChange={e => handleChangeDescription(e.target.value, index)}
                      />
                    </Col>
                    <Col>
                      <input
                        type='text'
                        value={l1_symAdd1.qn}
                        placeholder={'Enter Question'}
                        onChange={e => handleChangeQn(e.target.value, index)}
                      />
                    </Col>
                    <>
                      {' '}
                      <div onClick={() => onClickMinus(index)}>
                        {' '}
                        <DeleteIcon style={{ color: '#696969' }} />{' '}
                      </div>
                    </>
                  </Row>
                  <br />
                </>
              );
            })}
          </Container>
          <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '2px' }} />
          <div>
            <i
              className='fas fa-plus'
              style={{ fontSize: '14px', color: '#696969', float: 'right', paddingRight: '48px' }}
              onClick={onClickPlus}
            >
              &nbsp;&nbsp;
              <FormattedMessage id='Add' />
            </i>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  };

  function ShowCropEdit() {
    const cotton = '../../../../assets/images/cotton.png';
    const paddy = '../../../../assets/images/wheat.png';
    const mirchi = '../../../../assets/images/wheat.png';
    const cropImages = [{ name: cotton }, { name: paddy }, { name: mirchi }];
    // const [backGroundColorView,setBackGroundColorView]=useState('white');
    // const [textColorView,setTextColorView]=useState('black');
    const [backGroundColorEdit, setBackGroundColorEdit] = useState('#4FB872');
    const [textColorEdit, setTextColorEdit] = useState('white');
    // let [change, setChange] = useState("Bolls Damage");
    let [l1_syme, setl1_syme] = useState(l1_sym);
    let [deletel1_syme, setDeletel1_syme] = useState([0]);
    const [deleteFlag, setDeleteFlag] = useState(false);
    let [addl1_syme, setAddl1_syme] = useState([
      {
        sid: 0,
        level: 1,
        parentId: -1,
        name: '',
        qn: '',
      },
    ]);
    const [addFlag, setAddFlag] = useState(false);
    let [count, setCount] = useState(0);
    const [file, setFile] = useState(cropImages[cropContext].name);
    const [fileName, setFileName] = useState(crop[cropContext].imageUrl);
    const [cropN, setCropN] = useState(crop[cropContext].name);
    // function handleCropChange(event: any) {
    //   crop[cropContext].name = event.target.value;
    //   setCrop([...crop]);
    // }

    const useStyles = makeStyles((theme: Theme) =>
      createStyles({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        input: {
          display: 'none',
        },
      })
    );

    const classes = useStyles();
    const handleImage = (event: any) => {
      setFile(URL.createObjectURL(event.target.files[0]));
      setFileName(event.target.files[0].name);
    };

    function handleChangeName(newSymptomName: any, index: any) {
      l1_syme[index].name = newSymptomName;
      setl1_syme([...l1_syme]);
    }

    function handleChangeDescription(newSymptomDescription: any, index: any) {
      l1_syme[index].name = newSymptomDescription;
      setl1_syme([...l1_syme]);
    }

    function handleChangeQn(newSymptomQn: any, index: any) {
      l1_syme[index].qn = newSymptomQn;
      setl1_syme([...l1_syme]);
    }

    const onClickPlus = () => {
      count += 1;
      setCount(count);
      const values = [...l1_syme];
      values.push({
        sid: count,
        level: 1,
        parentId: -1,
        name: '',
        qn: '',
      });
      setl1_syme([...values]);
      console.log(values);
      setAddFlag(true);
    };

    const onClickMinus = (i: any) => {
      const values = [...l1_syme];
      console.log(values);
      let demo = values.splice(i, 1);
      console.log(demo[0].sid);
      deletel1_syme.push(demo[0].sid);
      // console.log(values);
      setDeletel1_syme([...deletel1_syme]);
      setl1_syme([...values]);
      setDeleteFlag(true);
    };

    function handleEdit() {
      const data = {
        name: cropN,
        imageUrl: fileName,
        locale_code: 'en_IN',
        description: cropN,
      };

      // console.log(crop[cropContext].cid);

      // client
      //   .put(`/apicrops/${crop[cropContext].cid}`, data, {
      //     headers: {
      //       locale_code: 'en_IN',
      //     },
      //   })
      //   .then(res => {
      //     console.log(res);
      //   });
      if (deleteFlag == true) {
        deletel1_syme.shift();
        for (let l1 in deletel1_syme) {
          client.delete(`apisymptom/${crop[cropContext].cid}/${deletel1_syme[l1]}`).then(res => {
            console.log(res.data);
          });
          console.log(crop[cropContext].cid + ' ' + deletel1_syme[l1] + 'h');
        }
      }

      if (addFlag == true) {
        addl1_syme.shift();
        for (let l1 in addl1_syme) {
          console.log(crop[cropContext].cid + ' ' + addl1_syme[l1] + 's');
        }
      }

      for (let l1 in l1_syme) {
        // console.log(l1_syme[l1].qn);
        // console.log(crop[cropContext].cid);
        const dataSymptom = {
          level: 1,
          cid: crop[cropContext].cid,
          image: null,
          local_id: '' + l1_syme[l1].sid + '',
          locale_code: 'en_IN',
          name: l1_syme[l1].name,
          description: l1_syme[l1].name,
          question: l1_syme[l1].qn,
          pid: -1,
        };

        console.log(crop[cropContext].cid + ', ' + l1_syme[l1].sid);
        // client.delete(`apisymptom/${crop[cropContext].cid}/${l1_syme[l1].sid}`).then(res => {
        //   client
        //     .post(`/apisymptom/${crop[cropContext].cid}`, dataSymptom, {
        //       headers: {
        //         locale_code: 'en_IN',
        //       },
        //     })
        //     .then(res => {
        //       console.log(res);
        //     });
        // });

        // client
        //   .put(`/apisymptom/${crop[cropContext].cid}/${l1_syme[l1].sid}`, dataSymptom, {
        //     headers: {
        //       locale_code: 'en_IN',
        //     },
        //   })
        //   .then(res => {
        //     console.log(res);
        //   });
      }
    }

    return (
      <div className='editPage'>
        <div>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            onClick={handleViewClick}
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
            <FormattedMessage id='View' />
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            onClick={handleEdit}
            style={{
              backgroundColor: backGroundColorEdit,
              borderColor: 'black',
              borderStyle: 'solid',
              borderRadius: '15px',
              width: '125px',
              color: textColorEdit,
              fontSize: '25px',
            }}
          >
            <FormattedMessage id='Edit' />
          </Button>
          <DeleteIcon onClick={handleDeleteClick} style={{ float: 'right', color: '#696969', marginRight: '48px', fontSize: '36px' }} />
          <AddIcon
            onClick={handleAddClick}
            style={{ fontSize: '45px', color: '#696969', float: 'right', marginRight: '52px', marginTop: '-5px' }}
          />
        </div>
        <hr style={{ color: '#C4C4C4', backgroundColor: '#C4C4C4', height: '1px' }} />
        <Container fluid>
          <br />
          <Row style={{ padding: '0px' }}>
            {myContext?.locale != 'en' ? (
              <>
                <Col sm={2} style={{ color: '#4FB872' }}>
                  Crop
                </Col>
                <Col sm={3} style={{ color: '#000000' }}>
                  {crop1[cropContext].name}
                </Col>
              </>
            ) : null}
          </Row>
          <br />
          <Row style={{ padding: '0px' }}>
            <Col sm={2} style={{ color: '#4FB872' }}>
              <FormattedMessage id='ExpertView.Text12' />
            </Col>
            <Col sm={3} style={{ color: '#000000' }}>
              <input type='text' value={cropN} onChange={e => setCropN(e.target.value)} />
            </Col>
            <Col>{''}</Col>
            <Col>{''}</Col>
          </Row>
          <br />
          <Row style={{ padding: '0px' }}>
            {myContext?.locale != 'en' ? (
              <>
                <Col sm={2} style={{ color: '#4FB872' }}>
                  Crop
                </Col>
                <Col sm={3} style={{ color: '#000000' }}>
                  {crop1[cropContext].name}
                </Col>
              </>
            ) : null}
          </Row>
          <br />
          <Row style={{ padding: '0px' }}>
            <Col sm={2} style={{ color: '#4FB872' }}>
              <FormattedMessage id='ExpertView.Text13' />
            </Col>
            <Col sm={3} style={{ color: '#000000' }}>
              <input type='text' value={cropN} onChange={e => setCropN(e.target.value)} />
            </Col>
            <Col>
              <img src={file} style={{ width: '100px', height: '100px', float: 'right', marginRight: '10px' }} />
            </Col>
            <Col sm={1}>
              <div className={classes.root}>
                <input accept='image/*' className={classes.input} id='icon-button-file' type='file' onChange={handleImage} />
                <label htmlFor='icon-button-file'>
                  <IconButton color='primary' aria-label='upload picture' component='span'>
                    <EditIcon style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '10px' }} />
                  </IconButton>
                </label>
              </div>
            </Col>
          </Row>
        </Container>
        <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '2px' }} />
        <div>
          <p style={{ color: '#696969', fontSize: '25px', paddingLeft: '70px' }}>
            <FormattedMessage id='ExpertView.Text14' />
          </p>
          <Container style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            <Row style={{ padding: '0px' }}>
              <Col style={{ color: '#000000', fontSize: '22px' }}>
                <b>
                  <FormattedMessage id='ExpertView.Text7' />
                </b>
              </Col>
              <Col style={{ color: '#000000', fontSize: '22px' }}>
                <b>
                  <FormattedMessage id='ExpertView.Text5' />
                </b>
              </Col>
              <Col style={{ color: '#000000', fontSize: '22px' }}>
                <b>
                  <FormattedMessage id='ExpertView.Text10' />
                </b>
              </Col>
            </Row>
            <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '1px' }} />
            {l1_syme.map(function (i: any, index: any) {
              return (
                <>
                  {myContext?.locale != 'en' ? (
                    <>
                      <Row key={i.sid} style={{ padding: '0px' }}>
                        <Col style={{ color: '#000000', fontSize: '20px', textAlign: 'left' }}>{l1_syme1[index].name}</Col>
                        <Col style={{ color: '#000000', fontSize: '20px', textAlign: 'left' }}>{l1_syme1[index].name}</Col>
                        <Col style={{ color: '#000000', fontSize: '20px', textAlign: 'left' }}>{l1_syme1[index].qn}</Col>
                      </Row>
                      <hr />
                      <br />
                    </>
                  ) : null}
                  <Row key={i.sid} style={{ padding: '0px' }}>
                    <Col style={{ color: '#000000', fontSize: '20px', textAlign: 'left' }}>
                      <input type='text' value={i.name} onChange={e => handleChangeName(e.target.value, index)} />
                    </Col>
                    <Col style={{ color: '#000000', fontSize: '20px', textAlign: 'left' }}>
                      <input type='text' value={i.name} onChange={e => handleChangeDescription(e.target.value, index)} />
                    </Col>
                    <Col style={{ color: '#000000', fontSize: '20px', textAlign: 'left' }}>
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
    );
  }

  function ShowCropDelete() {
    const [crope, setCrope] = useState(crop);

    function handleDelete(i: any) {
      crope.splice(i, 1);
      console.log(crope);
      setCrop([...crope]);
    }

    return (
      <div>
        <br />
        <Button
          onClick={handleViewClick}
          style={{
            backgroundColor: '#4FB872',
            borderColor: 'black',
            borderStyle: 'solid',
            borderRadius: '15px',
            width: '125px',
            color: 'white',
            fontSize: '25px',
            float: 'right',
            marginRight: '30px',
          }}
        >
          <FormattedMessage id='View' />
        </Button>
        <EditIcon onClick={handleEditClick} style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '50px' }} />

        <AddIcon
          onClick={handleAddClick}
          style={{ fontSize: '45px', color: '#696969', float: 'right', marginRight: '52px', marginTop: '-5px' }}
        />
        <div>
          <br />
          <br />
        </div>
        <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '2px' }} />
        <br />
        <Container style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <p style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', fontSize: '33px', fontWeight: 'bold' }}>
            <FormattedMessage id='ExpertDelete.Text1' />
          </p>
          <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '1px', width: '100%' }} />
          {crop.map(function (i: any, index: any) {
            return (
              <Row>
                <Col style={{ fontSize: '20px', fontWeight: 'bold' }}>{i.name}</Col>
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
        <br />
      </div>
    );
  }

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
      .get('apicrops/' + c + '/disease', {
        headers: {
          'Accept-Language': myContext?.locale + '_' + 'IN',
        },
      })
      .then(res => {
        setDisease(res.data);
      });
    client
      .get('apicrops/', {
        headers: {
          'Accept-Language': myContext?.locale + '_' + 'IN',
        },
      })
      .then(res => {
        setCrop(res.data);
      });
    client.get('apicrops/').then(res => {
      setCrop1(res.data);
    });
    client.get('apicrops/' + c + '/symptom/level/1').then(res => {
      setl1_syme1(res.data);
    });
  }, [cropContext, , myContext?.locale]);

  return (
    <div>
      {showContentCropView ? <ShowCropView /> : null}
      {showContentCropAdd ? <ShowCropAdd /> : null}
      {showContentCropEdit ? <ShowCropEdit /> : null}
      {showContentCropDelete ? <ShowCropDelete /> : null}
    </div>
  );
};

export default ExpertCropPage;
