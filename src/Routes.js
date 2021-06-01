import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import DogDetails from './DogDetails';

const Routes = ({ getDog }) => {
    
    return (
        <Switch>
            <Route exact path="/dogs" >
                <Home />
            </Route>
            <Route exact path="/dogs/:name" >
                <DogDetails getDog={getDog} /> 
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    );
};

export default Routes;