import styled from 'styled-components';
import { JobCard } from './JobCard';
import { IJob } from '../App';

const JobListingsComponent = styled.div`
  width: 100%;
  margin-top: 3.5rem;

  @media screen and (min-width: 767px) {
    margin-top: 2.5rem;
  }
`;

interface IJobList {
  jobs: IJob[];
  addNewFilter: (args: string) => void;
}

export const JobListings = ({ jobs, addNewFilter }: IJobList) => {
  return (
    <JobListingsComponent>
      {jobs.map((job: IJob, idx: number) => (
        <JobCard
          key={idx}
          jobData={job}
          addNewFilter={skill => addNewFilter(skill)}
        />
      ))}
    </JobListingsComponent>
  );
};
