import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Git" },
  { skill: "Jupyter Notebooks" },
  { skill: "Tensorflow" },
  { skill: "English" },
  { skill: "PHP" }, { skill: "Laravel" }, { skill: "AI" }, { skill: "Machine Learning" },






]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              What to know about me ?
            </h1>
            <p>
              Hi, my name is Chandra, and I am{" "}
              <span className="font-bold">quick to adapt</span>,{" "}
              <span className="font-bold">an object-oriented thinker</span>, and{" "}
              <span className="font-bold">always eager to learn new things</span>.
            </p>

            <br />
            <p>
              I graduated from Sanata Dharma University, Yogyakarta, in 2025 with a B.S. in Computer Science,
              achieving a 3.87/4.00 GPA. I completed my studies in 3.5 years with a scholarship from Van Deventer-Maas
              Indonesia. During my time at university, I also worked as a Professor&apos;s Assistant for seven programming-related
              classes across multiple semesters, where I taught practical sessions of 20 to 30 students, evaluated assignments,
              and assisted with grading throughout the course.
            </p>


            <br />
            <div>
              <p>
                I had the opportunity to join the Bangkit Academy, a prestigious career readiness program led by Google,
                Tokopedia, Gojek, and Traveloka. As part of the Machine Learning path, I collaborated with a cross-functional
                team of AI, Cloud Computing, and Mobile Development students to develop <span className="font-semibold">Yoga
                  AI</span>, an AI-based mobile application that acts as a virtual yoga instructor. We implemented a pretrained
                model to analyze user posture and provide real-time feedback, helping users improve their form and practice
                safely. During the program, I earned my <span className="font-semibold">TensorFlow Developer Certificate </span>
                and completed several other industry-recognized certifications through Coursera, strengthening my expertise in
                machine learning and applied AI.
              </p>

            </div>

            <br />
            <p>
              I believe in <span className="font-bold text-teal-500">continuous growth</span>,
               and one way I pursue that is by actively participating in tech competitions. I took part in the 
               <span className="font-semibold"> IEEEXtreme 17.0</span>, a 24-hour global competitive programming
                challenge organized by IEEE, where I ranked in the Top 10 among Indonesian participants by solving 
                complex algorithmic problems under pressure. I also won <span className="font-semibold">First Place </span> 
                in the <span className="font-semibold">IT Days Web Development Competition</span> hosted by Sanata Dharma 
                University in 2024, where I built a full-stack web application using Laravel for the backend and React.js 
                for the frontend. These experiences helped sharpen my technical and teamwork skills, and I&apos;m always eager
                 for new challenges that push me to grow.
            </p>

          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/cartoon.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
