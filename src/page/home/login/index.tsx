import React from 'react'
export default class Login extends React.Component {

  render() {
    let userData = {
      name: 'aa',
      passWord: ''
    }
    return <div>这是个登录页面{userData.name}</div>
  }
}
