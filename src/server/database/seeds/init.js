exports.seed = function seed(knex, Promise) {
  return Promise.all([
    knex('post').truncate(),
    knex('comment').truncate(),
  ]).then(() => {
    return Promise.all([
      knex('note').insert({
        title: 'Try itonnote!',
        content: 'This is mvp version of itonnote.'
      }),
      knex('ivent').insert({
        name: 'default'
      })
    ]);
  });
};
