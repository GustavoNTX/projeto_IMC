export default function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        background: 'linear-gradient(to right, white, #add8e6, #90ee90)',
        padding: '1rem',
        justifyContent: 'center',
      }}
    >
      <a
        className="navbar-brand d-flex align-items-center"
        href="/"
        style={{
          color: '#000',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          textDecoration: 'none',
        }}
      >
        <img
          src="/logo-saude.png"
          alt="Logo"
          width="35"
          height="35"
          className="d-inline-block align-text-top me-2"
        />
        +Saúde
      </a>
    </nav>
  )
}
