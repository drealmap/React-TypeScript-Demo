type InputProps = React.ComponentProps<'input'>

export const Input2 = (props: InputProps) => {
  return (
    <input title='input' type="text" {...props} />
  )
}
