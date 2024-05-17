import IProfile from "../interfaces/IProfile"
import style from '../styles/Profile.module.css'

export default function Profile(profile: IProfile) {
  return (
    <div className={style.profile_container}>
      <div>
        <p>Profile picture</p>
        <img src={profile.avatar.image_low_url as string} width={56} alt="Avatar"/>
      </div>

      <div className={style.text_container}>
        <p>Your <strong>Name</strong></p>
        <div className={style.text_field}>
          <p>{`${profile.name} ${profile.last_name}`}</p>
        </div>
      </div>

      <div className={style.text_container}>
        <p>Your <strong>E-mail</strong></p>
        <div className={style.text_field}>
          <p>{profile.email}</p>
        </div>
      </div>
    </div>
  )
}