import React, { Component, useState} from 'react'
import '../App.css';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Feed() {

    const [filter, setFilter] = useState("All");

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const requests = [
        {title: "Electrical socket burned out", description: "In search of someone who can change a burned out electrical socket in my house.", type: "Electrical"},
        {title: "Garden overgrowth", description: "Looking for someone to take care of our overgrown lawn.", type: "Gardening"}
    ]

    return(
        <div>
            <h1 style={{"marginBottom": "30px"}}>Feed</h1>
            <FormControl >
                <InputLabel>Skill filter</InputLabel>
                    <Select 
                        style={{"width": "200px", "marginTop": "30px"}}
                        value={filter}
                        onChange={handleChange}
                    >
                        <MenuItem value={"All"}>All</MenuItem>
                        <MenuItem value={"Electrical"}>Electrical</MenuItem>
                        <MenuItem value={"Gardening"}>Gardening</MenuItem>
                    </Select>
            </FormControl>

            <div className="feed">
                {requests.map((request) => (
                    (filter === "All" ||
                    request.type === filter) &&
                    <div className="request-wrapper">
                        <h3>{request.title}</h3>
                        <h4 style={{"marginBottom": "20px"}}>{request.description}</h4>
                        <p>Skills: {request.type}</p>
                        <span style={{"marginRight": "10%"}}>
                            <Button variant="contained" color="primary">
                                Apply
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

export default Feed