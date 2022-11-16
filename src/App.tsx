import React, { useState } from "react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { SelectedFilters } from "./components/SelectedFilters"

function App() {
  const [filters, setFilters] = useState(['Test Filter 1', 'Test Filter 2', 'Text Filter 3'])

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
    </Main>
  </>
}

export default App
