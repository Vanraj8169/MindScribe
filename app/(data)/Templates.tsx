export default [
    {
        name: 'Blog Title',
        desc: 'An AI Tool that generates blog title depends on your blog',
        category: 'Blog',
        icon: '',
        aiPrompt: 'Give me 5 Blog topic idea in bullet wise only based on given niche & outline and give me result',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog name',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter your blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    }
]