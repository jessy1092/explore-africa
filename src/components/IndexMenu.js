"use strict";

import React      from 'react/addons';
import Semantify  from 'react-semantify';
import MenuStore from '../stores/MenuStore';

let {Dropdown, Icon, Item, Menu, Text} = Semantify;

export default React.createClass({

  getInitialState() {
    return {
      currentMenu: MenuStore.getAll()
    };
  },

  render() {
    return (
      <Menu>
        <Item type="link" href="/">{"Explore Africa 探索非洲"}</Item>
        {this.renderDropdown()}
      </Menu>
    );
  },

  renderDropdown() {
    var {currentMenu} = this.state;
    return (
      currentMenu.map((section) => {
        let showName = section.showName;

        if (section.currentPage !== '') {
          showName = section.currentPage;
        }

        return (
          <Dropdown className="item" init={true}>
            <Text>{showName}</Text>
            <Icon className="dropdown"/>
            <Menu>
              {this.renderItem(section.subPage)}
            </Menu>
          </Dropdown>
        );
      })
    );
  },

  renderItem(subPage) {
    return (
      subPage.map((page, index) => {
        return (
        <Item type="link"
              href={page.url}
              active={page.status}>
          {page.showName}
        </Item>
        );
      })
    );
  }
})
