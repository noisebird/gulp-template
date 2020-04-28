define([], () => {
    console.log(moment());
    $.ajax('/api', {
        method: 'GET',
        header: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': true,
        },
    });
});
