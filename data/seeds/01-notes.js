
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {title: 'Costco', content: 'Costco Wholesale Corporation, trading as Costco, is an American multinational corporation which operates a chain of membership-only warehouse clubs.'},
        {title: 'Bath & Body Works', content:"An American retailer under the L Brands umbrella, along with Victoria's Secret. It was founded in 1990 in New Albany, Ohio and has since expanded across the United States, Canada, Chile and Peru."},
        {title: 'Forum Coffeehouse', content: 'A coffeeshop in the Kearny Mesa area of San Diego, California. They serve all types of coffee drinks, as well as food.'}
      ]);
    });
};
