import cn from "classnames"
import styles from "./styles.module.css";


export function Header({ className }: { className?: string }) {
    return (
        <div className={cn(styles['header'], className,)}>
            <div className={(styles['email'])}>isengard99@yandex.ru</div>
            <a className={(styles['git'])} href="https://github.com/ise0">github.com/ise0</a>
        </div>
    );
}