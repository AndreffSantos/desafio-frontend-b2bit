export default interface IButton {
  textButton: string
  type: "submit" | "reset" | "button" | undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  isDisabled?: boolean
}