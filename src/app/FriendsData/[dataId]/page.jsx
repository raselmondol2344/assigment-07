import friendData from "../../../../public/data.json";
import Image from "next/image";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";
import Link from "next/link";

const FriendDetails = async ({ params }) => {
  const { dataId } = await params;

  const id = Number(dataId);
  //   const friend = data.find(item => item.id ==params.id)
  const friend = friendData.find((item) => Number(item.id) === id);

  if (!friend) {
    return <h1>Friend not found</h1>;
  }

  return (
    <div className="grid grid-cols-2 gap-8 container max-w-7xl mx-auto pt-10 pb-20">
      <div className=" ">
        <div id="leftsideDiv" className=" items-center bg-base-300   rounded-md shadow-lg p-5 mb-10">
        <div>
            
          <figure className="px-10 pt-10 flex justify-center">
            {friend.picture && (
              <Image
                src={friend.picture}
                width={100}
                height={50}
                alt="friend"
                className="rounded-full mb-3 "
              />
            )}
            
          </figure>
          
          <div className=" mx-auto flex flex-col items-center">
            <h2 className="friend-Name font-bold text-lg">{friend.name}</h2>
            <div className="flex gap-2 mt-2">
                    {friend.tags.map((tag, index) => (
                      <button key={index} className="px-2 py-1 bg-green-200 rounded-full text-green-500 mb-3">
                        {tag}
                      </button>
                    ))}
                  </div>


                  <div>
                    <button className={`px-3 py-1 rounded-full text-white mb-3 ${friend.status === "On-Track"
                      ? "bg-green-900"
                      : friend.status === "almost Due"
                      ? "bg-yellow-600"
                      : "bg-red-600"}`}>
                        {friend.status}
                        </button>
                  </div>

                  <div className="mb-5">
                    <p className="text-gray-500  italic">{friend.bio}</p>
                    <p className="text-center text-gray-500">{friend.email}</p>
                  </div>



          </div>

          
        </div>
        
      </div>

      <div>
        <div className="space-y-3 mb-10">
            <button className="btn rounded-lg w-full shadow-sm"> <span><RiNotificationSnoozeLine /></span>Snooze 2 weeks</button>
            <button className="btn rounded-lg w-full shadow-sm"> <span><FaArchive /></span>Archive</button>
            <button className="btn rounded-lg w-full shadow-sm text-red-500 "> <span><RiDeleteBin6Line /></span>Delete</button>
          </div>
      </div>
      </div>
      

      <div id="rightsideDIv" >

        <div className="grid grid-cols-3 gap-5 pt-10 p-5 mx-auto text-center">
            <div className="flex flex-col items-cente bg-base-300  border border-gray-200 rounded-md shadow-lg p-5 ">
                <h1 className="text-2xl font-bold text-green-900">{friend.days_since_contact}</h1>
                <p className="text-gray-500">Days Since Contact</p>

            </div>
            <div className="flex flex-col items-cente bg-base-300  border border-gray-200 rounded-md shadow-lg p-5 ">
                <h1 className="text-2xl font-bold text-green-900">{friend.goal}</h1>
                <p className="text-gray-500">Goal (Days)</p>
            </div>
            <div className="flex flex-col items-cente bg-base-300  border border-gray-200 rounded-md shadow-lg p-5 ">
                <h1 className="text-2xl font-bold text-green-900">{friend.next_due_date}</h1>
                <p className="text-gray-500">Next Due</p>
            </div>
        </div>

        <div className="flex justify-between p-5 items-cente bg-base-300  border border-gray-200 rounded-md shadow-lg  mb-5">
            <div>
                <h3 className="text-lg text-green-800">Relationship Goal</h3>
               <p>Connect every <span className="font-bold ">{friend.goal}days</span></p>

            </div>
            <div>
                <button className="btn">Edit</button>
            </div>
        </div>


        <div>
            <h3 className="text-lg font-semibold text-green-900 mt-10 ml-5">Quick Check-In</h3>

           <div className="grid grid-cols-3 gap-5  p-5 mx-auto text-center ">

            {/* <Link href="/timeline">
             <div id="call" className="flex flex-col p-2 items-cente bg-base-300  border border-gray-200 rounded-md shadow-lg">
                <p className=" flex justify-center text-center"><FiPhoneCall /></p>
                <p>call</p>

                
            </div>
                            </Link> */}
                            <Link href={`/timeline?name=${friend.name}&type=Call`}>
                  <div id="call" className="...">
                    <p className="flex justify-center"><FiPhoneCall /></p>
                    <p>Call</p>
                  </div>
                </Link>

           {/* <Link href="/timeline">
            <div id="text" className=" flex flex-col p-2 items-cente bg-base-300  border-gray-200 rounded-md shadow-lg">
                <p className=" flex justify-center text-center"><MdOutlineTextsms /></p>
                <p>Text</p>


            </div>
           </Link> */}

                        <Link href={`/timeline?name=${friend.name}&type=Text`}>
                <div id="text" className="flex flex-col p-2 items-center bg-base-300 border border-gray-200 rounded-md shadow-lg cursor-pointer hover:bg-gray-200">
                  <p className="flex justify-center text-center"><MdOutlineTextsms /></p>
                  <p>Text</p>
                </div>
              </Link>

            {/* <Link href="/timeline">
            <div id="video" className="flex flex-col p-2 items-cente bg-base-300  border border-gray-200 rounded-md shadow-lg">
                <p className=" flex justify-center text-center" ><IoMdVideocam /></p>
                <p>video</p>


            </div>
            </Link> */}

                      <Link href={`/timeline?name=${friend.name}&type=Video`}>
              <div id="video" className="flex flex-col p-2 items-center bg-base-300 border border-gray-200 rounded-md shadow-lg cursor-pointer hover:bg-gray-200">
                <p className="flex justify-center text-center"><IoMdVideocam /></p>
                <p>Video</p>
              </div>
            </Link>


           </div>
        </div>

      </div>


    </div>
  );
};

export default FriendDetails;
