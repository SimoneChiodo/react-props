import styles from "./Post.module.css";

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
                    <a href="#" className="btn btn-warning">
                        {button}
                    </a>
                ))}
            </div>
        </div>
    );
}
