import React, { useState, useEffect } from 'react';
// import Button from '@material-ui/core/Button';
// import JobForm from './JobForm.jsx';
import JobList from './JobList.jsx';
import axios from 'axios';

const App = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs')
      .then((res) => {
        // console.log('DATA',res.data);
        setJobs(res.data);
      })
      .catch((err) => console.log('error ', err));
  }, []);

  // not using
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   var job = {
  //     user: {
  //       username: 'John',
  //       email: 'john@test.com',
  //     },
  //     company: e.target.company.value,
  //     job_url: e.target.job_url.value,
  //     contact: e.target.contact.value,
  //     referred_by: e.target.referred_by.value,
  //     resume_url: e.target.resume_url.value,
  //     date_applied: e.target.date_applied.value,
  //     status: e.target.status.value
  //   }
  //   // document.getElementById("jobForm").reset();

  //   // console.log(JSON.stringify(job));
  //   // ajax call to post data
  //   axios.post('/api/jobs', job)
  //     .then((res)=>{
  //       console.log('response from server', res.data);
  //     })
  //     .catch((err)=>{
  //       console.error('axios error posting job', err);
  //     })
  // }

  function addJob(job) {
    // console.log('JOB TO ADD', job);
    axios.post('/api/jobs', job)
      .then((res)=>{
        console.log('response from server', res.data);
      })
      .catch((err)=>{
        console.error('axios error posting job', err);
      })
  }
  function updateJob(job) {
    // console.log('UPDATE',job);
    axios.put(`/api/jobs/${job._id}`, job)
    .then((res)=>{
      console.log('response from server', res.data);
    })
    .catch((err)=>{
      console.error('axios error posting job', err);
    })
  }

  function deleteJob(id) {
    // console.log('ID to delete',id)
    axios.delete(`/api/jobs/${id}`, {params: {id: id}})
      .then((res)=>{
        console.log('response from server', res.data);
      })
      .catch((err)=>{
        console.error('axios error posting job', err);
      })
  }

  return (
    <div>
      {/* <JobForm handleSubmit={ handleSubmit }/> */}
      <JobList jobs={ jobs } updateJob={ updateJob } deleteJob={ deleteJob } addJob={ addJob }/>
    </div>
  );
}

export default App;