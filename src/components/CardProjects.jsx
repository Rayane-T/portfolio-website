import Contact from "./Contact"
import MinimalCard from "./MinimalCard"
import { projectCards } from "../data/cards"

export default function CardProjects() {
    return (
        <section className="minimal-section">
            <div className="minimal-grid">
                {projectCards.map((project) => (
                    <MinimalCard
                        key={project.title}
                        variant="experience"
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        links={{
                            primary: project.href,
                            secondary: project.external,
                        }}
                    />
                ))}
            </div>
            <Contact/>
        </section>
    )
}