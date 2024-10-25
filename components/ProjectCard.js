export default function ProjectCard({ title, description, link }) {
  return (
    <a
      href={link}
      className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 block"
    >
      <h3 className="font-semibold mb-2 group-hover:text-purple-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </a>
  );
}
