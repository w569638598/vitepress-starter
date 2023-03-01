module.exports = {
    title: '个人简历 王力',
    description: 'Just playing around',
    outDir: '../docs',
    srcDir: './pages',
    base: '/vitepress-starter/',
    head: [
        ['link', {rel: 'preconnect'}]
    ],
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/getting-started' },
        ]
    }
}