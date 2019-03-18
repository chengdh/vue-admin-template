import request from '@/utils/request'

export function fetchDepartmentList(query) {
  return request({
    url: '/staff/departments/',
    method: 'get',
    params: query
  })
}

export function fetchDepartment(id) {
  return request({
    url: '/staff/departments/',
    method: 'get',
    params: { id }
  })
}

export function createDepartment(data) {
  return request({
    url: '/staff/departments/',
    method: 'post',
    data
  })
}

export function updateDepartment(id, data) {
  return request({
    url: '/staff/departments/',
    method: 'post',
    params: { id },
    data
  })
}
