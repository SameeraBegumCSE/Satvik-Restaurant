import styles from "./Catalogue.module.css";
import sattva from "../../images/sattva.jpg";
import Products from "../../components/productsSet/Products";
import { useCollection } from "../../hooks/useCollection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Catalogue() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const { documents, error } = useCollection("products");

  return (
    <div data-aos="fade-up">
      <p className={styles.CatalogueHead} data-aos="fade-up">Catalogue</p>

      <div className={styles.hookSet}>
        <div className={styles.curvedImageContainer}>
          <img src={sattva} className={styles.sattvaImg} alt="Sattva" />
        </div>

       <div className={styles.catalogueHook}>
  <p> Discover flavors that love you back.</p>
  <p> Browse our 100% plant-based menu crafted for taste and wellness.</p>
</div>

      </div>

      <div className={styles.displayProducts} data-aos="fade-up">
        {error && <p>{error}</p>}
        {!documents && <Backdrop />}
        {documents && <Products products={documents} />}
      </div>
    </div>
  );
}
