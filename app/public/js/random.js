const User = {
    data() {
      return {
        person: {},
      }
    },

    computed: {
        prettyBirthday() {
            return dayjs(this.person.dob.date)
            .format('D MMM YYYY');
        }
    },

    methods: {
        fetchUserData() {
          fetch('https://randomuser.me/api/')
          .then(response => response.json())
          .then((json) => {
              console.log(json);
              this.person = json.results[0]
              console.log("C");
          })
          .catch( err => {
            console.error(err)
          });
        }
    },
    created() {
        this.fetchUserData();
    }

  }

  Vue.createApp(User).mount('#randomuser');

// Source: file:///Users/a/Documents/GitHub/2-using-vue-js-varmacos/app/public/books.html#
// const Offer = {
//     data() {
//         return {
//             foo: 0
//             msg: "D&S is my favorite",
//             "offers":[
//                 {"id": 1,
//                 "name":"Vivi Armacost",
//                 "salary": 100000,
//                 "bonus": 5000,
//                 "company": "EY",
//                 "offerDate": "2021-08-01"
//                 },
//                 {"id": 2,
//                 "name":"Will Austin",
//                 "salary": 90000,
//                 "bonus": 10000,
//                 "company": "Deloitte",
//                 "offerDate": "2021-08-19"
//                 }
//             ]
//         }
//     }
// }
// Vue.createApp(Counter).mount('#classtest')
