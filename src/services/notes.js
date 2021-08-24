/* eslint-disable import/no-anonymous-default-export */
/** Conexión a API */
import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const create = ({ content, important }) => {
  const request = axios.post(baseUrl, { content, important })
  return request.then(response => response.data)
}

export default { getAll, create }