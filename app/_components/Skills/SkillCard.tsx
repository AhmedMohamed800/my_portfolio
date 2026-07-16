export default function SkillCard({ title }: { title: string }) {
  return (
    <div className="uppercase px-4 py-2 text-black bg-white rounded-sm">
      {title}
    </div>
  );
}
