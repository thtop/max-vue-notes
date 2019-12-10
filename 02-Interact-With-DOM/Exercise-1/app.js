new Vue({
  el: '#exercise',
  data: {
    name: 'Thamonwan',
    age: '18',
    image:
      'https://i.etsystatic.com/11401535/r/il/792598/1356498232/il_794xN.1356498232_oxdb.jpg'
  },
  methods: {
    random: function() {
      return Math.random();
    },
    changeName: function() {
      this.name = event.target.value;
    }
  }
});
