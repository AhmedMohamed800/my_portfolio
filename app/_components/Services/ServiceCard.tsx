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
    <article className="flex flex-col gap-4 w-75 lg:w-160">
      <div
        style={{ backgroundImage: `url('/${img}')` }}
        className="h-100 w-full bg-cover bg-no-repeat rounded-sm bg-center"
      ></div>
      <div className="flex flex-col md:flex-row justify-between md:items-top gap-2 md:gap-4 text-white">
        <h2 className="text-[clamp(1.6rem,2.8vw,2.25rem)] font-bold leading-[1.20] uppercase">
          {title}
        </h2>

        <p className="text-[clamp(0.875rem,1.2vw,1rem)] leading-[1.6] pt-0.75">
          {description}
        </p>
      </div>
    </article>
  );
}
