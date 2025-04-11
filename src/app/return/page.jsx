import { redirect } from 'next/navigation'
import Image from 'next/image';
import { stripe } from '../../lib/stripe'

export default async function Return({ searchParams }) {
    const { session_id } = await searchParams

    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const {
        status,
        customer_details: { email: customerEmail }
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })

    if (status === 'open') {
        return redirect('/')
    }

    if (status === 'complete') {
        return (
        <section id="success" className=''>
            <Image 
                src="/complete.png"
                fill
                className=''
            />
            <div className="flex items-center justify-center min-h-screen">
                <p className='relative text-white text-center justify-center'>
                    <span className='strong text-6xl'>
                        DZIĘKUJEMY ZA WSPARCIE, <br />
                        DZIĘKUJEMY, ŻE JESTEŚ!
                    </span>
                    
                    <br />
                    A confirmation email will be sent to
                    {' ' + customerEmail}. Jeśli masz jakieś pytania, proszę napisz {'mymlodzi@gmail.com'}
                </p>
            </div>
        </section>
        )
    }
}