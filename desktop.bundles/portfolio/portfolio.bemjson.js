({
    block: 'page',
    title : 'Портфолио',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } }
    ],
    styles: [
        { elem: 'css', url: '_portfolio.css' },
        '<!--[if IE 9]>',
            { elem: 'css', url: '_portfolio.ie9.css' },
        '<![endif]-->'
    ],
    scripts: [
        { elem: 'js', url: '_portfolio.js' }
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
                                    content:'Портфолио'
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
                                    content:[
                                        {
                                            block:'link',
                                            mods:{content:'menu'},
                                            url:'#',
                                            content:'Контакты'
                                        }
                                    ]
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
                            content:'Портфолио'
                        },
                        {
                            block:'portfolio',
                            content:[
                                {
                                    title:'Портал ВТБ24',
                                    src:'../../desktop.assets/project/vtb24.png',
                                    url:'http://vtb24.ru'
                                },
                                {
                                    title:'Women First',
                                    src:'../../desktop.assets/project/womenfirst.png',
                                    url:'http://womenfirst.ru/'
                                },
                                {
                                    title:'Закрытый аналитический портал экспертов финансового рынка',
                                    src:'../../desktop.assets/project/finexpert.png',
                                    url:'http://finexpert.headwork.ru/'
                                },
                                {
                                    title:'Портал ВТБ24',
                                    src:'../../desktop.assets/project/vtb24.png',
                                    url:'http://vtb24.ru'
                                },
                                {
                                    title:'Women First',
                                    src:'../../desktop.assets/project/womenfirst.png',
                                    url:'http://womenfirst.ru/'
                                }
                            ].map(function(item){
                                var block=[
                                    {
                                        elem:'item',
                                        content:[
                                            {
                                                block:'link',
                                                url:item.url,
                                                mix:{
                                                    block:'project'
                                                },
                                                content:[
                                                    {
                                                        block:'project',
                                                        elem:'thumb',
                                                        content:[
                                                            {
                                                                block:'image',
                                                                title:item.title,
                                                                url:item.src
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block:'project',
                                                        elem:'title',
                                                        content:item.title
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                                block.push(' ');
                                return block;
                            })
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
