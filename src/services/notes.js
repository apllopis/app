/* eslint-disable import/no-anonymous-default-export */
/** Conexión a API */
import axios from 'axios'

//const baseUrl = 'https://stark-waters-38576.herokuapp.com/api/notes'
const baseUrl = 'http://localhost:3001/api/notes'

let token = null
const setToken = newToken => {
  token = `Bearer ${newToken}`
}


const getAll = () => {
  const config = {
    headers: {
      authorization: token
    }
  }
  const request = axios.get(baseUrl, config)
  return request.then(response => response.data)
}
const create = ({ content, important }) => {
  const config = {
    headers: {
      authorization: token
    }
  }
  const request = axios.post(baseUrl, { content, important }, config)
  return request.then(response => response.data)
}

export default { getAll, create, setToken }