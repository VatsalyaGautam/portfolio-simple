import React from "react";
import { FaEnvelope, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactCard = ({ icon, title, text, action }) => (
  <div
    className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105"
    onClick={action}
  >
    <div className="text-4xl mb-4 text-purple-500 dark:text-purple-400 group-hover:text-purple-600">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-purple-600">
      {title}
    </h3>
    <p className="text-center text-gray-600 dark:text-gray-400 group-hover:text-purple-600">
      {text}
    </p>
  </div>
);

const ContactMe = () => {
  const email = "vatsalyagautam@gmail.com";
  const phone = "+918103284835";
  const location = "Raipur, Chhattisgarh, India";

  return (
    <section className="py-16 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group">
            <ContactCard
              icon={<FaEnvelope />}
              title="Email"
              text={email}
              action={() => (window.location.href = `mailto:${email}`)}
            />
          </div>
          <div className="group">
            <ContactCard
              icon={<FaMobileAlt />}
              title="Phone"
              text={phone}
              action={() => (window.location.href = `tel:${phone}`)}
            />
          </div>
          <div className="group">
            <ContactCard
              icon={<FaMapMarkerAlt />}
              title="Location"
              text={location}
              action={() =>
                window.open(
                  `https://maps.google.com/?q=${encodeURIComponent(location)}`,
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
