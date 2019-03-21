import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/staff/staffs/',
    method: 'get',
    params: query
  })
}

export function fetchStaff(id) {
  return request({
    url: '/staff/staffs/${id}',
    method: 'get'
  })
}

export function createStaff(data) {
  return request({
    url: '/staff/staffs/',
    headers: { 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data
  })
}

export function updateStaff(id, data) {
  return request({
    url: '/staff/staffs/${id}',
    method: 'put',
    data
  })
}
export function destroyStaff(id) {
  return request({
    url: '/staff/staffs/${id}',
    method: 'delete'
  })
}
