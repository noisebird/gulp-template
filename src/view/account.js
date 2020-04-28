define(['text!../tpl/account.tpl', '../controller/appController'], (accountTpl, appController) => Backbone.View.extend({
    initialize () {
        this.listenTo(appController.get(), 'remove', this.render);
        // setTimeout(() => appController.remove(), 3000);
    },

    render () {
        const html = template.render(accountTpl, appController.get().getChecked());
        $('#main').html(html);
        return this;
    }
}));
