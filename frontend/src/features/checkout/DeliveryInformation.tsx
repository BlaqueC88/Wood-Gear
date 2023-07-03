import { 
  Box, 
  Card, 
  CardBody, 
  CardHeader, 
  FormLabel, 
  Heading, 
  Input, 
  Stack } from '@chakra-ui/react'
import React from 'react'

export const DeliveryInformation = () => {
  return (
    <Card borderWidth="1px" borderColor="gray.200" shadow="none">
      <CardHeader>
        <Heading size="md">Delivery Information</Heading>
      </CardHeader>

      <CardBody>
        <Stack spacing="2rem">
          <Box>
            <FormLabel>
              Full Name
              <Input type="text" name="full-name" placeholder="Full name" mt="10px"/>
            </FormLabel>
          </Box>

          <Box>
            <FormLabel>
              Address
              <Input type="text" name="delivery-address" placeholder="address" mt="10px" />
            </FormLabel>
          </Box>

          <Box>
            <FormLabel>
              Phone
              <Input type="text" name="delivery-phone" placeholder="phone number" mt="10px" />
            </FormLabel>
          </Box>

          <Box>
            <FormLabel>
              Email
              <Input type="email" name="delivery-email" placeholder="email" mt="10px" />
            </FormLabel>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}
