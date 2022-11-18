import Link from 'next/link'

const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  }
]

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My first app</title>
      </head>
      <header>
        <body>
          <nav>
            <ul>
              {links.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {children}
        </body>
      </header>
    </html>
  )
}
