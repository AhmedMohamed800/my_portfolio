export default function AboutSection() {
  return (
    <section className="section-container container-padding mb-4 lg:mb-0">
      <div className="flex flex-col justify-between md:flex-row md:items-center uppercase gap-2 md:gap-4 my-3 lg:my-6">
        <h2 className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[100%] flex-1 ">
          Ahmed Mohamed
        </h2>
        <p className="text-[clamp(1rem,2vw,1.125rem)] font-medium ">
          Full Stack Developer
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 md:gap-6 relative h-full mt-2!">
        <div className="w-full lg:w-[60%] order-2 lg:order-1 h-full sticky top-2 lg:mb-2 ">
          <p className="">
            My journey into tech wasn&apos;t a traditional one. I studied
            Italian language and literature before discovering my passion for
            software development through ALX&apos;s Software Engineering
            program. Today, alongside my professional work, I&apos;m also
            studying Computer Science at Cairo University to deepen my
            understanding of the theoretical foundations behind the technology I
            build.
          </p>
          <div className="flex flex-col sm:flex-row mt-4! items-center justify-baseline gap-3 lg:gap-4">
            <a
              href="#contact"
              className="flex flex-1 p-2! py-3! w-full border border-dashed rounded-sm justify-center"
            >
              CONTACT ME
            </a>

            <a
              href="#work"
              className="flex flex-1 w-full p-2! py-3! border border-white bg-black text-white border-dashed rounded-sm justify-center"
            >
              SHOW WORK
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url("/me.png")` }}
          className="w-full  h-[800px]  order-1 bg-cover bg-top bg-no-repeat rounded-md"
        ></div>
      </div>
    </section>
  );
}
