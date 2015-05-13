app.Search_Collection = Backbone.Collection.extend({
	comparator: 'title',
	model: app.comics_search,
	url: '/items'
});