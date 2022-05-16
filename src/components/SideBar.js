import React from "react";

const SideBar = () => {
  return (
    <div>
      <nav id="sidebar" style={{overflowY: "hidden"}}>
        <div class="sidebar_blog_1">
          <div class="sidebar-header">
            <div class="logo_section">
              <a href="/dashbord">
                <img
                  class="logo_icon img-responsive"
                  src="assets/images/logo/logo_icon.png"
                  alt="#"
                />
              </a>
            </div>
          </div>
          <div class="sidebar_user_info">
            <div class="icon_setting"></div>
            <div class="user_profle_side">
              <div class="user_img">
                <img
                  class="img-responsive"
                  src="assets/images/layout_img/user_img.jpg"
                  alt="#"
                />
              </div>
              <div class="user_info">
                <h6>John David</h6>
                <p>
                  <span class="online_animation"></span> Online
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar_blog_2">
          <h4>General</h4>
          <ul class="list-unstyled components">
          <li className="active">
              <a href="/dashboard">
              <i class="fa fa-dashboard white_color"></i>{" "}
                <span className="sidebar-text">DashBoard</span>
              </a>
            </li>
            <li>
           
              <a
                href="#element"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <i class="fa fa-diamond blue_color"></i> <span className="sidebar-text">Services</span>
              </a>
              <ul class="collapse list-unstyled sidebar-li" id="element" style={{backgroundColor:"#15283c",}}>
                <li>
                  <a href="/studyabroadform">
                    {" "}
                    <span>Study Abroad</span>
                  </a>
                </li>
                <li>
                  <a href="media_gallery.html">
                    {" "}
                    <span>Visa Consultation</span>
                  </a>
                </li>
                <li>
                  <a href="/flights">
                    {" "}
                    <span>Flights</span>
                  </a>
                </li>
                <li>
                  <a href="invoice.html">
                    {" "}
                    <span>Hotel</span>
                  </a>
                </li>
                <li>
                  <a href="invoice.html">
                    {" "}
                    <span>Tour</span>
                  </a>
                </li>
                <li>
                  <a href="invoice.html">
                    {" "}
                    <span>Lounge Access</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="tables.html">
              
              <i class="fa fa-paper-plane red_color"></i> <span className="sidebar-text">Travel Buddy</span>
              </a>
            </li>
            <li>
              <a
                href="#apps"
                data-toggle="collapse"
                aria-expanded="false"
               >
                 
                 <i class="fa fa-cog white_color"></i>  <span className="sidebar-text">Settings</span>
              </a>
            </li>
            <li>
              <a href="price.html">
                <i class="fa fa-briefcase blue1_color"></i>{" "}
                <span className="sidebar-text">About Company</span>
              </a>
            </li>
            <li>
              <a href="contact.html">
                <i class="fa fa-table purple_color2"></i> <span className="sidebar-text">Health Care Page</span>
              </a>
            </li>
            <li>
              <a href="map.html">
                <i class="fa fa-map purple_color2"></i> <span className="sidebar-text">Support</span>
              </a>
            </li>
            <li>
              <a href="charts.html">
                <i class="fa fa-bar-chart-o green_color"></i>{" "}
                <span className="sidebar-text">Report</span>
              </a>
            </li>
            <li>
              <a href="settings.html">
                <i class="fa fa-object-group blue2_color"></i> <span className="sidebar-text">Wallet</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
