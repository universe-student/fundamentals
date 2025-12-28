export default {
  logo: <span>Elementary School of the Universe</span>,
  project: {
    link: 'https://github.com/universe-student/fundamentals'
  },
  docsRepositoryBase: 'https://github.com/universe-student/fundamentals/blob/main',
  footer: {
    text: 'Elementary School of the Universe - Perpetual Learning'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Universe Student'
    }
  },
  primaryHue: { light: 200, dark: 200 },
  sidebar: {
    defaultMenuCollapsed: true,
    toggleButton: true
  }
}