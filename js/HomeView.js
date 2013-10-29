var HomeView = function(store) {

	initialize: function() {
	    var self = this;
	    this.store = new MemoryStore(function() {
	        $('body').html(new HomeView(self.store).render().el);
	    });
	}

	this.render = function() {
	    this.el.html(HomeView.template());
	    return this;
	};

    this.findByName = function() {
	    store.findByName($('.search-key').val(), function(employees) {
	        $('.employee-list').html(HomeView.liTemplate(employees));
	    });
	};

	this.initialize();

}

HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());