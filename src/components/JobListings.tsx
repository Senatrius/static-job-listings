import styled from 'styled-components';
import { JobCard } from './JobCard';
import { JobsProps } from '../App';

const JobListingsComponent = styled.div`
  width: 100%;
  margin-top: 3.5rem;
`

interface JobListProps {
  jobs: JobsProps[],
  addNewFilter: (args: string) => void
}

export const JobListings = ({jobs, addNewFilter}: JobListProps) => {
  return <JobListingsComponent>
    {jobs.map((job, idx) => <JobCard key={idx} jobData={job} addNewFilter={skill => addNewFilter(skill)}/>)}
  </JobListingsComponent>
}