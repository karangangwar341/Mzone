import React from "react";

const MusicForm = () => {
  return (
    <div className=" mx-auto w-full m-3 rounded-xl bg-white/10 p-6">
      <h2 className="text-3xl font-bold text-center pb-4 text-white">
        Upload your favorite music
      </h2>
      <form className="space-y-4">
        <div className="flex mx-3 ">
          <label
            htmlFor="title"
            className="block text-lg  p-2 font-medium text-white/80 w-24"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="eg. love story"
            autoComplete="off"
            className="mt-1 block w-full rounded-xl pl-3 p-1 text-sm text-white bg-white/10 hover:shadow-sm hover:shadow-white focus:shadow-md focus:shadow-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex mx-3 ">
          <label
            htmlFor="genre"
            className="block text-lg  p-2 font-medium text-white/80 w-24 "
          >
            Genre
          </label>
          <select
            name="genre"
            className="mt-1 block w-full rounded-xl pl-3 py-2 text-sm text-white bg-white/10 hover:shadow-sm hover:shadow-white focus:shadow-md focus:shadow-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option className=" text-black" value="pop">Pop</option>
            <option className=" text-black" value="rock">Rock</option>
            <option className=" text-black" value="jazz">Jazz</option>
            <option className=" text-black" value="country">Country</option>
            <option className=" text-black" value="hip hop">Hip Hop / R&B</option>
            <option className=" text-black" value="classical">Classical</option>
            <option className=" text-black" value="electronic">Electronic</option>
          </select>
        </div>
        <div className="flex mx-3 ">
          <label
            htmlFor="artist"
            className="block text-lg  p-2 font-medium text-white/80 w-24"
          >
            Artist
          </label>
          <input
            type="text"
            id="artist"
            name="artist"
            placeholder="eg taylor swift"
            autoComplete="off"
            className="mt-1 block w-full rounded-xl pl-3 p-1 text-sm text-white bg-white/10 hover:shadow-sm hover:shadow-white focus:shadow-md focus:shadow-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex">
          <div className="flex mx-3 ">
            <label
              htmlFor="thumbnail"
              className="block text-lg  p-2 font-medium text-white/80 w-36 rounded-md"
            >
              Thumbnail
            </label>
            <input
              type="file"
              id="thumbnail"
              className="mt-1 block w-full rounded-xl bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex mx-3 ">
            <label
              htmlFor="song"
              className="block text-lg  p-2 font-medium text-white/80 w-36 rounded-md"
            >
              Song
            </label>
            <input
              type="file"
              id="song"
              className="mt-1 block w-full rounded-xl bg-gray-800/50 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className=" text-gray-900 hover:bg-white/20 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-xs px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Upload
        </button>{" "}
      </form>
    </div>
  );
};

export default MusicForm;
