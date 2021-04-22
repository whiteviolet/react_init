



import Login from '@/page/home/login/index'


import Admin from  '@/page/home/admin/index'

import Study from '@/page/index/index'

export const routes=[
  {path:'/',name:'page',component:Login},
  {path:'/study',name:'study',component:Study},  
  {path:'/admin',name:'admin',component:Admin}
]

