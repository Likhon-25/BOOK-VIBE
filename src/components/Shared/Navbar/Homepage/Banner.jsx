import bannerImgaer from "../../../../assets/banner-image.png"
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img
            src={bannerImgaer}
            className="max-w-sm rounded-lg shadow-2xl mr-20"
          />
          <div>
            <h1 className="text-5xl font-bold ml-20">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn btn-success mt-6 ml-20">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
