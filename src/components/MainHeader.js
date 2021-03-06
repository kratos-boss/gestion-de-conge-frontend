import React from 'react';
import { Link , NavLink } from 'react-router-dom'

const MainHeader = () =>{
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" data-widget="pushmenu" to="/"><i className="fas fa-bars"></i></Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink to="/" className="nav-link">Acceuil</NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink to="#" className="nav-link">Contact</NavLink>
          </li>
        </ul>
    
        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
    
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <NavLink className="nav-link" data-toggle="dropdown" to="#">
              <i className="far fa-comments"></i>
              <span className="badge badge-danger navbar-badge">3</span>
            </NavLink>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <NavLink to="#" className="dropdown-item">
                <div className="media">
                  <img alt="User Avatar" className="img-size-50 mr-3 img-circle" /> 
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink to="#" className="dropdown-item">
                <div className="media">
                  <img alt="User Avatar" className="img-size-50 img-circle mr-3" />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink to="#" className="dropdown-item">
                <div className="media">
                  <img alt="User Avatar" className="img-size-50 img-circle mr-3" />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink to="#" className="dropdown-item dropdown-footer">See All Messages</NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link" data-toggle="dropdown" to="#">
              <i className="far fa-bell"></i>
              <span className="badge badge-warning navbar-badge">15</span>
            </NavLink>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">15 Notifications</span>
              <div className="dropdown-divider"></div>
              <NavLink to="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2"></i> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink to="#" className="dropdown-item">
                <i className="fas fa-users mr-2"></i> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink to="#" className="dropdown-item">
                <i className="fas fa-file mr-2"></i> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink to="#" className="dropdown-item dropdown-footer">See All Notifications</NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" data-widget="control-sidebar" data-slide="true" to="#">
              <i className="fas fa-th-large"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    )
}

export default MainHeader;