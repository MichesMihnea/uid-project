import React, { useState } from 'react'
import Sidebar from './Sidebar'

function SidebarContainer() {

    var items = [];
    var userData = JSON.parse(localStorage.getItem('UserData'))
    if(userData.type === "beneficiary")
      items = [
          { name: 'home', label: 'Home' },
          {
            name: 'myProfile',
            label: 'My Profile',
            items: [
              { name: 'seeProfile', label: 'See Profile' },
              { name: 'editProfile', label: 'Edit Profile' },
              { name: 'addRequest', label: 'Add a request' },
              { name: 'logOut', label: 'LOG OUT' },
            ],
          },
          {
            name: 'announcements',
            label: 'Announcements',
          },
          {
            name: 'settings',
            label: 'Settings',
          },
          {
            name: 'faq',
            label: 'FAQ',
          }
        ]
    else 
      items = [
        { name: 'home', label: 'Home' },
        {
          name: 'myProfile',
          label: 'My Profile',
          items: [
            { name: 'seeProfile', label: 'See Profile' },
            { name: 'editProfile', label: 'Edit Profile' },
            { name: 'logOut', label: 'LOG OUT' },
          ],
        },
        {
          name: 'announcements',
          label: 'Announcements',
        },
        {
          name: 'settings',
          label: 'Settings',
        },
        {
          name: 'faq',
          label: 'FAQ',
        }
      ]

    return (
        <Sidebar items={items}
        />
    )
}

export default SidebarContainer