import Layout from "../components/layout/Layout"
import Link from 'next/link'
const Portfolio = (props) => {

  return (
    <Layout title="Portfolio">
      <div className="container">
        <div className="my-4">
          <label className="font-weight-bold">Outstanding Achievements</label>
        </div>
        <div className="mb-4">
          <label className="font-weight-bold">Full Stack (React/Node + MySQL)</label>
          <div><a href="https://www.chulabook.com" target={'_blank'}>www.chulabook.com</a></div>
          <div><a href="https://tpipolene.com/" target={'_blank'}>tpipolene.com</a></div>
          <div><a href="https://www.sammakorn.co.th" target={'_blank'}>www.sammakorn.co.th</a></div>
        </div>
        <div className="mb-4">
          <label className="font-weight-bold">Frontend (React)</label>
          <div><a href="https://www.singhalife.com" target={'_blank'}>www.singhalife.com</a></div>
        </div>
        <div className="my-4">
          <label className="font-weight-bold">Full Stack (PHP Laravel + MySQL)</label>
          <div><a href="https://tcrbank.com" target={'_blank'}>tcrbank.com</a></div>
        </div>

        <div>
          <Link href={'/'}>Back to Home</Link>
        </div>
      </div>
    </Layout>
  ) 
}

export default Portfolio