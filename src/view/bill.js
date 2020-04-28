define(['text!../tpl/bill.tpl'], billTpl => Backbone.View.extend({
    initialize () {},

    render () {
        this.$el.html('');
        const html = template.render(billTpl);
        $('#main').html(html);
        return this;
    }
}));
