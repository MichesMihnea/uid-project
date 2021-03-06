import React, {Component} from 'react'
import '../App.css';
import Button from '@material-ui/core/Button';

function AnnouncementsPage() {

    const announcements = [
        {name: "John", type: "electrical"},
        {name: "Marius", type: "plumbing"}
    ]

    if(JSON.parse(localStorage.getItem('UserData')).type === "beneficiary"){
        return <div>
        <h1>Your Announcements</h1>
        <div className="add-request">
            {announcements.map((announcement) => (
                <div className="announcement-wrapper">
                    <h4 style={{"marginBottom": "20px"}}>{announcement.name} thinks to be a good fit for your {announcement.type} request.</h4>
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
    }else{
        return <div>
        <h1>Your Announcements</h1>
        <div className="add-request">
            {announcements.map((announcement) => (
                <div className="announcement-wrapper">
                    <h4 style={{"marginBottom": "20px"}}>Successfully applied to {announcement.name}'s {announcement.type} request.</h4>
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
    }
}
export default AnnouncementsPage