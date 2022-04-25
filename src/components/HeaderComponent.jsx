import React from "react";

function HeaderComponent(props) {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="https://github.com/YulinSuen" className="navbar-brand">
              员工管理平台
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
