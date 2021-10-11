import axios from 'axios'

const base = axios.create({
  baseURL: 'https://my-json-server.typicode.com/sageworksstudio/json-server',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000 // needed for the network-issue component
})

export default {
  base
}