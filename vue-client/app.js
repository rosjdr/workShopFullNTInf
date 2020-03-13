const vm = new Vue({
  el: '#app',
  data () {
    return {
      results: null
    }
  },
  mounted () {
    axios
      .get('http://192.168.0.7:8080/noticias')
      .then(response => {
        this.results = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
