import React from "react"
import Profile from "../components/Profile"
import { getProfile } from "../services/Cliqdrive"
import IProfile from "../interfaces/IProfile"
import Button from "../components/Button"
import { useNavigate } from "react-router"
import { AxiosError } from "axios"

export default function ProfilePage() {
  const [profile, setProfile] = React.useState<IProfile>()
  const navigate = useNavigate()


  React.useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token') as string)
    getProfile(token)
      .then((response) => {
        setProfile(response.data)
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          alert(`${error.response?.data.detail}`)
          localStorage.removeItem('token')
          navigate('/')
        }
      })
  })

  return (
    <main className="main">
      <header className="header">
        <div style={{ width: '272px' }}>
          <Button
            textButton="Logout"
            type="button"
            onClick={() => {
              localStorage.removeItem('token')
              navigate('/')
            }}
          />
        </div>
      </header>
      {
        profile ?
          <Profile
            avatar={profile.avatar}
            email={profile.email}
            last_name={profile.last_name}
            name={profile.name}
          />
          : ''
      }
    </main>
  )
}