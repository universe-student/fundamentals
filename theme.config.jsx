export default {
  logo: (
    <span style={{ fontWeight: 800, letterSpacing: '-0.05em' }}>
      ESU
    </span>
  ),
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
  editLink: {
    text: 'Edit this page'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  primaryHue: { light: 200, dark: 200 },
  sidebar: {
    defaultMenuCollapsed: true,
    toggleButton: true
  }
}