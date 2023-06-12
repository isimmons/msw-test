import styled from 'styled-components';
import useStarWars from '../../hooks/useStarWars';

const Foo = styled.div`
  color: blue;
`;

const StarWars = () => {
  const { data, isLoading, error } = useStarWars();
  return (
    <Foo>
      <h1>Star Wars Poeple</h1>
      {error && <p>Ah Crap!!! {error}</p>}
      {isLoading && <p>No peeples yet...</p>}
      {data && !isLoading && (
        <ul>
          {data.map((p) => (
            <li key={p.name}>{p.name}</li>
          ))}
        </ul>
      )}
    </Foo>
  );
};

export default StarWars;
