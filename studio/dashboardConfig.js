export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d02452d749e7e6515867b74',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-test-v2-studio',
                  apiId: '8af2627e-699a-4078-bd73-a2d97b2612fb'
                },
                {
                  buildHookId: '5d02452d311178803c05e1a9',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-test-v2',
                  apiId: '8a7cf780-3f53-409e-90d4-e31f50d834fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/finiteattention/sanity-sapper-blog-test-v2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-test-v2.netlify.com', category: 'apps'}
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
