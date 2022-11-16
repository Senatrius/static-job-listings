import styled from 'styled-components';
import { COLORS } from '../globalStyles';

const SelectedFiltersComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.125rem;
  box-shadow: 0 6px 20px ${COLORS.shadow};
  background: white;
  border-radius: 5px;
  transform: translateY(-2rem);

  @media screen and (min-width: 767px) {
    padding: 1.25rem 2.1825rem;
    transform: translateY(-2.25rem);
  }
`;

const FilterList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  flex-wrap: wrap;
`

const FilterItem = styled.li`
  display: flex;

  & > span {
    font-weight: 700;
    padding: 0.5rem;
    background: ${COLORS.filterChip};
    color: ${COLORS.primary};
    border-radius: 0.25rem 0 0 0.25rem;
  }
`

const ClearFilters = styled.button`
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  color: ${COLORS.primary};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const RemoveFilter = styled.button`
  width: 2rem;
  border-radius: 0 0.25rem 0.25rem 0;
  border: none;
  outline: none;
  background-color: ${COLORS.primary};
  background-image: url('src/images/icon-remove.svg');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: 0.05;

  &:hover {
    background-color: ${COLORS.darkGray};
  }
`;

export const SelectedFilters = ({clearAllFilters, removeFilter, filters}: {clearAllFilters: () => void, removeFilter: (...args: any) => void, filters: string[]}) => {
  return <SelectedFiltersComponent>
    <FilterList>
      {filters.map(filter => <FilterItem key={filter}><span>{filter}</span><RemoveFilter onClick={e => removeFilter(e)} data-filter={filter} aria-label={`Remove ${filter} filter`}/></FilterItem>)}
    </FilterList>
    <ClearFilters onClick={clearAllFilters} aria-label="Clear all filters">Clear</ClearFilters>
  </SelectedFiltersComponent>
}