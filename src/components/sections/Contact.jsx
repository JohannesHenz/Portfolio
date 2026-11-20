import { RevealOnScroll } from "../RevealOnScroll"

const contacts = [
    { label: "Email", value: "johenz@protonmail.com", href: "mailto:johenz@protonmail.com" },
    { label: "Phone", value: "+43 699 10768963", href: "tel:+4369910768963" },
];

export const Contact = () => {
    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="px-4 max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Get In Touch</h2>
                <p className="text-gray-400 mb-8">
                    I'm currently looking for a new role as a software engineer. Feel free to reach out by email or phone.
                </p>
                <div className="space-y-4">
                    {contacts.map(({ label, value, href }) => (
                        <a key={label} href={href}
                            className="flex items-center justify-between gap-6 p-5 rounded-xl border border-white/10 transition hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                            <span className="text-gray-400">{label}</span>
                            <span className="text-blue-400 font-medium">{value}</span>
                        </a>
                    ))}
                </div>
            </div>
        </RevealOnScroll>
    </section>
}
