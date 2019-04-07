import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import { createHashHistory } from "history";
import Home from '../pages/Home.jsx';
import Help from '../pages/Help.jsx';
import User from '../pages/User.jsx';

const history = createHashHistory();

let routes = [
    {
      path: "/",
      component: Home,
      exact:true
    },
    {
      path: "/help",
      component: Help
    },
    {
      path: "/user",
      component: User,  
    }
];

const BasicRoute = () => (
    <Router history={history}>
        <Switch>
            {
                routes.map((route,key)=>{
                    if(route.exact){
                        return <Route key={key} exact path={route.path}
                        render={props => (
                            <route.component {...props} routes={route.routes} />
                        )}
                        />
                    }else{
                        return <Route  key={key}  path={route.path} 
                        render={props => (
                            <route.component {...props} routes={route.routes} />
                        )}
                        />
                    }
                })
            }    
        </Switch>
    </Router>
);


export default BasicRoute;