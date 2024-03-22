export default{
    name:'blog',
    type:'document',
    title:'blog',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Title of a blog article'
        },
        {
            name:'slug',
            type:'slug',
            title:'slug of your blog article',
            options:{
                source:'title'
            },
        },
        {
            name:'titleImage',
            type:'image',
            title:'Title image',

        },
        {
            name:'smallDescription',
            type:'text',
            title:'small Description',
        },
        {
            name:'Date',
            type:'text',
            title:'Date'
        },
        {
            name:'authorName',
            type:'text',
            title:'author-name'
        },
        
        {
            name:'content',
            type:'array',
            title:'Content',
            of:[
                {
                    type:'block'
                }
            ]

        }
    ]
}