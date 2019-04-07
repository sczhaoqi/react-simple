import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import UserManger from '../pages/user/UserManger.jsx';
import RoleManager from '../pages/user/RoleManager.jsx';

let routes = [   /*嵌套路由*/
    {
        path: "/user",
        exact:true,
        component: UserManger
    },
    {
        path: "/user/userManager",
        exact:true,
        component: UserManger
    },
    {
        path: "/user/roleManager",
        component: RoleManager
    }
]

const UserRoute = () => (
    <HashRouter>
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
    </HashRouter>
);

export default UserRoute;