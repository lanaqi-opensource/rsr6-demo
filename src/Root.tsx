import { Link, Outlet } from 'react-router-dom';

import './Root.css';

import { withSecurityBlocker } from '@lanaqi/rsr';
import { nProgressAddon } from '@lanaqi/rsr-nprogress';

function Root() {
  return (
    <div className="root">
      <div className="left">
        <ul className="menu">
          <li>
            <Link to={'/'}>/</Link>
          </li>
          <li>
            <Link to={'/hello'}>/hello</Link>
          </li>
          <li>
            <Link to={'/sheet'}>/sheet</Link>
          </li>
          <li>
            <Link to={'/block'}>/block</Link>
          </li>
          <li>
            <Link to={'/login'}>/login</Link>
          </li>
          <li>
            <Link to={'/logout'}>/logout</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default withSecurityBlocker(Root, (bundler) => {
  return bundler
    .context(builder => {
      return builder
        .hierarchy('superadmin>admin;admin>users;users>guest')
        .resource((rb) => rb.patterns('/login', '/logout', '/denied', '/signature').anonymous().build())
        .resource((rb) => rb.patterns('/sheet').permissions('admin').signatured().build())
        .resource((rb) => rb.patterns('/*').authenticated().build())
        .build()
    })
    .manager(builder => {
      return builder
        .behave({
          notAuthenticationPath: '/login',
          notSignaturePath: '/signature',
          accessDeniedPath: '/denied',
        })
        .build()
    })
    .addons(nProgressAddon())
    .build();
});
