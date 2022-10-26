import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RGScores Docs',
  description: 'Documentation for RGScores',
  base: '/docs/',
  lang: 'en-AU',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'RGScores',
    nav: [
      { text: 'Home', link: 'https://rgscores.com' },
      { text: 'RGScores App', link: 'https://app.rgscores.com' },
    ],
    sidebar: [
      {
        text: 'Basics',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Getting Started', link: '/getting-started' }
        ]
      },
      {
        text: 'Administration',
        items: [
          { text: 'Levels', link: '/administration/levels' },
        ]
      },
      {
        text: 'Managing Competitions',
        items: [
          {text: 'Entries', link: '/competition-management/entries'},
          {text: 'Work Orders', link: '/competition-management/generating-work-orders'},
        ]
      },
      {
        text: 'Running Competitions',
        items: [
          {text: 'Timing', link: '/running-competitions/timing'},
        ]
      }
    ],
    footer: {
      message: 'Use RGScores for your next Rhythmic Competition',
      copyright: 'Copyright © 2019-present RGScores'
    }
  }
})