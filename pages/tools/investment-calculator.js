import dynamic from 'next/dynamic'

const MyNotSsrComponent = dynamic(
  () => import('./../../modules/InvestCalculator'),
  { ssr: false }
)
export default MyNotSsrComponent