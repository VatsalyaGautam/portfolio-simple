export default function EducationItem({ degree, school, year }) {
  return (
    <div className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
      <h3 className="font-semibold group-hover:text-purple-500 transition-colors duration-300">
        {degree}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{school}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{year}</p>
    </div>
  );
}
