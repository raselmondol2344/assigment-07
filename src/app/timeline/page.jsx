"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdText } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { FaVideo } from "react-icons/fa";

const TimelinePage = () => {
  const searchParams = useSearchParams();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // ১. ডাটা প্রসেস করার জন্য একটি ইন্টারনাল ফাংশন
    const handleData = () => {
      if (typeof window === "undefined") return;

      const savedData = JSON.parse(localStorage.getItem("friend_timeline")) || [];
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
          id: Math.random().toString(36).substr(2, 9)
        };

        const updated = [newEntry, ...savedData];
        
        // স্টোরেজে সেভ করা
        localStorage.setItem("friend_timeline", JSON.stringify(updated));
        
        // স্টেটে সেভ করা
        setActivities(updated);

        // URL ক্লিন করা
        window.history.replaceState(null, '', window.location.pathname);
      } else {
        setActivities(savedData);
      }
    };

    // ফাংশনটি কল করা
    handleData();
  }, [searchParams]);

  // --- আলাদা আলাদা ডিভ এর কাজ ---
  
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">Timeline Activity</h1>
      
      <div className="space-y-4">
        {activities.map((item) => (
          <div key={item.id}>
            {/* ১. কলের জন্য আলাদা ডিভ */}
            {item.type === "Call" && (
              <div className="p-5 border border-gray-300 rounded-md bg-base-200 shadow-md flex  justify-start gap-5 items-center">
                <div><FiPhoneCall /></div>

                <div>
                  <h3 className="text-lg font-medium text-green-700">
                   Call <span className="text-gray-400 font-normal italic text-sm ml-2">with {item.name}</span>
                  </h3>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                </div>


                </div>
            )}

            {/* ২. টেক্সট এর জন্য আলাদা ডিভ */}
            {item.type === "Text" && (
          
              <div className="p-5  border border-gray-300 rounded-md bg-base-200 shadow-md flex  justify-start gap-5 items-center">
                <div><IoMdText /></div>

                <div>
                  <h3 className="text-lg font-medium text-green-700">
                  Text <span className="text-gray-400 font-normal italic text-sm ml-2">with {item.name}</span>
                  </h3>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                </div>


                </div>


            )}


            {/* ৩. ভিডিও এর জন্য আলাদা ডিভ */}
            {item.type === "Video" && (
               <div className="p-5 border border-gray-300 rounded-md bg-base-200 shadow-md flex  justify-start gap-5 items-center">
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