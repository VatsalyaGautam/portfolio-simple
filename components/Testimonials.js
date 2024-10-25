import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Vatsalya is an exceptional developer with a keen eye for detail.",
    author: "Divyanshu Goswami, Student at SSIPMT, Raipur",
  },
  {
    quote:
      "Really had a great experience while working with Vatsalya. He delivers the perfect and exact product according to the demand",
    author: "Sandeep Singh, Student at SSIPMT, Raipur",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentTestimonial * 100}%)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="italic mb-4 text-gray-600 dark:text-gray-300">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="font-semibold text-right">- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
