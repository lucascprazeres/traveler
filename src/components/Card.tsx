import styles from './Card.module.css'

interface CardProps {
  imageUrl: string;
  city: string;
  locations: number;
}

export function Card({ imageUrl, city, locations }: CardProps) {
  return (
    <div className={styles.card}>
      <img
        src={imageUrl}
        alt={city}
        />
      <footer>
        <span>{city}</span>
        <p>{locations} locais</p>
      </footer>
    </div>
  )
}