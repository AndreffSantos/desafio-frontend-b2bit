export default interface IInput {
  name: string
  label: string
  placeholder: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string | number
  type?: string
}