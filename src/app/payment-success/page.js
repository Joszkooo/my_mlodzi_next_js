import Image from 'next/image'

export default function PaymentSuccess({searchParams: {amount}}) {
  return (
    <section>
      <Image 
          src="/complete.png"
          fill
      />
      <div className="flex items-center justify-center min-h-screen">
          <p className='relative text-white text-center justify-center'>
              <span className='strong text-6xl'>
                  DZIĘKUJEMY ZA WSPARCIE, <br />
                  DZIĘKUJEMY, ŻE JESTEŚ!
                  WPŁACONO {amount} zł!
              </span>
              
              <br />
              A confirmation email will be sent to
              {' ' + customerEmail}. Jeśli masz jakieś pytania, proszę napisz {'mymlodzi@gmail.com'}
          </p>
      </div>
  </section>
  )
}
