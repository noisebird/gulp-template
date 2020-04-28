define([], () => Backbone.View.extend({
    tagName: 'li',
    events: {
        click: 'click'
    },

    initialize() {
        this.listenTo(this.model, 'remove', this.render);
    },

    render() {
        const template = _.template(`<div><span>${this.model.get('title')}</span></div>`);
        this.$el.html(template);
        return this;
    },

    click() {
        this.model.toggle();
    }
}));
