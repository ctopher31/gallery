import React from 'react';

const TabListitem = ({ item, selectedTab, tabClickHandler }) => (
  <li className="tabs--list-item">
    <button className={`tabs--button${item === selectedTab ? ' selected' : ''}`} onClick={() => tabClickHandler(item)}>{item}</button>
  </li>
);

export default TabListitem;
