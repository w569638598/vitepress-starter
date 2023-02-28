module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    outDir: '../docs',
    srcDir: './pages',
    base: 'https://w569638598.github.io/vitepress-starter/',
    head: [
        ['link', {rel: 'preconnect'}]
    ],
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/getting-started' },
        ]
    }
}