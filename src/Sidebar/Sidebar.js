import { PrimaryButton, TextField } from 'office-ui-fabric-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import logo from './logo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

function SidebarItem({ label, items, depthStep = 10, depth = 0, ...rest }) {
    return (
      <Router forceRefresh>
        <NavLink to={label.split(" ").join("-").toLowerCase()}>
        <ListItem button dense {...rest}>
          <ListItemText style={{ paddingLeft: depth * depthStep }}>
            <span>{label}</span>
          </ListItemText>
        </ListItem>
        </NavLink>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem) => (
              <SidebarItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </List>
        ) : null}
      </Router>
    )
  }
  
  function Sidebar({ items, depthStep, depth }) {
    return (
      <div className="sidebar">
        <img className="logo" src={logo} alt="Logo" />
        <List dense>
          {items.map((sidebarItem, index) => (
            <SidebarItem style={{paddingTop: "25px", paddingBottom: "25px"}}
              key={`${sidebarItem.name}${index}`}
              depthStep={depthStep}
              depth={depth}
              {...sidebarItem}
            />
          ))}
        </List>
      </div>
    )
  }

export default Sidebar