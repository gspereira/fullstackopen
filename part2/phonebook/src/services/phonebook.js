import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const data = axios.get(baseUrl)
  return data.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteEntry = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response)
}

export default { getAll, create, update, deleteEntry }