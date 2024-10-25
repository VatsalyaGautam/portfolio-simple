export default function SkillCategory({ title, skills }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
      <h3 className="font-semibold mb-2 text-purple-500">{title}</h3>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-400">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
