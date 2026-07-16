interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  img,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="flex flex-col gap-4 w-112.5 lg:w-160">
      <div
        style={{ backgroundImage: `url('/${img}')` }}
        className="h-100 w-full bg-cover bg-no-repeat rounded-sm "
      ></div>
      <div className="flex justify-between items-center gap-4 text-white">
        <h2 className="text-[clamp(1.5rem,2.8vw,2.25rem)] font-bold leading-[1.35] uppercase">
          {title}
        </h2>

        <p className="text-[clamp(0.875rem,1.2vw,1rem)] leading-[1.6]">
          {description}
        </p>
      </div>
    </article>
  );
}
