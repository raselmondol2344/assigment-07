import FriendData from "@/FriendsData/FriendData";
import { MdAdd } from "react-icons/md";

export default function Homepage() {
 
  return (
     <section id="bannar-heading">
      <div className="hero mb-10 ">
  <div className="hero-content text-center mt-10">
    <div>
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="py-5 ">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br> 
          relationships that matter most.
      </p>
      <button className="btn  bg-green-900 text-white"> <MdAdd />Add Friend</button>
    </div>
  </div>
      </div>

     <div className="container grid grid-cols-4 gap-4 mx-w-7xl mx-auto mb-20">
      <div className="Card1 bg-base-300  border border-gray-200 rounded-md shadow-lg p-5 text-center">
        <h1 className="text-green-900 font-bold text-4xl">10</h1>
        <p className="text-gray-700 font-semibold">Total Friends</p>

      </div>
      <div className="Card2 bg-base-300  border border-gray-200 rounded-md shadow-lg p-5 text-center">
        <h1 className="text-green-900 font-bold text-4xl">3</h1>
        <p className="text-gray-700 font-semibold">On Track</p>

      </div>
      <div className="Card3 bg-base-300  border border-gray-200 rounded-md shadow-lg p-5 text-center">
        <h1 className="text-green-900 font-bold text-4xl">6</h1>
        <p className="text-gray-700 font-semibold">Need Attention</p>

      </div>
      <div className="Card1 bg-base-300  border border-gray-200 rounded-md shadow-lg p-5 text-center">
        <h1 className="text-green-900 font-bold text-4xl">12</h1>
        <p className="text-gray-700 font-semibold">Interactions This Month</p>

      </div>
     </div>

     <div  className="container max-w-7xl mx-auto gap-5 mb-20">
      <FriendData></FriendData>
     </div>
         
     

     </section>
     

    
  );
}
