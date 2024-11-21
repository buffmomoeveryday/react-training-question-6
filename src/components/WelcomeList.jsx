export default function WelcomeList({ index, name, onRemove }) {
    return (

        <li key={index}>{name}
            <button onClick={onRemove} style={{ marginLeft: "10px" }}>
                Remove
            </button>
        </li>

    )
}