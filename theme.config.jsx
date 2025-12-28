import { useConfig } from 'nextra-theme-docs'

const Footer = () => {
  const { filePath } = useConfig()
  const repo = 'https://github.com/universe-student/fundamentals/blob/main/'
  const editUrl = `${repo}${filePath}`

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <span>Elementary School of the Universe - Perpetual Learning</span>
      <a 
        href={editUrl} 
        target="_blank" 
        rel="noreferrer"
        style={{ fontSize: '0.8rem', opacity: 0.6, textDecoration: 'underline' }}
      >
        Edit this page on GitHub
      </a>
    </div>
  )
}

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
    text: <Footer />
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
