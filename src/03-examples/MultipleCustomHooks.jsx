import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { LoadingQuote, Quote } from "./"

export const MultipleCustomHooks = () => {
  const { increment, decrement, counter } = useCounter(1) 
  const { isLoading, data, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const { quote_id, quote, author, series } = !!data && data[0];
  const nextQuote = () => {

  }

  return (
    <>          
      <h1>BREAKING BAD QUOTES</h1>
      {
        (isLoading)?
          <LoadingQuote/>
        :
          <Quote author={ author } quote= {quote}/>
      }
      <button disabled={isLoading} className='btn btn-primary' onClick={increment}>Next</button>
    </>
  )
}
