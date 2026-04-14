
import Image from "next/image";
const FriendData = () => {
const friendData = [
  {
    id: 1,
    name: "John Doe",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "john@example.com",
    days_since_contact: 12,
    status: "Overdue",
    tags: ["college", "close friend"],
    bio: "Met in university. Love hiking together.",
    goal: 14,
    next_due_date: "2025-07-20"
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    picture: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "sarah@example.com",
    days_since_contact: 5,
    status: "On-Track",
    tags: ["office", "team"],
    bio: "Works in marketing team.",
    goal: 10,
    next_due_date: "2025-07-25"
  },
  {
    id: 3,
    name: "Michael Lee",
    picture: "https://randomuser.me/api/portraits/men/3.jpg",
    email: "michael@example.com",
    days_since_contact: 20,
    status: "Overdue",
    tags: ["gym", "buddy"],
    bio: "Gym partner and fitness enthusiast.",
    goal: 7,
    next_due_date: "2025-07-15"
  },
  {
    id: 4,
    name: "Ayesha Khan",
    picture: "https://randomuser.me/api/portraits/women/4.jpg",
    email: "ayesha@example.com",
    days_since_contact: 2,
    status: "On-Track",
    tags: ["family"],
    bio: "Cousin, very close relationship.",
    goal: 5,
    next_due_date: "2025-07-30"
  },
  {
    id: 5,
    name: "David Smith",
    picture: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "david@example.com",
    days_since_contact: 30,
    status: "Overdue",
    tags: ["school"],
    bio: "Old school friend.",
    goal: 20,
    next_due_date: "2025-07-10"
  },
  {
    id: 6,
    name: "Nusrat Jahan",
    picture: "https://randomuser.me/api/portraits/women/6.jpg",
    email: "nusrat@example.com",
    days_since_contact: 8,
    status: "almost Due",
    tags: ["university", "project"],
    bio: "Worked on projects together.",
    goal: 12,
    next_due_date: "2025-07-22"
  },
  {
    id: 7,
    name: "James Wilson",
    picture: "https://randomuser.me/api/portraits/men/7.jpg",
    email: "james@example.com",
    days_since_contact: 18,
    status: "Overdue",
    tags: ["client"],
    bio: "Business client.",
    goal: 15,
    next_due_date: "2025-07-18"
  },
  {
    id: 8,
    name: "Fatima Noor",
    picture: "https://randomuser.me/api/portraits/women/8.jpg",
    email: "fatima@example.com",
    days_since_contact: 1,
    status: "On-Track",
    tags: ["neighbor"],
    bio: "Lives nearby, good friend.",
    goal: 6,
    next_due_date: "2025-07-28"
  },
  {
    id: 9,
    name: "Chris Evans",
    picture: "https://randomuser.me/api/portraits/men/9.jpg",
    email: "chris@example.com",
    days_since_contact: 25,
    status: "almost Due",
    tags: ["work", "manager"],
    bio: "Office manager.",
    goal: 10,
    next_due_date: "2025-07-12"
  },
  {
    id: 10,
    name: "Rafi Hasan",
    picture: "https://randomuser.me/api/portraits/men/10.jpg",
    email: "rafi@example.com",
    days_since_contact: 3,
    status: "On-Track",
    tags: ["friend", "gaming"],
    bio: "Gaming buddy.",
    goal: 7,
    next_due_date: "2025-07-26"
  }
];
return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
             {
                friendData.map(data=> <div key = {data.id} className="card bg-base-200  shadow-md">
                <figure className="px-10 pt-10">

                    {data.picture && (
  
                    <Image
                        src={data.picture}
                        width={100}
                        height={50}
                        alt="friend"
                        className="rounded-full"
                    />
                    )}


                   

                    
                        


                    
                  
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="friend-Name font-bold text-2xl">{data.name}</h2>
                  <p className="font-semibold text-gray-600">{data.days_since_contact}d ago</p>
                  {/* <div className="card-actions"> */}
                    {/* <button className="btn bg-green-200 text-green-500">{}</button> */}
                  {/* </div> */}

                    <div className="flex gap-2 mt-2">
                    {data.tags.map((tag, index) => (
                      <button key={index} className="px-2 py-1 bg-green-200 rounded-full text-green-500 mb-3">
                        {tag}
                      </button>
                    ))}
                  </div>


                  <div>
                    <button className={`px-3 py-1 rounded-full text-white ${data.status === "On-Track"
                      ? "bg-green-900"
                      : data.status === "almost Due"
                      ? "bg-yellow-600"
                      : "bg-red-600"}`}>
                        {data.status}
                        </button>
                  </div>
                    

                    


                </div>
              </div>
                    

                )
            }
            
        </div>
    );
};

export default FriendData;