import React from 'react';
import HeaderComponent from '../components/Header.jsx'
 
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
        <HeaderComponent {...this.props}></HeaderComponent>
        <h1>Hello, world!</h1>
    </div>;
    }
}
export default Home;