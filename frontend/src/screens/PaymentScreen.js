import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState(
    cart.paymentMethod || 'Cash on Delivery'
  )

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Payment Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='Cash on Delivery (COD)'
              id='COD'
              name='paymentMethod'
              value='Cash on Delivery'
              checked={paymentMethod === 'Cash on Delivery'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='my-3'
            ></Form.Check>

            <Form.Check
              type='radio'
              label='JazzCash'
              id='JazzCash'
              name='paymentMethod'
              value='JazzCash'
              checked={paymentMethod === 'JazzCash'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='my-3'
            ></Form.Check>

            <Form.Check
              type='radio'
              label='EasyPaisa'
              id='EasyPaisa'
              name='paymentMethod'
              value='EasyPaisa'
              checked={paymentMethod === 'EasyPaisa'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='my-3'
            ></Form.Check>

            <Form.Check
              type='radio'
              label='Bank Transfer / Raast'
              id='BankTransfer'
              name='paymentMethod'
              value='Bank Transfer'
              checked={paymentMethod === 'Bank Transfer'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='my-3'
            ></Form.Check>

            <Form.Check
              type='radio'
              label='Credit / Debit Card'
              id='Card'
              name='paymentMethod'
              value='Credit/Debit Card'
              checked={paymentMethod === 'Credit/Debit Card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='my-3'
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-2'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
