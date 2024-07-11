import Image from "next/image";
import styles from "./styles.module.css";

type Project = {
    img: string,
    name: string,
    desc: string,
    links: string[],
    tools: string[]
}

export function ProjectCard({ project }: { project: Project }) {
    const { img, name, tools, desc, links } = project
    return (
        <div className={styles['project-card']}>
            <Image className={styles['img']} width={300} height={300} src={img} alt="preview" />
            <h3 className={styles['name']}>{name}</h3>
            <ul className={styles['links']}>
                {links.map((el, i) => (
                    <li className={styles['link-item']} key={i}>
                        <a className={styles['link']} href={el}>{el}</a>
                    </li>
                ))}
            </ul>
            <ul className={styles['tools']}>
                {tools.map(el => (
                    <li className={styles['tool']} key={el}>
                        {el}
                    </li>
                ))}
            </ul>
            <p className={styles['desc']}>{desc}</p>
        </div>
    )
}