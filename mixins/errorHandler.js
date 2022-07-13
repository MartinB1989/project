export default {
  methods: {
    errorHandler(value, rules = false) {
      const errors = []
      if (!this.$v[value].$dirty) return errors
      if(rules){
        rules.forEach(rule => {
          !this.$v[value][rule.name] && errors.push(rule.message)
        });
        return errors
      }
    }
  }
}