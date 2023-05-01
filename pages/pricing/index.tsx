import Link from "next/link"
import { MainLayout } from "../../components/layouts/MainLayout"
import { DarkLayout } from "../../components/layouts/DarkLayout"

export default function PricingPage() {
  return (
    <MainLayout>
      <DarkLayout>

        <h1>Pricing Page</h1>
        <h1 className='title'>
          Ir al <Link href="/">Home</Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code className='code'>pages/pricing.js</code>
        </p>
      </DarkLayout>
    </MainLayout>
  )
}