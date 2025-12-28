import { useRouter } from 'next/router'

export default function EditLink() {
  const router = useRouter()
  const repo = 'https://github.com/universe-student/fundamentals/blob/main/pages'
  
  let path = router.pathname
  if (path === '/') {
    path = '/index'
  }

  const link = `${repo}${path}.mdx`

  return (
    <div style={{ marginTop: '5rem', paddingTop: '1.5rem', borderTop: '0.5px solid #eee' }}>
      <a 
        href={link} 
        target="_blank" 
        rel="noreferrer" 
        style={{ 
          fontSize: '0.8rem', 
          color: '#888', 
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px'
        }}
        onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        ✏️ Edit this page
      </a>
    </div>
  )
}
