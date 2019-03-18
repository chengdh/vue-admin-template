import request from '@/utils/request'

export function fetchPartList(query) {
  return request({
    url: '/staff/parts/',
    method: 'get',
    params: query
  })
}

export function fetchPart(id) {
  return request({
    url: '/staff/parts/',
    method: 'get',
    params: { id }
  })
}

export function createPart(data) {
  return request({
    url: '/staff/parts/',
    method: 'post',
    data
  })
}

export function updatePart(id, data) {
  return request({
    url: '/staff/parts/',
    method: 'put',
    params: { id },
    data
  })
}
