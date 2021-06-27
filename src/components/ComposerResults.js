function ComposerResults(props) {
  return (
    <div>
      {console.log(
        "wig",
        props.whatever.map((comp) => ({ comp }))
      )}

      <ul>
        {props.whatever.map((comp) => (
          <li key={comp.id}>
            <p>{comp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComposerResults;
