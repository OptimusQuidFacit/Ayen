import styles from "./home.module.css";
const loading = () => {
    return (
        <div className={`${styles.loader} fw-bold text-center m-5 fs-2`}>
            Ayen...
        </div>
    );
}

export default loading;