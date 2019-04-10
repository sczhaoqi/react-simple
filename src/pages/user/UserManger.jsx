import React from 'react';
// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'
import {nextPageUsers,searchPageUsers} from '../../store/actions'

class UserAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = props.users;
    }
    render(){
        return <h1>用户管理</h1>
    }
    componentDidMount(){
        let { searchPageUsers, nextPageUsers } = this.props;
        
        let param = {
            "pageNum": this.state.User.pageNum,
            "pageSize": this.state.User.pageSize,
        }
        searchPageUsers(param);
        nextPageUsers(param)
    }
}
// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
    return {
      users: state,
    }
  }
  
  // mapDispatchToProps：将dispatch映射到组件的props中
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchPageUsers (param) {
          dispatch(searchPageUsers(param))
        },
        nextPageUsers (param) {
            dispatch(nextPageUsers(param))
        }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(UserAdd)