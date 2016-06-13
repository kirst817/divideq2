exports.seed = function(knex, Promise) {
 return Promise.join(
   // Deletes ALL existing entries
   knex('images').del(),

   // Inserts seed entries
   knex('images').insert({id: '1', originalname: 'divide-logo.svg'}),
   knex('images').insert({id: '2', originalname: 'Peter_Richards_biking.jpg'}),
   knex('images').insert({id: '3', originalname: 'Peter_Richards_camping.jpg'}),
   knex('images').insert({id: '4', originalname: 'Peter_Richards_desert.jpg'}),
   knex('images').insert({id: '5', originalname: 'Peter_Richards_goatbuddy.jpg'}),
   knex('images').insert({id: '6', originalname: 'Peter_Richards_hut.jpg'}),
   knex('images').insert({id: '7', originalname: 'Peter_Richards_kayak.jpg'}),
   knex('images').insert({id: '8', originalname: 'Peter_Richards_searchrescue.jpg'}),
   knex('images').insert({id: '9', originalname: 'Peter_Richards_trekking.jpg'}),
   knex('images').insert({id: '10', originalname: 'Peter_Richards_50images__24-300x169.jpg'}),
   knex('images').insert({id: '11', originalname: '100_0585.JPG'}),
   knex('images').insert({id: '12', originalname: 'yellowstone.JPG'}),
   knex('images').insert({id: '13', originalname: 'IMG_0891.JPG'}),
   knex('images').insert({id: '14', originalname: 'IMG_0888.JPG'}),
   knex('images').insert({id: '15', originalname: 'IMG_0239.JPG'}),
   knex('images').insert({id: '16', originalname: 'IMG_0237.JPG'})
 );
};
