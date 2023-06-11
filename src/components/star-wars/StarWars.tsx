import useStarWars from '../../hooks/useStarWars';

const StarWars = () => {
  const { data, isLoading, error } = useStarWars();
  return (
    <>
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
    </>
  );
};

export default StarWars;
