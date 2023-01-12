import Ad from "./Ad"
import Main from "./Main"
import styles from "./styles.module.scss"
import Top from "./Top"
const Header = ({country}) => {
  return (
    <header className={styles.header}>
      <Ad></Ad>
      <Top country={country}></Top>
      <Main></Main>
    </header>
  )
}

export default Header