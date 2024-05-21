import client from "../images/client-img.png";
import testimonial_img from "../images/testimonial_img.png";
const Testimonial = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <img
            src={testimonial_img}
            alt="Testimonial"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">
            What our clients say about us
          </h1>
          <div>
            <p className="mb-4 text-base md:text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <div className="flex items-center">
              <img
                src={client}
                alt="Client"
                className="mr-4 h-12 w-12 rounded-full"
              />
              <div>
                <p className="mb-1 text-lg font-semibold">John Doe</p>
                <p className="text-gray-600">SEO Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
