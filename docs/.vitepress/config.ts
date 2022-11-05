import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RGScores Docs',
  description: 'Documentation for RGScores',
  lang: 'en-AU',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'RGScores',
    outline: 2,
    outlineTitle: 'On this page',
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
          { text: 'People', link: '/administration/people' },
          { text: 'System Settings', link: '/administration/systemSettings' },
        ]
      },
      {
        text: 'Managing Competitions',
        items: [
          {text: 'Competitions', link: '/competition-management/definition'},
          {text: 'Entries', link: '/competition-management/entries'},
          {text: 'Music', link: '/competition-management/music'},
          {text: 'Sessions', link: '/competition-management/sessions'},
          {text: 'Work Orders', link: '/competition-management/generating-work-orders'},
        ]
      },
      {
        text: 'Running Competitions',
        items: [
          { text: 'Getting Started', link: '/running-competitions/' },
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