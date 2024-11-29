import styles from "./Post.module.css";

export default function () {
    return (
        <div className={styles.card}>
            <img
                src="https://kentkonseyi.karatay.bel.tr/images/placeholder/600x400.jpg"
                className={styles.card_img}
                alt="Post-Image"
            ></img>
            <div className={styles.card_body}>
                <h5 className="card-title mb-3">Titolo del post</h5>
                <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis blanditiis debitis adipisci incidunt architecto est
                    necessitatibus expedita excepturi iure accusamus soluta
                    facilis totam ullam maiores optio illo, consequuntur nisi
                    ad.
                </p>
                <a href="#" className="btn btn-warning">
                    Leggi di più
                </a>
            </div>
        </div>
    );
}
