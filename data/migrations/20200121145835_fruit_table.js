
exports.up = function(knex) {
 // REMEMBER THE RETURN     
 return knex.schema.createTable("fruits", tbl => {

     //id column, integer, primary key, auto-increment
     tbl.increments(); 

     tbl.string("name", 20).index();

     tbl.string("color");

     tbl.string("description");

     tbl.boolean("favorite").defaultTo(false);
    // most RDBMS store 1 for true and 0 for false

 }) 
};

//undo the changes from the up functions
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("fruits");
};
