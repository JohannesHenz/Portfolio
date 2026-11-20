import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {

    const frontendSkills = ["TypeScript", "JavaScript", "React Native", "Expo", "React", "Angular"];
    const backendSkills = ["Java", "Spring Boot", "PostgreSQL", "Docker", "RabbitMQ", "Elasticsearch"];

    return <section id="about" className="min-h-screen flex- items-center justify-center py-20">

        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                I'm a software engineer from Vienna with professional experience in React Native and TypeScript.
                At TourRadar I worked in a five-person team on a mobile app with several thousand users and a 4.7 rating
                in the App Store. I also enjoy backend work with Java and Spring Boot, as some of the projects below show.
                I'm currently looking for my next role as a software engineer.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend &amp; Mobile</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Computer Science (Bachelor's programme)</strong> - FH Technikum Wien (2021 - 2026)
                            <br />148 of 180 ECTS earned, all courses and exams passed, left without a degree
                        </li>
                        <li>
                            Focus on software development in Java and web technologies, with projects on distributed systems, web APIs and databases
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> Junior Software Engineer at TourRadar (2025-2026) </h4>
                            <p> Built features for the React Native app, rebuilt the in-app inbox and raised frontend test coverage from about 15% to about 70%</p>
                        </div>
                        <div>
                            <h4 className="font-semibold"> Internal IT Support at andamp GmbH (2023-2024) </h4>
                            <p> Managed in-house IT Services for Employees and handled acquisition and Maintenance of Hardware and Software</p>
                        </div>
                        <div>
                            <h4 className="font-semibold"> Facility Overseer at VHS Landstraße (2017-2020) </h4>
                            <p> Oversaw day to day of Courses at VHS and handled resposibility of the entire Facility </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </RevealOnScroll>
    </section>
}