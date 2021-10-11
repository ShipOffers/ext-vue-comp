import api from '@/services/api'

const fetchOrders = () => {
    return api.base.get('/orders')
  }


export default {
  fetchOrders
}