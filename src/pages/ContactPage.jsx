import PageLayout from '../components/PageLayout'
import ContactSection from '../components/ContactSection'
import CursorGlow from '../components/CursorGlow'

export default function ContactPage() {
  return (
    <>
      <CursorGlow />
      <PageLayout><ContactSection /></PageLayout>
    </>
  )
}
