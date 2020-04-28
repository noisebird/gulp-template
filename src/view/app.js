define(['text!../tpl/app.tpl', 'css!../css/app.css'], appTpl => Backbone.View.extend({
    el: $('body'),
    initialize () {},

    render () {
        const html = template.render(appTpl);
        this.$el.append(html);
        return this;
    }
}));
