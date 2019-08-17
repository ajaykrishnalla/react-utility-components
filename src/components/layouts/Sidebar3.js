import React from "react";
import clasnames from "classnames";
const Sidebar3 = () => {
  return (
    <React.Fragment>
      <div
        className={clasnames(
          { "w-25": true },
          "text-danger",
          "nav-custom",
          "mt-29"
        )}
        style={{ backgroundColor: "#000" }}
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
                <li className="nav-item m-10">
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
            <a
              className="nav-link collapsed"
              href="#submenu1"
              data-toggle="collapse"
              data-target="#submenu2"
            >
              Reports
            </a>
            <div className="collapse" id="submenu2" aria-expanded="false">
              <ul className="flex-column pl-2 nav">
                <li className="nav-item">
                  <a className="nav-link py-0" href="#">
                    Orders
                  </a>
                </li>
                <li className="nav-item m-10">
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
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar3;
