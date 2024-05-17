import style from '../styles/Input.module.css'
import IInput from '../interfaces/IInput'

export default function Input({ name, label, placeholder, type = 'text', onChange, value }: IInput) {
  return (
    <div className={style.container}>
        <div className={style.label_container}>
          <label htmlFor={name}>
            {label}
          </label>
        </div>
        <input
          className={style.input}
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          required
          onChange={onChange}
          value={value}
        />
    </div>
  )
}