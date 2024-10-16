import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  console.log(langKey);
  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form className="bg-black w-full md:w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-2 m-4 col-span-9"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button className="bg-red-500 text-white py-2 px-4 m-4 rounded-lg col-span-3">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
