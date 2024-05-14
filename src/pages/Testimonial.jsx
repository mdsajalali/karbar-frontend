import client from "../images/client-img.png";
import testimonial_img from "../images/testimonial_img.png";
const Testimonial = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={testimonial_img}
            alt="Testimonial"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            What our clients say about us
          </h1>
          <div>
            <p className="text-base md:text-lg mb-4">
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
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-lg font-semibold mb-1">John Doe</p>
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
