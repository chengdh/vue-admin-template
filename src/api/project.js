import request from '@/utils/request'

export function fetchProjectList(query) {
  return request({
    url: '/staff/projects/',
    method: 'get',
    params: query
  })
}

export function fetchProject(id) {
  return request({
    url: '/staff/project/',
    method: 'get',
    params: { id }
  })
}

export function createProject(data) {
  return request({
    url: '/staff/projects/',
    method: 'post',
    data
  })
}

export function updateProject(id, data) {
  return request({
    url: '/staff/projects/',
    method: 'put',
    params: { id },
    data
  })
}
