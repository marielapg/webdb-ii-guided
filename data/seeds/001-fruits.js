
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits')
  .truncate() //resets the id (primarky key) back to 1
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {
          name: "mango", 
        color: "yellow", 
        description: "very sweet and delicious", 
        favorite: true
      },

        {
          name: "strawberries", 
        color: "red", 
        description: "small and delicious", 
        favorite: false
      },

        {
          name: "banana", 
        color: "yellow", 
        description: "long and not too sweet", 
        favorite: true
      },
      ]);
    });
};
