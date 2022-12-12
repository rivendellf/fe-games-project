import { getCategories } from "../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Categories = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p id="loading">...loading</p>
  ) : (
    <>
      <section id="categoriesContainer">
        <h2 id="categoriesTitle">Categories</h2>
        <ul id="categoriesList">
          <>
            {categories.map((category) => {
              return (
                <>
                  <li className="categoriesItem" key={category.slug}></li>
                  <Link
                    to={`/${category.slug}`}
                    id={`categoryLink${category.slug}`}
                    onClick={() => {
                      setCurrentCategory(category.slug);
                    }}
                  >
                    <p id="categoryTitle">{category.slug}</p>
                  </Link>
                  <p id="categoryDesc">{category.description}</p>
                </>
              );
            })}
          </>
        </ul>
      </section>
    </>
  );
};
