/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const salesRouter = {
  path: '/sales',
  component: Layout,
  redirect: '/sales/customer-manage',
  name: 'Sales',
  meta: {
    title: '销售管理',
    icon: 'shopping'
  },
  children: [
    {
      path: 'customer-manage',
      component: () => import('@/views/sales/customer-manage'),
      name: 'CustomerManage',
      meta: { title: '客户管理' }
    }
  ]
}
export default salesRouter
