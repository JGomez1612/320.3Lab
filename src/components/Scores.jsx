export default function Scores({ learner }) {
    return (
        <>
            <h3>Scores:</h3>
            <ul>{learner.scores.map((s, i) => (
                <li key={i}>
                    {s.date}: {s.score}
                </li>
            ))}
            </ul>
        </>
    )
}