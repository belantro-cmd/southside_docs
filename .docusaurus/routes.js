import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '565'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '094'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '4a4'),
            routes: [
              {
                path: '/docs/Development/changelog',
                component: ComponentCreator('/docs/Development/changelog', '8ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Development/contribution-guide',
                component: ComponentCreator('/docs/Development/contribution-guide', '6c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Development/how-to-report-bugs',
                component: ComponentCreator('/docs/Development/how-to-report-bugs', '368'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Gangs/hierarchy',
                component: ComponentCreator('/docs/Gangs/hierarchy', '2f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Gangs/overview',
                component: ComponentCreator('/docs/Gangs/overview', 'de1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Gangs/territory-system',
                component: ComponentCreator('/docs/Gangs/territory-system', '76b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jobs/business-jobs',
                component: ComponentCreator('/docs/Jobs/business-jobs', 'fd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jobs/emergency-services',
                component: ComponentCreator('/docs/Jobs/emergency-services', '9e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jobs/government',
                component: ComponentCreator('/docs/Jobs/government', '0f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jobs/illegal-activities',
                component: ComponentCreator('/docs/Jobs/illegal-activities', '67e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jobs/mechanics',
                component: ComponentCreator('/docs/Jobs/mechanics', '26e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Rules/city-rules',
                component: ComponentCreator('/docs/Rules/city-rules', 'f30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Rules/community-guidelines',
                component: ComponentCreator('/docs/Rules/community-guidelines', '88c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Rules/roleplay-standards',
                component: ComponentCreator('/docs/Rules/roleplay-standards', '919'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
