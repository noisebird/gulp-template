define(['../model/book'], Book => Backbone.Collection.extend({
    model: Book,
    getChecked() {
        return this.where({ checked: true });
    }
}));
