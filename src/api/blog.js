import request from '../utils/request'

export function fetchList() {
  return request({
    url: '/blog/blogs',
    method: 'get'
  })
}

export function fetDetail(id) {
  return request({
    url: '/blog/' + id,
    method: 'get'
  })
}
