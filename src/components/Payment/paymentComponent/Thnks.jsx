import React from 'react'

import {Alert,AlertIcon,AlertDescription,AlertTitle} from "@chakra-ui/react"

function Thnks() {
  return (
    <div>


<Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />

  <AlertTitle mt={4} mb={1} fontSize='lg'>
    
Payment Done!

  </AlertTitle>

  <AlertDescription maxWidth='sm'>

  Thank you for your purchase !
  </AlertDescription>

</Alert>

    </div>
  )

}

export default Thnks