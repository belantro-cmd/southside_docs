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
    component: ComponentCreator('/docs', 'e77'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3c7'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '0e3'),
            routes: [
              {
                path: '/docs/development/changelog',
                component: ComponentCreator('/docs/development/changelog', '89c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/contribution-guide',
                component: ComponentCreator('/docs/development/contribution-guide', '1b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development/how-to-report-bugs',
                component: ComponentCreator('/docs/development/how-to-report-bugs', 'c84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gangs/hierarchy',
                component: ComponentCreator('/docs/gangs/hierarchy', 'ca4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gangs/overview',
                component: ComponentCreator('/docs/gangs/overview', 'b1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gangs/territory-system',
                component: ComponentCreator('/docs/gangs/territory-system', '752'),
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
                path: '/docs/jobs/business-jobs',
                component: ComponentCreator('/docs/jobs/business-jobs', '6b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jobs/emergency-services',
                component: ComponentCreator('/docs/jobs/emergency-services', '3c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jobs/government',
                component: ComponentCreator('/docs/jobs/government', '8a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jobs/illegal-activities',
                component: ComponentCreator('/docs/jobs/illegal-activities', 'f9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jobs/mechanics',
                component: ComponentCreator('/docs/jobs/mechanics', '441'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rules/city-rules',
                component: ComponentCreator('/docs/rules/city-rules', '20c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rules/community-guidelines',
                component: ComponentCreator('/docs/rules/community-guidelines', '581'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rules/roleplay-standards',
                component: ComponentCreator('/docs/rules/roleplay-standards', '658'),
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
