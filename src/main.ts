

import  * as React  from  'react'
import  * as ReactDOM  from  'react-dom'
import Index  from  './page/index/index'
const APP : HTMLElement | null =  document.getElementById('app')
console.log(Index)
ReactDOM.render(React.createElement(Index) , APP)