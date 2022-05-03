export default function ({ $axios }: any, inject: any) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  // Set baseURL to something different
  api.setBaseURL('http://localhost:9000/api')

  // Inject to context as $api
  inject('api', api)
}