define(['text!../tpl/system.tpl'], systemTpl => Backbone.View.extend({
    initialize () {},

    render () {
        this.$el.html('');
        const html = template.render(systemTpl);
        $('#main').html(html);
        return this;
    }
}));
