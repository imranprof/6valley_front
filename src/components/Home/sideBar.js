import styles from "../../styles/sidebar.module.css"
import { useCategories } from "@/hooks/useCategories";
import { Category } from "./category";

export const SideBar = () => {
  const { data, loading, error } = useCategories();

  const categories = data;



  if (error) {
    console.log(error);
  }

    return (
		<div className={styles.sideBar}>
            {categories?.map((category) => (
              <Category key = {category.id} name = {category.name} />
      ))}
		</div>
    );
  };