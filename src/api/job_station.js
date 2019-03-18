import request from '@/utils/request'

export function fetchJobStationList(query) {
  return request({
    url: '/staff/job_stations/',
    method: 'get',
    params: query
  })
}

export function fetchJobStation(id) {
  return request({
    url: '/staff/job_stations/',
    method: 'get',
    params: { id }
  })
}

export function createJobStation(data) {
  return request({
    url: '/staff/job_stations/',
    method: 'put',
    data
  })
}

export function updateJobStation(id, data) {
  return request({
    url: '/staff/job_stations/',
    method: 'post',
    params: { id },
    data
  })
}
