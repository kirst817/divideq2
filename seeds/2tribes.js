
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('tribes').insert({id: 1, name: 'g23', numusers: 3, triberes: 5000})
  ]);
};
