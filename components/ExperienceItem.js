export default function ExperienceItem({
  title,
  company,
  period,
  description,
}) {
  return (
    <div className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
      <h3 className="font-semibold group-hover:text-purple-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{company}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{period}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
}
