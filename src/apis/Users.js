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