export default function SkillCard({ title }: { title: string }) {
  return (
    <div className="skill-card group relative uppercase px-5 py-3 bg-white/10 border border-white/20 rounded-sm text-white font-light tracking-wide cursor-default overflow-hidden transition-colors duration-300 hover:bg-white hover:text-black hover:border-white">
      <span className="relative z-1">{title}</span>
      <span className="absolute left-0 top-0 h-full w-0.5 bg-red scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
    </div>
  );
}
