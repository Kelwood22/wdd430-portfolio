interface SkillCardProps {
  skill: string;
  level: string; // e.g., "Beginner", "Intermediate", "Advanced"
}

export default function SkillCard({ skill, level }: SkillCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="text-xl font-semibold mb-2">{skill}</h3>
      <p className="text-gray-800">
        <strong>Level:</strong> {level}
      </p>
    </div>
  );
}
