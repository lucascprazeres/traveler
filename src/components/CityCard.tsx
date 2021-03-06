import styles from './CityCard.module.css'

interface CardProps {
  imageUrl: string;
  city: string;
  locations: number;
  disabled?: boolean;
}

export function CityCard({ imageUrl, city, locations, disabled }: CardProps) {
  return (
    <article className={styles.card} style={{ opacity: disabled ? 0.3 : 1 }}>
      <img
        src={imageUrl}
        alt={city}
        />
      <footer>
        <span>{city}</span>
        <p>{locations} locais</p>
      </footer>
    </article>
  )
}