
// 用户管理
  const initState = {
    users: [],  // 是否已登录
    pageNum: 1,
    pageSize: 10,
    
  };
  
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case 'Current_Page_User':
        return {...state, ...action};
      case 'Next_Page_User':
        return {...state, ...action};
      case 'Next_Page_User':
        return {...state, ...action};
      default:
        return state;
    }
  };
  
  export default {initState, reducer};