import Layout from '@/components/Layout'

export default function TestPage({ pagedata }) {
  return (
    <Layout>
      <h1>Test Page</h1>
      <ol>
        <li>
          Urgent - I need a campsite <strong>today</strong>!
        </li>
        <li>
          I need a campsite <strong>within the next week or two</strong>
        </li>
        <li>
          I need a campsite <strong>within the next few months</strong>
        </li>
      </ol>
    </Layout>
  )
}
