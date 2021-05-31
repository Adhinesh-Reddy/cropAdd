import React from 'react';
import { Switch, Route } from "react-router-dom";
import Main from './Home/Home';
import About from './About/About';
import Review from './Review/Review';
import Gallery from './Gallery/Gallery';
import Download from './Download/Download';
import { AuthProvider } from './Login/contexts/AuthContext';
import Dashboard from './Login/components/Dashboard';
import DashboardPhone from './Login/components/Dashboard_Phone';
import UpdateProfile from './Login/components/UpdateProfile';
import Signup from './Login/components/Signup';
import LoginViaEmail from './Login/components/LoginViaEmail';
import LoginViaPhone from './Login/components/LoginViaPhone';
import LoginViaGoogle from './Login/components/LoginViaGoogle';
import PrivateRoute from './Login/components/PrivateRoute';
import ForgotPassword from './Login/components/ForgotPassword';
// import CottonCrop from './Crops/CottonCrop'
// import AlertCrop from './Crops/AlertCrop'
// import AlertSymptom from './Crops/AlertSymptom'
// import Solution from './Crops/Solution'
// import {Sol} from './Crops/Sol'

import Tree1 from './Tree/Tree1'
import TreeData from './Tree/TreeData'
import HomeProblem from './Home/HomeProblem'
import HomeHeirarchy from './Home/HomeHeirarchy'
import TreeEdit from './Tree/TreeEdit'
import TreeAdd from './Tree/TreeAdd'

// import CottonCropUp from './Crops/Symptoms'
const sections = () => {
  return (
            <Switch>
              <Route exact path="/home" component={Main} />
	      {/* <Route exact path="/cotton" component={CottonCrop}/>
	      <Route exact path="/symptom" component={CottonCropUp}/>
	      <Route exact path="/alertcrop" component={AlertCrop}/>
	      <Route exact path="/alertsymptom" component={AlertSymptom}/>
	      <Route exact path="/solution" component={Solution}/> */}
        {/* <Route exact path="/sol" component={Sol}/> */}

	      <Route exact path="/" component={Main}/>
              <Route exact path="/about" component={About} />
              <Route exact path="/review" component={Review} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/download" component={Download} />
              <Route exact path="/tree" component={TreeData} />
              <Route exact path="/homeproblem" component={HomeProblem} />
              <Route exact path="/homeheirarchy" component={HomeHeirarchy} />
              <Route exact path="/treeedit" component={TreeEdit} />
              <Route exact path="/treeadd" component={TreeAdd} />
              <AuthProvider>
                <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
	      <PrivateRoute path="/dashboardPhone" component={DashboardPhone} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/loginViaEmail" component={LoginViaEmail} />
              <Route path="/loginViaPhone" component={LoginViaPhone} />
              <Route path="/loginViaGoogle" component={LoginViaGoogle} />
              <Route path="/Login" component={LoginViaPhone} />
              <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
              </AuthProvider>
            </Switch>
  );
};

export default sections;
