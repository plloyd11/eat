module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('./src/css/styles.css')
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist',
        },
    }
}
