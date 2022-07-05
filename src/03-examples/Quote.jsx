export const Quote = ({ quote, author}) => {
  return (
    <blockquote className='mt-5 blockquote text-end'>
      <p className='mt-1'>{ quote }</p>
      <footer className='blockquote-footer'>{ author }</footer>
    </blockquote>
  )
}
