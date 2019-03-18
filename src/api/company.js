import request from '@/utils/request'

export function fetchCompanyList(query) {
  return request({
    url: '/staff/companies/',
    method: 'get',
    params: query
  })
}

export function fetchCompany(id) {
  return request({
    url: '/staff/companies/',
    method: 'get',
    params: { id }
  })
}

export function createCompany(data) {
  return request({
    url: '/staff/companies/',
    method: 'post',
    data
  })
}

export function updateCompany(id, data) {
  return request({
    url: '/staff/companies/',
    method: 'put',
    params: { id },
    data
  })
}
export function destroyCompany(id) {
  return request({
    url: '/staff/companies/',
    method: 'delete',
    params: { id }
  }
  )
}
