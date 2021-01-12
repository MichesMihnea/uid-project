import React, {Component} from 'react'
import '../App.css';
import Button from '@material-ui/core/Button';
import { useParams } from "react-router";

function SearchPage() {

    const announcements = [
        {name: "John", type: "electrical"},
        {name: "Marius", type: "plumbing"}
    ]

    let { category } = useParams()

    return(
        <div>
            <h1>Your Announcements</h1>
            <div className="add-request">
                {announcements.map((announcement) => (
                    announcement.type === category &&
                        <div className="announcement-wrapper">
                            <h4 style={{"marginBottom": "20px"}}>{announcement.name} wants to respond to your {announcement.type} request.</h4>
                            <span style={{"marginRight": "10%"}}>
                                <Button variant="contained" color="primary">
                                    Approve
                                </Button>
                            </span>
                            <span>
                                <Button variant="contained" color="secondary">
                                    See profile
                                </Button>
                            </span>
                        </div>
                ))            
            }
            </div>
        </div>
    )
}

export default SearchPage