import styles from './Card.module.css'

interface CardProps {
  imageUrl: string;
  city: string;
  locations: number;
  disabled?: boolean;
}

export function Card({ imageUrl, city, locations, disabled }: CardProps) {
  return (
    <div className={styles.card} style={{ opacity: disabled ? 0.3 : 1 }}>
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