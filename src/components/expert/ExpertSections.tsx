import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ExpertCropPage from './ExpertCropPage';
import ExpertProblemPage from './ExpertProblemPage';
import ExpertHierarchyPage from './ExpertHierarchyPage';

const ExpertSections = () => {
  return (
    <Switch>
      <Route path='/expert/crop' component={ExpertCropPage} />
      <Route exact path='/expert/problem' component={ExpertProblemPage} />
      <Route exact path='/expert/hierarchy' component={ExpertHierarchyPage} />
    </Switch>
  );
};

export default ExpertSections;
