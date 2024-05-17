import style from '../styles/Button.module.css'
import IButton from '../interfaces/IButton'

export default function Button({ textButton, onClick, isDisabled = false, type }: IButton) {
  return (
    <button
      className={style.button}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {textButton}
    </button>

  )
}