const Mock = require('mockjs')

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    created_time: "@date('yyyy-MM-dd')",
    customer_name: '@cname()',
    phone: '@integer(10000000000, 20000000000)',
    email: '@email()',
    address: "@county(true)",
  }))
}

module.exports = [
  {
    url: '/admin/sales/customer/list',
    type: 'get',
    response: config => {
      const { product_name, product_code,  page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        return true
      })


      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/admin/sales/customer/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const customer of List) {
        if (customer.id === +id) {
          return {
            code: 20000,
            data: customer
          }
        }
      }
    }
  },

  {
    url: '/admin/sales/customer/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/admin/sales/customer/update',
    type: 'post',
    response: _ => {
      const {option_user} = _.body;
        return {
          code: 20000,
          data: option_user
        }
      
      
    }
  },

  {
    url: '/admin/sales/customer/delete',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: "success"
      }  
    }
  }
]

