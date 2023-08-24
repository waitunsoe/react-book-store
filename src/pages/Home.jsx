import HeroSection from "./../components/HeroSection";
import Book from "../assets/everybody-lies.jpg";

const Home = () => {
  return (
    <>
      <HeroSection />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((book) => (
          <div className="   max-w-xs w-full mx-auto border border-indigo-200 shadow p-2 space-y-2 group hover:border-indigo-400 rounded-md bg-indigo-100 text-center">
            <div className="overflow-hidden duration-300 rounded-sm h-60">
              <img
                src={Book}
                className="object-contain group-hover:scale-105 duration-300 h-full w-full"
              />
            </div>
            <h3 className=" text-lg text-blue-500 font-bold group-hover:text-primary">
              Book title
            </h3>
            <p className=" line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium labore dicta quo blanditiis odio, reiciendis architecto
              totam magnam reprehenderit, ad illum! Eligendi aspernatur iste
              illo? Deserunt praesentium natus unde.
            </p>
            <div className="flex flex-wrap items-center">
              {["travel", "knowledge", "food"].map((genre) => (
                <span className="rounded-full bg-indigo-500 m-1 px-3 py-1 align-middle text-white">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
