import React, { useEffect, useState } from "react"
import { fetchJobs } from "./api/fetchJobs"
import { Header } from "./components/Header"
import { JobListings } from "./components/JobListings"
import { Main } from "./components/Main"
import { SelectedFilters } from "./components/SelectedFilters"

export interface JobsProps {
  id: number,
  company: string,
  logo: string,
  new: Boolean,
  featured: Boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[]
}

function App() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [jobs, setJobs] = useState<JobsProps[]>([])
  const [filteredJobs, setFilteredJobs] = useState<JobsProps[]>([])

  useEffect(() => {
    fetchJobs().then(jobs => setJobs(jobs));
  }, [])

  useEffect(() => {
    let newJobs: Set<JobsProps> = new Set();

    jobs.filter(job => {
      const tags = job.tools.concat(job.languages);
      tags.push(job.role, job.level, job.location);

      if(selectedFilters.every(selectedFilter => tags.includes(selectedFilter))) {
        newJobs.add(job);
      }
    })

    setFilteredJobs(Array.from(newJobs))
  }, [selectedFilters])

  const addNewFilter = (skill: string) => {
    if(!selectedFilters.includes(skill)) {
      setSelectedFilters([...selectedFilters, skill])
    }
  }

  const removeFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(e.currentTarget.dataset.filter) {
      const filterToRemove = e.currentTarget.dataset.filter;
      const filterIndex = selectedFilters.indexOf(filterToRemove);

      const newFilters = selectedFilters.filter((_, idx) => idx !== filterIndex)
      setSelectedFilters(newFilters)
    }
  }

  const clearAllFilters = () => {
    setSelectedFilters([]);
  }

  return <>
    <Header />
    <Main>
      {selectedFilters.length > 0 ? <SelectedFilters clearAllFilters={clearAllFilters} removeFilter={removeFilter} filters={selectedFilters}/> : null}
      <JobListings jobs={filteredJobs.length === 0 ? jobs : filteredJobs} addNewFilter={addNewFilter}/>
    </Main>
  </>
}

export default App
