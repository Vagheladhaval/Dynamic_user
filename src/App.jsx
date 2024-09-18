import React from 'react'
import { Container, Card, CardBody } from 'react-bootstrap'
import { data } from './user'
export default function App() {
  return (
    <div>
       <Container fluid className='p-0'>
      <nav className='nav bg-purple-300  d-flex justify-content-center gap-4'>
        <li><a href="#" className=''>Desiner</a></li>
        <li><a href="#">Category</a></li>
        <li><a href="#">Attentiom</a></li>

      </nav>
      <div className='w-72 '>
        {data.map((user) =>
        {
            return(
                <> 
                <Card>
                    <CardBody className='d-flex justify-content-between '>
                        <span >{user.id}</span>
                        <span>{user.photo}</span>
                        <span>{user.name}</span>
                        <span>{user.age}</span>
                        <span>{user.email}</span>
                        <span>{user.phone}</span>
                    </CardBody>

                </Card>
                </>
            )
        }
    )
        
        }
      </div>
       </Container>
    </div>
  )
}
