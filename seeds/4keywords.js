
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    // knex('table_name').del(),

    // Inserts seed entries
    knex('keywords').insert({id: 1, keyword: 'boulder' })
  );
};
