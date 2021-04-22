

import  * as React  from  'react'
import  * as ReactDOM  from  'react-dom'
import Router  from  '@/components/router/index'
const APP : HTMLElement | null =  document.getElementById('app')
ReactDOM.render(React.createElement(Router) , APP)