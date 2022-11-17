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
  const [filters, setFilters] = useState<string[]>([])
  const [jobs, setJobs] = useState<JobsProps[]>([])

  useEffect(() => {
    fetchJobs().then(jobs => setJobs(jobs))
  }, [])

  const addNewFilter = (skill: string) => {
    if(!filters.includes(skill)) {
      setFilters([...filters, skill])
    }
  }

  const removeFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(e.currentTarget.dataset.filter) {
      const filterToRemove = e.currentTarget.dataset.filter;
      const filterIndex = filters.indexOf(filterToRemove);

      const newFilters = filters.filter((_, idx) => idx !== filterIndex)
      setFilters(newFilters)
    }
  }

  const clearAllFilters = () => {
    setFilters([]);
  }

  return <>
    <Header />
    <Main>
      {filters.length > 0 ? <SelectedFilters clearAllFilters={clearAllFilters} removeFilter={removeFilter} filters={filters}/> : null}
      <JobListings jobs={jobs} addNewFilter={addNewFilter}/>
    </Main>
  </>
}

export default App
