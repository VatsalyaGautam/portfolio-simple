import React from "react";
import { Trophy } from "lucide-react";
import Section from "./Section";
import { FaTrophy, FaUsers } from "react-icons/fa";
const EngagementItem = ({ icon, title, description }) => (
  <div className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
    <div className="flex items-center mb-2">
      <div className="text-2xl mr-3 text-purple-500 dark:text-purple-400 group-hover:text-purple-600">
        {icon}
      </div>
      <h3 className="font-semibold group-hover:text-purple-500 transition-colors duration-300">
        {title}
      </h3>
    </div>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const LeadershipEngagement = () => {
  return (
    <Section icon={<Trophy />} title="Leadership and Engagement">
      <div className="space-y-4">
        <EngagementItem
          icon={<FaTrophy />}
          title="Treasurer  '23 - '24"
          description="Information Technology Department, SSIPMT"
        />
        <EngagementItem
          icon={<FaUsers />}
          title="Member"
          description="Software Development Club, SAC, SSIPMT"
        />
      </div>
    </Section>
  );
};

export default LeadershipEngagement;
