import React, {Component} from 'react'
import '../App.css';
import Button from '@material-ui/core/Button';
import { useParams } from "react-router";

function SearchPage() {

    const announcements = [
        {name: "John", type: "electrical"},
        {name: "Marius", type: "plumbing"},
        {name: "Dorel", type: "construction"},
        {name: "Ghita", type: "gardening"}
    ]

    let { category } = useParams()
    let noAnnouncements = true;

    return(
        <div>
            <h1>Your search results.</h1>
            {
                announcements.forEach(announcement => {
                    if(announcement.type === category)
                        noAnnouncements = false
                })
            }
            <div className="add-request">
                {announcements.map((announcement) => (
                    announcement.type === category &&
                        <div className="announcement-wrapper">
                            <h4 style={{"marginBottom": "20px"}}>{announcement.name} seems to be a good fit for your {announcement.type} needs.</h4>
                            <span>
                                <Button variant="contained" color="secondary">
                                    See profile
                                </Button>
                            </span>
                        </div>
                ))            
                }
                {
                    noAnnouncements === true &&
                    <p style={{"marginTop": "50px", "color": "red"}}>No providers can be found to match your search!</p>
                }
            </div>
        </div>
    )
}

export default SearchPage