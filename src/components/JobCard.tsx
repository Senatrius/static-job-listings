import styled from 'styled-components'
import { COLORS } from '../globalStyles';
import { JobsProps } from '../App';

const JobCardComponent = styled.div<{featured: boolean}>`
  position: relative;
  width: 100%;
  padding: 2rem 1.5rem 1.5rem 1.125rem;
  background: white;
  border-radius: 0.25rem;
  box-shadow: 0 6px 20px ${COLORS.shadow};
  border-left: ${props => props.featured ? `5px solid ${COLORS.primary}` : "5px solid transparent"};
  margin-bottom: 2.5rem;
`;

const Logo = styled.div<{logoUrl: string}>`
  position: absolute;
  top: -1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-image: ${props => props.logoUrl ? `url(${props.logoUrl})` : ""};
  background-position: center;
  background-size: cover;
`

const Title = styled.h1`
  font-size: 0.9375rem;
  margin: 0.375rem 0 1rem 0;
  font-weight: 700;
  color: ${COLORS.primary};
`

const Position = styled.p`
  font-size: 0.9375rem;
  font-weight: 700;
  color: ${COLORS.darkGray};
  margin-bottom: 1rem;
`

const Details = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${COLORS.lightGray};
`

const Dot = styled.div`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  margin: 0 0.75rem;
  background: ${COLORS.lightGray};
  opacity: .5;
`

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: ${COLORS.lightGray};
  margin: 1rem 0;
`

const SkillList = styled.ul`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
  list-style: none;
`

const SkillItem = styled.li`
`

const AddFilter = styled.button`
  font-weight: 700;
  padding: 0.5rem;
  background: ${COLORS.filterChip};
  color: ${COLORS.primary};
  border-radius: 0.25rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.05s;

  &:hover {
    color: white;
    background: ${COLORS.primary}
  }

  &:active {
    background: ${COLORS.darkGray}
  }
`

interface JobProps {
  jobData: JobsProps,
  addNewFilter: (args: string) => void,
}

export const JobCard = ({addNewFilter, jobData}: JobProps) => {
  const skills = jobData.tools.concat(jobData.languages);

  //@ts-ignore
  return <JobCardComponent featured={jobData.featured}>
    <Logo logoUrl={jobData.logo} />
    <div>
      <Title>{jobData.company}</Title>
      <Position>{jobData.position}</Position>
      <Details>{jobData.postedAt}<Dot />{jobData.contract}<Dot />{jobData.location}</Details>
    </div>
    <Separator />
    <SkillList>
      {skills.map(skill => <SkillItem><AddFilter onClick={() => addNewFilter(skill)}>{skill}</AddFilter></SkillItem>)}
    </SkillList>
  </JobCardComponent>
}