import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import JobItem from "./JobItem";

function JobList({ jobApplications, setJobApplications }) {
 const { t } = useTranslation();
 const [savedJobs, setSavedJobs] = useState([]);
 useEffect(() => {
  const storedJobs = JSON.parse(localStorage.getItem("jobApplications")) || [];
  setSavedJobs(storedJobs);
 }, []);

 return (
  <div className="h-screen dark:bg-darkblue">
   <div className="flex justify-center m-10">
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
     {jobApplications.map((job, index) => (
      <JobItem
       key={index}
       job={job}
       idx={index}
       setJobApplications={setJobApplications}
      />
     ))}
    </div>
   </div>
  </div>
 );
}

export default JobList;
