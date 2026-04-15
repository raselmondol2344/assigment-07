"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdText } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { FaVideo } from "react-icons/fa";

const TimelinePage = () => {
  const searchParams = useSearchParams();
  const [activities, setActivities] = useState([]);
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    // data processing function 
    const handleData = () => {
      if (typeof window === "undefined") return;

      const savedData = JSON.parse(localStorage.getItem("friend_timeline")) || [];

     //const savedDataRaw = JSON.parse(localStorage.getItem("friend_timeline")) || [];

  //  const savedData = savedDataRaw.map((item) => ({
  //         ...item,
  //         id: item.id || Date.now() + Math.random(), 
  //       }));


      const name = searchParams.get("name");
      const type = searchParams.get("type");

      if (name && type) {
        const today = new Date().toLocaleString('en-US', {
          month: 'long', day: 'numeric', year: 'numeric',
          hour: '2-digit', minute: '2-digit'
        });

        const newEntry = {
          name,
          type,
          date: today,
          id: Date.now()
        };

        const updated = [newEntry, ...savedData];
        
        // akhne data save korchi
        localStorage.setItem("friend_timeline", JSON.stringify(updated));
        
        // data upadate 
        setActivities(updated);

        // url refresh korle jeno nuton data na add hoy 
        window.history.replaceState(null, '', window.location.pathname);
      } else {
        setActivities(savedData);
      }
    };

    
    handleData();
  }, [searchParams]);

  const filteredActivities = activities.filter((item) => {
    if (filterType === "All") return true;
    return item.type === filterType;
  });
  
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6">Timeline</h1>

    {/* filter section */}
      <div className="mb-8">
        <select 
          className="select select-bordered w-full max-w-xs bg-base-200"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}>
          <option value="All">All Activities</option>
          <option value="Call">Calls</option>
          <option value="Text">Texts</option>
          <option value="Video">Videos</option>
        </select>
      </div>
      
      <div className="space-y-4">
        {filteredActivities.map((item,index) => (
          <div key={index}>
            
            {item.type === "Call" && (
              <div id="callCard" className="p-5 border border-gray-300 rounded-md bg-base-200 shadow-md flex  justify-start gap-5 items-center">
                <div><FiPhoneCall /></div>

                <div>
                  <h3 className="text-lg font-medium text-green-700">
                   Call <span className="text-gray-400 font-normal italic text-sm ml-2">with {item.name}</span>
                  </h3>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                </div>


                </div>
            )}

          
            {item.type === "Text" && (
          
              <div id="TextCard" className="p-5  border border-gray-300 rounded-md bg-base-200 shadow-md flex  justify-start gap-5 items-center">
                <div><IoMdText /></div>

                <div>
                  <h3 className="text-lg font-medium text-green-700">
                  Text <span className="text-gray-400 font-normal italic text-sm ml-2">with {item.name}</span>
                  </h3>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                </div>


                </div>


            )}


            
            {item.type === "Video" && (
               <div id="VideoCard" className="p-5 border border-gray-300 rounded-md bg-base-200 shadow-md flex  justify-start gap-5 items-center">
                <div><FaVideo /></div>

                <div>
                  <h3 className="text-lg font-medium text-green-700">
                   Video <span className="text-gray-400 font-normal italic text-sm ml-2">with {item.name}</span>
                  </h3>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                </div>


                </div>
            )}
          </div>
        ))}
      </div>

      {activities.length > 0 && (
        <button 
          onClick={() => { localStorage.removeItem("friend_timeline"); setActivities([]); }}
          className="mt-10 text-xs text-white  font-semibold btn btn-primary w-full">
          Clear All History
        </button>
      )}
    </div>
  );
};

export default TimelinePage;