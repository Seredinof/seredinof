({
    block: 'page',
    title : 'Seredinof(w)',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } }
    ],
    styles: [
        { elem: 'css', url: '_index.css' },
        '<!--[if IE 9]>',
            { elem: 'css', url: '_index.ie9.css' },
        '<![endif]-->'
    ],
    scripts: [
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        {
            elem:'in',
            content:[
                {
                    block : 'header',
                    content : [
                        {
                            block:'logo',
                            content:[
                                {
                                    elem:'text',
                                    content:['Seredino']
                                },
                                {
                                    elem:'ending',
                                    content:['f(w)']
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'content',
                    content:[
                        'text'
                    ]
                },
                {
                    block : 'footer',
                    content : [
                        'footer content goes here'
                    ]
                }
            ]
        }
    ]
});
