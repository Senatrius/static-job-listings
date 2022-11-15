export const fetchJobs = async () => {
  const data = await fetch('data.json');
  const jobs = await data.json();

  return jobs;
};
