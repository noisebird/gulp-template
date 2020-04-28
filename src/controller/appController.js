define(['../collection/bookCollection', '../model/book'], (BookCollection, Book) => {
    const book1 = new Book({
        title: 'web development',
        price: 200,
        author: '王杰',
        publishDate: '2019-12-12',
        checked: true
    });
    const bookCollections = new BookCollection([
        book1,
        new Book({
            title: 'web design',
            price: 250,
            author: '王杰',
            publishDate: '2019-12-12',
            checked: true
        }),
        new Book({
            title: 'photography1',
            price: 100,
            author: '郑航',
            publishDate: '2019-12-12',
            checked: true
        }),
        new Book({
            title: 'coffee drinking',
            price: 10,
            author: '陈露',
            publishDate: '2019-12-12',
            checked: true
        })
    ]);

    return {
        get: () => bookCollections,
        remove: () => bookCollections.remove(book1)
    };
});
