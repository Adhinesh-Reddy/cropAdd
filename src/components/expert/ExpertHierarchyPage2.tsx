import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import ExpertTree from './ExpertTree';

const ExpertHierarchyPage2 = (props: any) => {
  const l1_sym = props.l1_sym;
  const l2_sym = props.l2_sym;
  const l3_sym = props.l3_sym;
  const [showContentHierarchyView, setShowContentHierarchyView] = useState(true);
  const [showContentHierarchyEdit, setShowContentHierarchyEdit] = useState(false);
  const [showContentHierarchyTree, setShowContentHierarchyTree] = useState(false);

  function handleViewClick() {
    setShowContentHierarchyView(true);
    setShowContentHierarchyEdit(false);
    setShowContentHierarchyTree(false);
  }

  function handleEditClick() {
    setShowContentHierarchyView(false);
    setShowContentHierarchyEdit(true);
    setShowContentHierarchyTree(false);
  }

  function handleTreeClick() {
    setShowContentHierarchyView(false);
    setShowContentHierarchyEdit(false);
    setShowContentHierarchyTree(true);
  }

  function ShowHierarchyView() {
    const [backGroundColorView, setBackGroundColorView] = useState('white');
    const [textColorView, setTextColorView] = useState('black');

    let [symNew, setSymNew] = useState([
      {
        l1_symName: '',
        l2_symName: '',
        l3_symName: '',
      },
    ]);

    let [flag, setFlag] = useState(false);

    symNew.pop();
    for (let l1 in l1_sym) {
      for (let l2 in l2_sym) {
        if (l2_sym[l2].parentId == l1_sym[l1].sid) {
          symNew.push({ l1_symName: l1_sym[l1].name, l2_symName: l2_sym[l2].name, l3_symName: '' });
          flag = true;
        }
        for (let l3 in l3_sym) {
          if (l3_sym[l3].parentId == l2_sym[l2].sid && l2_sym[l2].parentId == l1_sym[l1].sid) {
            if (flag == true) {
              symNew.pop();
            }
            symNew.push({ l1_symName: l1_sym[l1].name, l2_symName: l2_sym[l2].name, l3_symName: l3_sym[l3].name });
            flag = false;
          }
        }
      }
    }
    return (
      <div>
        <div>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Button onClick={()=>{setBackGroundColorView("#4FB872");setTextColorView('white');handleViewClick()}} style={{backgroundColor:backGroundColorView,borderColor:"black",borderStyle:"solid",borderRadius:"15px",width:"125px",color:textColorView,fontSize:"25px"}}><FormattedMessage id="View"/></Button> */}
          <DeleteIcon style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '50px' }} />
          <EditIcon onClick={handleEditClick} style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '50px' }} />
          <SyncAltIcon
            onClick={handleTreeClick}
            style={{ fontSize: '45px', color: '#696969', float: 'right', marginRight: '52px', marginTop: '-5px' }}
          />
        </div>
        <hr style={{ color: '#C4C4C4', backgroundColor: '#C4C4C4', height: '1px' }} />
        <Container fluid style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <Row style={{ padding: '0px' }}>
            <Col style={{ color: '#919699' }}>
              <FormattedMessage id='ExpertHeirarchy.Text1' />
            </Col>
            <Col style={{ color: '#919699' }}>
              <FormattedMessage id='ExpertHeirarchy.Text2' />
            </Col>
            <Col style={{ color: '#919699' }}>
              <FormattedMessage id='ExpertHeirarchy.Text3' />
            </Col>
          </Row>
          <br />
          {symNew.map(function (i: any) {
            return (
              <Row style={{ padding: '0px' }}>
                <Col>{i.l1_symName}</Col>
                <Col>{i.l2_symName}</Col>
                <Col>{i.l3_symName}</Col>
                <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '1px', width: '97%' }} />
              </Row>
            );
          })}
          <br />
        </Container>
      </div>
    );
  }

  function ShowHierarchyEdit() {
    const [backGroundColorView, setBackGroundColorView] = useState('white');
    const [textColorView, setTextColorView] = useState('black');
    const [showTextHierarchy, setShowTextHierarchy] = useState(true);
    const onClickAngleDownHierarchy = () => {
      if (showTextHierarchy == true) {
        setShowTextHierarchy(false);
      } else {
        setShowTextHierarchy(true);
      }
    };

    let [l2_syme, setl2_syme] = useState(l2_sym);
    let [l3_syme, setl3_syme] = useState(l3_sym);

    function handlel2_sym(event: any, i: any) {
      // console.log(event.target.value)
      for (let l2 in l2_syme) {
        if (event.target.value == l2_syme[l2].name) {
          for (let l3 in l3_syme) {
            if (l3_syme[l3].name == i.name) {
              console.log(l3_syme[l3].parentId + ', ' + l2_syme[l2].sid);
              l3_syme[l3].parentId = l2_syme[l2].sid;
              console.log(l3_syme[l3].name + ', ' + l2_syme[l2].name);
              console.log(l3_syme[l3].parentId + ', ' + l2_syme[l2].sid);
            }
          }
        }
      }
      setl3_syme([...l3_syme]);
    }

    const Showhierarchy = () => {
      return (
        <Container fluid style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <br />
          {l3_sym.map(function (i: any) {
            let value = {
              name: '',
              parentId: 0,
            };
            for (let l2 in l2_sym) {
              if (i.parentId == l2_sym[l2].sid) {
                value = l2_sym[l2];
              }
            }
            return (
              <Row style={{ padding: '0px' }}>
                <Col sm={1}>{''}</Col>
                <Col>{i.name}</Col>
                <Col>
                  <select
                    style={{ overflowY: 'scroll', width: '250px', overflowX: 'scroll' }}
                    value={value.name}
                    onChange={() => handlel2_sym(event, i)}
                  >
                    <option>Select</option>
                    {l2_sym.map(function (j: any) {
                      for (let l2 in l2_sym) {
                        if (value.parentId == j.parentId) {
                          return <option>{j.name}</option>;
                        }
                      }
                    })}
                  </select>
                </Col>
                <hr style={{ color: '#827A7A', backgroundColor: '#827A7A', height: '1px', width: '97%' }} />
              </Row>
            );
          })}
        </Container>
      );
    };

    return (
      <div>
        <div>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
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
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Button onClick={()=>{setBackGroundColorView("#4FB872");setTextColorView('white')}} style={{backgroundColor:backGroundColorView,borderColor:"black",borderStyle:"solid",borderRadius:"15px",width:"125px",color:textColorView,fontSize:"25px"}}><FormattedMessage id="Edit"/></Button> */}
          <Button
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
          <SyncAltIcon onClick={handleTreeClick} style={{ fontSize: '36px', color: '#696969', float: 'right', marginRight: '50px' }} />
        </div>
        <hr style={{ color: '#C4C4C4', backgroundColor: '#C4C4C4', height: '1px' }} />
        <Container fluid style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <Row style={{ padding: '0px' }}>
            <Col sm={1} style={{ color: '#919699' }}>
              <KeyboardArrowUpIcon onClick={onClickAngleDownHierarchy} />
            </Col>
            <Col style={{ color: '#000000', fontSize: '25px' }}>
              <FormattedMessage id='ExpertHeirarchy.Text4' />
            </Col>
            <Col style={{ color: '#000000', fontSize: '25px' }}>
              <FormattedMessage id='ExpertHeirarchy.Text5' />
            </Col>
          </Row>
          <div>{showTextHierarchy ? <Showhierarchy /> : null}</div>
          <br />
        </Container>
      </div>
    );
  }

  function ShowHierarchyTree() {
    const [backGroundColorView, setBackGroundColorView] = useState('white');
    const [textColorView, setTextColorView] = useState('black');
    return (
      <>
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
        {/* <ExpertTree l1_sym={l1_sym} l2_sym={l2_sym} l3_sym={l3_sym} /> */}
      </>
    );
  }

  return (
    <div>
      {showContentHierarchyView ? <ShowHierarchyView /> : null}
      {showContentHierarchyEdit ? <ShowHierarchyEdit /> : null}
      {/* {showContentHierarchyTree ? <ShowHierarchyTree /> : null} */}
    </div>
  );
};

export default ExpertHierarchyPage2;
