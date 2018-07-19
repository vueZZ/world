import server from './server.js'

export function getData (id = '') {
  return server({
    url: `/mock/11298/api/v1/store/info/${id}`,
    params: {
      id: id
    },
    method: 'get'
  })
}
