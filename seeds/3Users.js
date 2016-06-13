
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').insert({id: 1, username: 'Ryan', email: 'ryankane28@gmail.com', isgod: true, tribeid: 1}),
    knex('users').insert({id: 2, username: 'Kirsten', email: 'kirstenwedde@gmail.com', isgod: true, tribeid: 1}),
    knex('users').insert({id: 3, username: 'Nathan', email: 'nathanmuss@gmail.com', isgod: true, tribeid: 1})
  );
};
