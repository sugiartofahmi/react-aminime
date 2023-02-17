import { AiFillStar } from "react-icons/ai";
const Card = ({ name, image, episode, type, aired, star }) => {
  return (
    <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg">
      <img className="w-full h-40 object-cover" src={image} alt="Mountain" />
      <div className="px-6 py-4">
        <h1 className="text-center">{name}</h1>

        <div className="flex pt-5 flex-col text-center">
          <h1 className="text-gray-700 text-base">Episode : {episode}</h1>
          <h1 className="text-gray-700 text-base">Type : {type}</h1>
          <h1 className="text-gray-700 text-base">Aired : {aired}</h1>
          <h1 className="text-gray-700 text-base flex justify-center items-center gap-x-3">
            <AiFillStar className="text-yellow-500" /> {star}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
