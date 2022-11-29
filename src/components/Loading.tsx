import { Center, Spinner } from 'native-base';

export function Loading() {
  return (
    <Center flex={1} bg="gray.400">
      <Spinner color="#000" />
    </Center>
  )
}