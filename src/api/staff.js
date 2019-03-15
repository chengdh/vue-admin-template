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
    url: '/staff/',
    method: 'get',
    params: { id }
  })
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
