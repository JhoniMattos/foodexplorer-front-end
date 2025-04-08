import { Container } from './styles';

import { Input } from '../Input';

export function Search({ setSearch, isDisabled }) {
  return (
    <Container>
      <Input 
      placeholder="&#x1F50E;&#xFE0E; Busque por pratos ou ingredientes"
      disabled={isDisabled}
      onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  )
}