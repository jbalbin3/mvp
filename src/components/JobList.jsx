import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';

const JobList = ({ jobs, addJob, updateJob, deleteJob }) => {
  // console.log('jobs', jobs);

    const [state, setState] = useState({
      columns: [],
      data: [],
    });

    const [selectedRow, setRow] = useState(null);

    useEffect(() => {
     setState({ columns: [
      { title: 'Company', field: 'company',

      },
      { title: 'Job URL', field: 'job_url', render: rowData => <a href={rowData.job_url}>{rowData.job_url}</a>},
      { title: 'Contact', field: 'contact' },
      { title: 'Referred by', field: 'referred_by' },
     { title: 'Resume URL', field: 'resume_url' , render: rowData => <a href={rowData.resume_url}>{rowData.resume_url}</a>},
      { title: 'Date applied', field: 'date_applied', type: 'date' },
      { title: 'Status', field: 'status' },
      ],
      data: jobs})
      }, [jobs]);

  // console.log('state',state.data);

  return (
    <MaterialTable
      title="Job Bucket"
      columns={state.columns}
      data={state.data}
      onRowClick={((evt) => setRow)}
      options={{
        pageSize:10,
        pageSizeOptions: [10, 20, 30],
        headerStyle: {
          backgroundColor: '#447eab',
          color: '#FFF'
        },
      }}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
            // console.log('new DATA', newData);
            addJob(newData);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
            // console.log('UPDATE', newData);
            updateJob(newData)
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
            // console.log('DELETE', oldData);
            deleteJob(oldData._id);
          }),
      }}
    />
  );
};

export default JobList;