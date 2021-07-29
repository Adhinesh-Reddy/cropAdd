import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
import CottonCrop from './Crops/CottonCrop';
import AlertCrop from './Crops/AlertCrop';
import AlertSymptom from './Crops/AlertSymptom';
import Solution from './Crops/Solution';
// import {Sol} from './Crops/Sol'

import CottonCropUp from './Crops/Symptoms';
import NavBar from '../Nav/NavBar';
import ExpertSideNav from '../expert/ExpertSideNav';
import ExpertLayout from '../Layout/ExpertLayout';
const sections = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/home' component={Main} />
        <Route path='/cotton' component={CottonCrop} />
        <Route path='/symptom' component={CottonCropUp} />
        <Route path='/alertcrop' component={AlertCrop} />
        <Route path='/alertsymptom' component={AlertSymptom} />
        <Route path='/solution' component={Solution} />
        {/* <Route exact path="/sol" component={Sol}/> */}

        {/* <Route exact path='/' component={Main} /> */}
        <Route exact path='/about' component={About} />
        <Route exact path='/review' component={Review} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/download' component={Download} />
        <AuthProvider>
          <Switch>
            <PrivateRoute path='/expert' component={ExpertLayout} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/dashboardPhone' component={DashboardPhone} />
            <PrivateRoute path='/update-profile' component={UpdateProfile} />
            <Route path='/signup' component={Signup} />
            <Route path='/loginViaEmail' component={LoginViaEmail} />
            <Route path='/loginViaPhone' component={LoginViaPhone} />
            <Route path='/loginViaGoogle' component={LoginViaGoogle} />
            <Route path='/Login' component={LoginViaPhone} />
            <Route path='/forgot-password' component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Switch>
    </>
  );
};

export default sections;
