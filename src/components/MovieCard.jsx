import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import styles from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();

  return (
    <div className="styles.card">
      <img className = {styles.image} src={movie.Poster} alt={movie.Title} />
      <h3 className = {styles.title}>{movie.Title}</h3>
      <p className = {styles.year}>{movie.Year}</p>
      <button className={styles.button} onClick={() => dispatch(addToCart(movie))}>Adicionar ao Carrinho</button>
    </div>
  );
}
