import axios from '../../src/index'

axios({
  method: 'post',
  url: '/extend/post',
  data: {
    msg: '重载'
  },
}).then((res) => {
  console.log('axios')
})

axios('/extend/post', {
  method: 'post',
  data: {
    msg: '重载2'
  },
})

// axios.post('/extend/post', {msg: 'post'}).then((res) => {
//   console.log(res)
// })

// axios.patch('/extend/patch', {msg: 'patch'}).then((res) => {
//   console.log(res)
// })
// axios.put('/extend/put', { msg: 'put'}).then((res) => {
//   console.log(res)
// })
// axios.delete('/extend/delete').then((res) => {
//   console.log(res)
// })

// axios.head('/extend/head').then((res) => {
//   console.log(res)
// })

// axios.options('/extend/options').then((res) => {
//   console.log(res)
// })