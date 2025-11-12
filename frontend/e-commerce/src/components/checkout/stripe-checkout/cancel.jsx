import React from 'react'
import { useNavigate } from 'react-router'
import Layout from '../../shared/layout'

function Cancelled() {
    const navigate = useNavigate()
  return (
    <Layout>
        <div className='checkout'>
            <h1> Payment failed</h1>
            <p>Payment was not successful</p>
         <div>
            <button className='nomad-btn is-black' onClick={() => navigate('/shop')}>
                <div className='text'>Continue Shopping</div>
            </button>
         </div>
        </div>
    </Layout>
  )
}

export default Cancelled