import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
import { profile } from '../../data/profile'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <footer className="page-footer">
          <span>
            {profile.name} — {profile.role}
          </span>
          <span className="footer-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </span>
        </footer>

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
