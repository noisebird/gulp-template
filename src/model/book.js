define([], () => Backbone.Model.extend({
    defaults: {
        title: '',
        price: '',
        author: '',
        publishDate: '',
        checked: false
    },
    toggle() {
        this.set('checked', !this.get('checked'));
    }
}));
