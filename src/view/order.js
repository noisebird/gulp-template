define(['text!../tpl/order.tpl'], orderTpl => Backbone.View.extend({
    initialize () {},

    render () {
        const html = template.render(orderTpl);
        $('#main').html(html);
        return this;
    }
}));
