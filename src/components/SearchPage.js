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
                            <h4 style={{"marginBottom": "20px"}}>{announcement.name} thinks to be a good fit for your {announcement.type} request.</h4>
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