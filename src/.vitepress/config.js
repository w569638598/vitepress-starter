module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    outDir: '../docs',
    srcDir: './pages',
    head: [
        ['link', {rel: 'preconnect'}]
    ],
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/getting-started' },
        ]
    }
}