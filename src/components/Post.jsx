import styles from "./Post.module.css";
import ChooseTagColor from "../ChooseTagColor";

export default function ({ img, title, description, buttons }) {
    return (
        <div className={styles.card}>
            <img
                src={
                    img
                        ? img
                        : "https://kentkonseyi.karatay.bel.tr/images/placeholder/600x400.jpg"
                }
                className={styles.card_img}
                alt="Post-Image"
            ></img>
            <div className={styles.card_body}>
                <h5 className="card-title mb-3">{title}</h5>

                <p className="card-text">{description}</p>

                {buttons.map((button) => (
                    <a
                        key={"tag-" + button}
                        href="#"
                        className={"btn " + ChooseTagColor(button)}
                    >
                        {button}
                    </a>
                ))}
            </div>
        </div>
    );
}
