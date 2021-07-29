import React from "react"
import { Nav } from "react-bootstrap"
import { NavLink} from "react-router-dom"
import {FormattedMessage} from "react-intl"

type NavItemProps = {
    titleId: string;
    path: string;
};

function NavItem({ titleId, path }: NavItemProps) {
    return (
      <Nav.Item>
        <NavLink to={path} className='nav-link' activeStyle={{ color: '#4FB872' }}>
          <FormattedMessage id={titleId} />
        </NavLink>
      </Nav.Item>
    );
}

export default React.memo(NavItem)