export default function Learners({ learner }) {
    return (
        <div className="learner">
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
        </div>
    )
}