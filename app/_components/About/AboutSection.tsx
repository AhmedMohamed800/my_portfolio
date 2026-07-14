import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section-container container-padding">
      <div className="flex justify-between items-center uppercase ">
        <h2 className="text-[96px] font-extrabold  ">Ahmed Mohamed</h2>
        <p className="text-[18px] font-medium ">Full Stack Developer</p>
      </div>
      <div className="flex gap-6 relative h-full mt-2!">
        <div className="w-[60%] h-full sticky top-2 ">
          <p className="">
            My journey into tech wasn't a traditional one. I studied Italian
            language and literature before discovering my passion for software
            development through ALX's Software Engineering program. Today,
            alongside my professional work, I'm also studying Computer Science
            at Cairo University to deepen my understanding of the theoretical
            foundations behind the technology I build.
          </p>
          <div className="flex mt-4! items-center justify-baseline gap-4">
            <a
              href="#contact"
              className="flex flex-1 p-2! py-3!  border border-dashed rounded-sm justify-center"
            >
              CONTACT ME
            </a>

            <a
              href="#work"
              className="flex flex-1 p-2! py-3! border border-white bg-black text-white border-dashed rounded-sm justify-center"
            >
              SHOW WORK
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url("/me.png")` }}
          className="w-full  h-[800px] bg-cover bg-top bg-no-repeat rounded-md"
        ></div>
      </div>
    </section>
  );
}
