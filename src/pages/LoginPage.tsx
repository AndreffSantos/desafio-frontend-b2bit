import React from 'react'
import { Formik } from 'formik'
import logo from '../assets/logo.svg'
import Input from '../components/Input'
import Button from '../components/Button'
import { login } from '../services/Cliqdrive'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router'
import ILoginValidate from '../interfaces/ILoginValidate'

export default function LoginPage() {
  const navigate = useNavigate()
  
  const requestLogin = async (values: {email: string, password: string}) => {
    try {
      const { data: { tokens: { access } } } = await login(values)
        localStorage.setItem('token', JSON.stringify(access))
        navigate('/profile')
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(`${error.response?.data.detail}`)
      }
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/profile')
    }
  })

  return (
    <main>
      <div className='container'>
        <img src={logo} alt="Logo" width={295} height={116} />

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={ requestLogin }
          validate={values => {
            const errors: ILoginValidate = {}
            if (!values.email) {
              errors.email = 'Email é necessario'
            } else if (!/\S+@\S+\.+com+/.test(values.email)) {
              errors.email = 'Email invalido'
            } 
            
            if (!values.password) {
              errors.password = 'Senha é necessaria'
            }
            return errors
          }}
        >
          {
            ({ handleSubmit, handleChange, values, errors }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  label='E-mail'
                  placeholder='@gmail.com'
                  type='email'
                  name='email'
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email}
                
                <Input
                  label='Password'
                  placeholder='*******************'
                  name='password'
                  type='password'
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password}

                <Button
                  textButton='Sign In'
                  type='submit'
                />
              </form>
            )
          }
        </Formik>
      </div>
    </main>
  )
}