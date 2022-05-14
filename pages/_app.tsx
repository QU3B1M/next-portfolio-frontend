import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className='grid grid-cols-12 gap-6 my-14 px48'>
    {/* setea la sidebar */}
    <div className='col-span-3 bg-white rounded-2xl'>sidebar</div> 
    {/* setea el componente main */}
    <div className='col-span-9 bg-white rounded-2xl'>
      <Component {...pageProps} />
    </div>
  </div>
  )
}

export default MyApp
