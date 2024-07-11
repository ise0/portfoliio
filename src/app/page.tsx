
import { Header } from "@/blocks/header";
import styles from "./page.module.css";
import { ProjectCardMini } from "@/blocks/project-card-mini";
import fs from "fs";

type Project = {
  img: string,
  name: string,
  desc: string,
  links: string[],
  tools: string[]
}

const projects: Project[] = JSON.parse(fs.readFileSync("./projects.json").toString())

export default function Home() {
  return (
    <main id="page" className={styles['page']}>
      <Header className={styles['header']} />
      <ul className={styles['projects']}>
        {projects.map((el, i) => (
          <li className={styles['project']} key={i}>
            <ProjectCardMini project={el} />
          </li>
        ))}
      </ul>
    </main>
  );
}
