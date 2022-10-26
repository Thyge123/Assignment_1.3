Vue.createApp({
    data() {
        return {
            name: null,
            message: null,
            number: null
        }
    },
    methods: {
        Duplicate(name, number) {
            if (number < 0)
            {
                this.message = "Cannot be a negative number: " + number 
            }
            else {
            this.message = name.repeat(number)
            }
        },
    }
}).mount("#app")