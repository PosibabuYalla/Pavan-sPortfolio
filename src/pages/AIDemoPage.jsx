import PageLayout from '../components/PageLayout'
import LiveAISection from '../components/LiveAISection'
import CursorGlow from '../components/CursorGlow'

export default function AIDemoPage() {
  return (
    <>
      <CursorGlow />
      <PageLayout><LiveAISection /></PageLayout>
    </>
  )
}
