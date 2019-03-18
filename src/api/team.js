import request from '@/utils/request'

export function fetchTeamList(query) {
  return request({
    url: '/staff/teams/',
    method: 'get',
    params: query
  })
}

export function fetchTeam(id) {
  return request({
    url: '/staff/parts/',
    method: 'get',
    params: { id }
  })
}

export function createTeam(data) {
  return request({
    url: '/staff/teams/',
    method: 'post',
    data
  })
}

export function updatePart(id, data) {
  return request({
    url: '/staff/teams/',
    method: 'put',
    params: { id },
    data
  })
}
