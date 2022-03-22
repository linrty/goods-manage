import request from '@/utils/request'

export function fetchCustomerList(query) {
    return request({
      url: '/admin/sales/customer/list',
      method: 'get',
      params: query
    })
  }
  
  export function fetchCustomer(id) {
    return request({
      url: '/admin/sales/customer/detail',
      method: 'get',
      params: { id }
    })
  }
  
  
  export function createCustomer(data) {
    return request({
      url: '/admin/sales/customer/create',
      method: 'post',
      data
    })
  }
  
  export function updateCustomer(data) {
    return request({
      url: '/admin/sales/customer/update',
      method: 'post',
      data
    })
  }
  
  export function deleteCustomer(query) {
    return request({
      url: '/admin/sales/customer/delete',
      method: 'get',
      params: query
    })
  }
  