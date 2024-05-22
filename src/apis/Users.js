import Send from './Send.js'

export const postRegister = (data) => {
  return Send({
    method: 'post',
    url: `/api/auth/signup`,
    data: data,
  })
}

export const postLogin = (data) => {
  return Send({
    method: 'post',
    url: '/api/auth/login',
    data: data
  })
}

export const getUser = (id) => {
  return Send({
    method: 'get',
    url: `/api/members/${id}`,
  })
}

export const patchUser = (id, data) => {
  return Send({
    method: 'patch',
    url: `/api/members/${id}`,
    data: data,
  })
}