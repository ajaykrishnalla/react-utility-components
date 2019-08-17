import React from "react";
const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-2 collapse d-md-flex bg-light pt-2 min-vh-100"
            id="sidebar"
          >
            <ul className="nav flex-column flex-nowrap">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Overview
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link collapsed"
                  href="#submenu1"
                  data-toggle="collapse"
                  data-target="#submenu1"
                >
                  Reports
                </a>
                <div className="collapse" id="submenu1" aria-expanded="false">
                  <ul className="flex-column pl-2 nav">
                    <li className="nav-item">
                      <a className="nav-link py-0" href="#">
                        Orders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link collapsed py-1"
                        href="#submenu1sub1"
                        data-toggle="collapse"
                        data-target="#submenu1sub1"
                      >
                        Customers
                      </a>
                      <div
                        className="collapse"
                        id="submenu1sub1"
                        aria-expanded="false"
                      >
                        <ul className="flex-column nav pl-4">
                          <li className="nav-item">
                            <a className="nav-link p-1" href="#">
                              <i className="fa fa-fw fa-clock-o" /> Daily
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link p-1" href="#">
                              <i className="fa fa-fw fa-dashboard" /> Dashboard
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link p-1" href="#">
                              <i className="fa fa-fw fa-bar-chart" /> Charts
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link p-1" href="#">
                              <i className="fa fa-fw fa-compass" /> Areas
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Analytics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Export
                </a>
              </li>
            </ul>
          </div>
          <div className="col pt-2">
            <h2>
              <a
                href=""
                data-target="#sidebar"
                data-toggle="collapse"
                className="d-md-none"
              >
                <i className="fa fa-bars" />
              </a>
              Content
            </h2>
            <h6 className="hidden-sm-down">
              Shrink page width to see sidebar collapse
            </h6>
            <p>
              3 wolf moon retro jean shorts chambray sustainable roof party.
              Shoreditch vegan artisan Helvetica. Tattooed Codeply Echo Park
              Godard kogi, next level irony ennui twee squid fap selvage.
              Meggings flannel Brooklyn literally small batch, mumblecore PBR
              try-hard kale chips. Brooklyn vinyl lumbersexual bicycle rights,
              viral fap cronut leggings squid chillwave pickled gentrify
              mustache. 3 wolf moon hashtag church-key Odd Future. Austin
              messenger bag normcore, Helvetica Williamsburg sartorial tote bag
              distillery Portland before they sold out gastropub taxidermy Vice.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
