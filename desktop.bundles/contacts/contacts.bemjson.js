({
    block: 'page',
    title : 'Контакты',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } }
    ],
    styles: [
        { elem: 'css', url: '_contacts.css' },
        '<!--[if IE 9]>',
            { elem: 'css', url: '_contacts.ie9.css' },
        '<![endif]-->'
    ],
    scripts: [
        { elem: 'js', url: '_contacts.js' }
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
                        },
                        {
                            block:'menu',
                            content:[
                                {
                                    block: 'menu-item',
                                    mods : { type : 'link' },
                                    content:[
                                        {
                                            block:'link',
                                            mods:{content:'menu'},
                                            url:'#',
                                            content:'Обо мне'
                                        }
                                    ]
                                },
                                {
                                    block: 'menu-item',
                                    mods : { type : 'link' },
                                    content:[
                                        {
                                            block:'link',
                                            mods:{content:'menu'},
                                            url:'#',
                                            content:'Портфолио'
                                        }
                                    ]
                                },
                                {
                                    block: 'menu-item',
                                    mods : { type : 'link' },
                                    content:[
                                        {
                                            block:'link',
                                            mods:{content:'menu'},
                                            url:'#',
                                            content:'Блог'
                                        }
                                    ]
                                },
                                {
                                    block: 'menu-item',
                                    mods : { type : 'link' },
                                    content:'Контакты'
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'content',
                    content:[
                        {
                            block:'heading',
                            mods:{level:'1'},
                            content:'Контакты'
                        }
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
