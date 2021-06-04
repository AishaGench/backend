const isAuth = (request, middleRes, next)=>{
    const isAuthorized = true;
    if(isAuthorized) {
      next()
    } else {
      middleRes.send('You have no authorization to see this page. Please Login... Request from '+ request.url)
    }
  }
  
  module.exports = isAuth;