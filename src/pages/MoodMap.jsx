import Avatar2 from "../components/Avatar";

export default function MoodMap() {
  return (
    <div className="flex flex-col justify-around items-center w-full h-full">
      <h1 className="text-4xl sm:text-4xl text-center px-4 mb-10 mt-4">
        My Week
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <p className="sm:text-md text-sm text-center">Mon</p>
          <p className="sm:text-2xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            😊
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-md text-sm text-center">Tue</p>
          <p className="sm:text-2xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            🙁
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-md text-sm text-center">Wed</p>
          <p className="sm:text-2xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            🙃
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-md text-sm text-center">Thu</p>
          <p className="sm:text-2xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            😐
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-md text-sm text-center">Fri</p>
          <p className="sm:text-2xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            😢
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-md text-sm text-center">Sat</p>
          <p className="sm:text-2xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            😁
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-md text-sm text-center">Sun</p>
          <p className="sm:text-2xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            😍
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-2xl">
          Word of The Day
        </h1>
        <h1 className="text-2xl text-skin-secondary">
          Delighted
        </h1>
        <h3>Feeling or showing great pleasure</h3>
        <h3 className="italic">
        { "She has a delighted smile."}
        </h3>
        <div className="flex flex-row items-end ml-96 transform -scale-x-100 ">
        <div>
          <Avatar2 />
          </div>      
       </div>
     </div>
   </div>
  );
}
