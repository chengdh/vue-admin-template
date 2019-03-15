const routerMap = {
  path: 'staffs',
  component: () => import('@/views/staff/staff/index'),
  name: 'staffs',
  hidden: true,
  meta: {
    title: '人员资料管理',
    breadcrumb: true
  },
  children: [
    {
      path: 'new_staff',
      name: 'new_staff',
      component: () => import('@/views/staff/staff/components/form')
    }
  ]
}
export default routerMap
