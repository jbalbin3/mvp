import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core/';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const statusOptions = [
  {
    value: 'applied',
    label: 'applied',
  },
  {
    value: 'follow up',
    label: 'follow up',
  },
  {
    value: 'rejected',
    label: 'rejected',
  },
  {
    value: 'interview',
    label: 'interview',
  },
  {
    value: 'offer letter',
    label: 'offer letter',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));



const JobForm = ({handleSubmit}) => {
  const classes = useStyles();
  const [status, setStatus] = React.useState('applied');

  const handleChange = event => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <form id="jobForm" onSubmit={handleSubmit} autoComplete="off">
        <label>
          <div>
          <TextField
            required
            fullWidth
            margin="normal"
            label="company name (required)"
            placeholder="company came"
            variant="outlined"
            type="text"
            name="company"
            InputLabelProps={{
              shrink: true,
            }}
            />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Job URL (Required)"
            placeholder="Job URL"
            variant="outlined"
            type="text"
            name="job_url"
            InputLabelProps={{
              shrink: true,
            }}
          />
          </div>
          <TextField
            label="company contact"
            defaultValue=""
            variant="outlined"
            type="text"
            name="contact"
            />
          <TextField
            label="referred by"
            defaultValue=""
            variant="outlined"
            type="text"
            name="referred_by"
            />
          <div>
          <TextField
            margin="normal"
            label="resume file location"
            defaultValue=""
            variant="outlined"
            type="text"
            name="resume_url"
          />
          </div>
          <div>
          <TextField
            required
            // label="date applied"
            id="filled-date"
            variant="outlined"
            type="date"
            name="date_applied"
            helperText="date applied and status"
          />
          </div>
          <div>
          <TextField
            margin="normal"
            id="outlined-select-status"
            select
            value={status}
            onChange={handleChange}
            variant="outlined"
            name="status"
          >
          {statusOptions.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </div>
        </label>
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default JobForm;