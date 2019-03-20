import React from 'react';
import { SideNav, Nav, Icon, IconCnt, Text,cubes, theme,users, Navigation, dashboard,shoppingCart, circleO } from '@trendmicro/react-sidenav';

function leftSideNavBar() {
  return (
    <div>
      <Navigation>
        <SideNav
          defaultSelectedPath="1"
          theme={theme}
          onItemSelection={this.onItemSelection}>
          <Nav id="1">
            <IconCnt>
              <Icon icon={dashboard} />
            </IconCnt>
            <Text>Dashboard</Text>
          </Nav>
          <Nav id="2">
            <IconCnt>
              <Icon icon={users} />
            </IconCnt>
            <Text>Users</Text>
          </Nav>
          <Nav id="3">
            <IconCnt>
              <Icon icon={shoppingCart} />
            </IconCnt>
            <Text>Deliveries</Text>
          </Nav>
          <Nav id="4">
            <IconCnt>
              <Icon icon={circleO} />
            </IconCnt>
            <Text>Orders</Text>
          </Nav>
          <Nav id="5">
            <IconCnt>
              <Icon icon={cubes} />
            </IconCnt>
            <Text>Transactions</Text>
          </Nav>
        </SideNav>
      </Navigation>

    </div>
  )
}

export default leftSideNavBar;