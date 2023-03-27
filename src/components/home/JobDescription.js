import React from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../../api/axios.client';

import './JobDescription.css';
import Company from './Company';

import '../shared/Footer.css';
import JobContent from './JobContent';
import Footer from '../shared/Footer';

const JobDescription = () => {
  const [job, setJob] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await axiosClient.get(`jobs/${id}`);
      setJob(data.data.metadata.job);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {job && (
        <div>
          <div className='flex flex-column items-center justify-center'>
            <Company {...job} />
          </div>
          <div className='flex flex-column items-center justify-center'>
            <JobContent {...job} />
          </div>
          <Footer {...job} />
        </div>
      )}
    </>
  );
};

export default JobDescription;
