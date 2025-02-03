import { useState, useEffect } from 'react';
import { 
  Container,
  Button,   
  Input,
  SuperheroList,
  SuperheroListItem,
  SuperheroInfo,
  HumilityScore, } from './SuperheroStyles';

function App() {
  const [superheroes, setSuperheroes] = useState([]);
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');

  const fetchSuperheroes = async () => {
    const res = await fetch('http://localhost:3000/superheroes');
    const data = await res.json();
    setSuperheroes(data);
  };

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newSuperhero = {
      name,
      superpower,
      humilityScore: Number(humilityScore), // Convert to a number
    };
    
    // Send a POST request to the backend
    await fetch('http://localhost:3000/superheroes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSuperhero),
    });
  
    fetchSuperheroes();
  };
  

  return (
    <Container>
      <h1>Superheroes</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Superhero Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Superpower"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Humility Score (1-10)"
          value={humilityScore}
          onChange={(e) => setHumilityScore(e.target.value)}
          required
          min="1"
          max="10"
        />
        <Button type="submit">Add Superhero</Button>
      </form>
      <h2>Superheroes List</h2>
      <SuperheroList>
        {superheroes.map((hero: { name: string; superpower: string; humilityScore: number; }) => (
          <SuperheroListItem key={hero.name}>
            <SuperheroInfo>{hero.name}</SuperheroInfo> - {hero.superpower} 
            (<HumilityScore>Humility Score: {hero.humilityScore}</HumilityScore>)
          </SuperheroListItem>
        ))}
      </SuperheroList>
    </Container>
  );
}

export default App;
