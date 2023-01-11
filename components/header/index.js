import Ad from "./Ad"
import Main from "./Main"
import styles from "./styles.module.scss"
import Top from "./Top"
const Header = () => {
  return (
    <header className={styles.header}>
      <Ad></Ad>
      <Top></Top>
      <Main></Main>
    </header>
  )
}

export default Header