import githubLogo from '../../assets/github-mark-white.svg'
import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>

        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> Document Management System</h3>
                    <p className="text-gray-400 mb-4">Full-stack document archive: files are stored in MinIO, a separate OCR worker extracts text from scans via RabbitMQ and Tesseract, and Elasticsearch makes everything searchable with typo-tolerant search.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Spring Boot", "React", "RabbitMQ", "Elasticsearch", "MinIO", "Docker"].map((tech, key) => (
                             <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                 {tech}
                             </span>
                        )
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/JohannesHenz/document-management-system" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer"> View Project → <img src={githubLogo} alt="Github Logo" className='w-6 h-5 inline ml-1 mb-1'></img></a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> Vienna Departure Monitor</h3>
                    <p className="text-gray-400 mb-4">Departure board for Vienna that combines Wiener Linien and ÖBB realtime departures with service disruptions and a weather forecast on an interactive map.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Node.js", "Express", "PostgreSQL", "Leaflet", "Docker"].map((tech, key) => (
                             <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                 {tech}
                             </span>
                        )
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/JohannesHenz/mmam-public" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer"> View Project → <img src={githubLogo} alt="Github Logo" className='w-6 h-5 inline ml-1 mb-1'></img></a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> Tenebris: Co-op Horror Game</h3>
                    <p className="text-gray-400 mb-4">Two-player co-op puzzle horror game, built by a team of four: escape a dark spaceship while an alien hunts you by sound. I built the player movement, local multiplayer and the noise system.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Unity", "C#", "Blender"].map((tech, key) => (
                             <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                 {tech}
                             </span>
                        )
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/JohannesHenz/Tenebris" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer"> View Project → <img src={githubLogo} alt="Github Logo" className='w-6 h-5 inline ml-1 mb-1'></img></a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> Trading Card Game</h3>
                    <p className="text-gray-400 mb-4">REST backend for a trading card game in plain Java without a web framework: a hand-written HTTP server, a Unit of Work over JDBC, hashed passwords and end-to-end tests against PostgreSQL.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Java", "No Framework", "PostgreSQL", "Testcontainers"].map((tech, key) => (
                             <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                 {tech}
                             </span>
                        )
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/JohannesHenz/MonsterTCG" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer"> View Project → <img src={githubLogo} alt="Github Logo" className='w-6 h-5 inline ml-1 mb-1'></img></a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
};