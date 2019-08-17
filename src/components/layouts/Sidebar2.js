import React from "react";

const Sidebar2 = () => {
  return (
    <React.Fragment>
      <div id="wrapper">
        <nav
          className="navbar navbar-inverse navbar-fixed-top"
          role="navigation"
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="navbar-brand">
                <a
                  id="menu-toggle"
                  href="#"
                  className="glyphicon glyphicon-align-justify btn-menu toggle"
                >
                  <i className="fa fa-bars" />
                </a>
                <a href="#">Project name</a>
              </div>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>
            </div>{" "}
          </div>
        </nav>
        <div id="sidebar-wrapper">
          <nav id="spy">
            <ul className="sidebar-nav nav">
              <li className="sidebar-brand">
                <a href="#home">
                  <span className="fa fa-home solo">Home</span>
                </a>
              </li>
              <li>
                <a href="#anch1">
                  <span className="fa fa-anchor solo">Anchor 1</span>
                </a>
              </li>
              <li>
                <a href="#anch2">
                  <span className="fa fa-anchor solo">Anchor 2</span>
                </a>
              </li>
              <li>
                <a href="#anch3">
                  <span className="fa fa-anchor solo">Anchor 3</span>
                </a>
              </li>
              <li>
                <a href="#anch4">
                  <span className="fa fa-anchor solo">Anchor 4</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div id="page-content-wrapper">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="panel panel-danger">
                    <div className="panel-heading">Panel 1</div>
                    <div className="panel-body">content body</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel panel-success">
                    <div className="panel-heading">Panel 1</div>
                    <div className="panel-body">content body</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar2;
