import style from '~/_main.module.scss'
import classNames from "classnames/bind"

const cx = classNames.bind(style)

function App() {
  return (
    <>
      <h1 className={cx('title')}>
          hello
      </h1>
    </>
  )
}

export default App
