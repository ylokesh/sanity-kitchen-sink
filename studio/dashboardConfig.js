export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6037b1973e848f2a17b81100',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-grctojb9',
                  apiId: 'f5b48add-3230-4c63-a8cc-cda7f50f5154'
                },
                {
                  buildHookId: '6037b1971eb35122c8607110',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2w8z46k7',
                  apiId: '3a4c56b3-ed16-42e4-bddf-92da5d869e79'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ylokesh/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2w8z46k7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
