import Link from "next/link";
import styles from "./home.module.css"
const Notfound = () => {
    return (
        <>
            <div className={`${styles.notfound} m-3 text-center`}>
                <p className="mx-3">Sorry the page you are looking for does not exist</p>
                <div className="btn btn-primary p-3 text-white">
                    <Link className="text-white text-decoration-none" href="/">
                    Go back to the Home Page
                    </Link>
                </div>

            </div>
        </>
    );
}

export default Notfound;