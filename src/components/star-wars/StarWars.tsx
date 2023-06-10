import useStarWars from '../../hooks/useStarWars';

const StarWars = () => {
  const { data, loading } = useStarWars();
  console.log('after useStarWars() call: ', data);
  return (
    <>
      <h1>Star Wars Poeple</h1>
      {loading && <p>No peeples yet...</p>}
      {data && !loading && (
        <ul>
          {data.results.map((p) => (
            <li key={p.name}>{p.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default StarWars;
