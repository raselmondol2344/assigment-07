
import Link from "next/link";
import Image from "next/image";

import friendData from "../../../public/data.json"


const FriendData =  () => {
  // const res = await fetch("" );
  //  const friendData = await res.json();
  //  console.log(friendData);



return (
         
           
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          
             {
                friendData.map(data=> 
                  <Link key={data.id} href={`/FriendsData/${data.id}`}>
                <div 
                          
                className="card bg-base-200  shadow-md">
                <figure className="px-10 pt-10">

                    {data.picture && (
  
                    <Image
                        src={data.picture}
                        width={100}
                        height={50}
                        alt="friend"
                        className="rounded-full p-2"
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
                  </Link>  

                )
            }
            
        </div>
    );
};

export default FriendData;