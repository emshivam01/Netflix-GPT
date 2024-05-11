import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = () => {
  return (
    <div className="absolute bottom-32 left-20 text-white">
      <div>
        <h1 className="text-5xl w-1/4 mb-5 font-bold">
          Kingdom of the Planet of the Apes
        </h1>
        <p className="w-1/3 font-semibold text-lg">
          Several generations in the future following Caesar's reign, apes are
          now the dominant species and live harmoniously while humans have been
          reduced to living in the shadows. As a new tyrannical ape leader
          builds his empire, one young ape undertakes a harrowing journey that
          will cause him to question all that he has known about the past and to
          make choices that will define a future for apes and humans alike.
        </p>

        <div className="flex gap-5 items-center mt-5">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded hover:opacity-80">
            {" "}
            <FaPlay className="font-bold text-lg" />{" "}
            <span className="text-xl font-bold">Play Now</span>
          </button>
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded ">
            <IoMdInformationCircleOutline className="font-extrabold text-2xl" />
            <span className="text-xl font-bold">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
