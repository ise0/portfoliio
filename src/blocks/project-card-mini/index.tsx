'use client'
import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";
import { Modal } from "../modal";
import { ProjectCard } from "../project-card";

type Project = {
    img: string,
    name: string,
    desc: string,
    links: string[],
    tools: string[]
}

export function ProjectCardMini({ project }: { project: Project }) {
    const { desc, img, name } = project
    const [showFull, setShowFull] = useState(false);

    return (
        <>
            <div className={styles['project-card']} onClick={() => setShowFull(true)}>
                <Image className={styles['img']} width={300} height={300} src={img} alt="preview" />
                <h3 className={styles['name']}>{name}</h3>
                <p className={styles['desc']}>{desc}</p>

            </div>
            {showFull &&
                <Modal alignX="center" alignY="center" autoClose={() => setShowFull(false)}>
                    <ProjectCard project={project} />
                </Modal>
            }
        </>
    )
}