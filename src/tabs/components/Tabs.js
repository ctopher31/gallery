import React from 'react';
import TabListItem from './TabListItem';

const Tabs = ({ items, selectedTab, tabClickHandler }) => (
  <div className="tabs--container">
    <ul className="tabs--list">
      {items.map(item => <TabListItem key={item} {...{ item, selectedTab, tabClickHandler }} />)}
    </ul>
  </div>
);

export default Tabs;
