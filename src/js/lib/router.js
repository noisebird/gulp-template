define(['../../../view/app',
    '../../../view/order',
    '../../../view/bill',
    '../../../view/system',
    '../../../view/account'
], (App, Order, Bill, System, Account) => {
    const Router = Backbone.Router.extend({
        routes: {
            'home': 'home',
            account: 'account',
            order: 'order',
            bill: 'bill',
            system: 'system'
        },

        initialize() {
            console.log('111111111');
            const app = new App();
            app.render();
        },

        account() {
            console.log('2222222222');
            const account = new Account();
            account.render();
        },

        order() {
            const order = new Order();
            order.render();
        },

        bill() {
            const bill = new Bill();
            bill.render();
        },

        system() {
            const system = new System();
            system.render();
        }


    });
    window.router = new Router();
    Backbone.history.start();
});
