import React from 'react';
import axiosClient from '../../api/axios.client';

import JobCard from '../shared/JobCard';
import Search from '../search/Search';
import './List.css';

const List = () => {
  const [jobs, setJobs] = React.useState([]);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await axiosClient.get('jobs');
      setJobs(data.data.metadata.jobs);
    };
    fetchData();
  }, []);

  return (
    <div className='main-list'>
      <Search search={search} setJobs={setJobs} />
      <section className='jobsGrid'>
        {jobs.map((job) => (
          <JobCard key={job._id} {...job}></JobCard>
        ))}
      </section>
    </div>
  );
};

export default List;
