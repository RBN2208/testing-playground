export default function Card({title, subtitle, isTextVisible, onShowText}) {
    return (
        <section>
            <h2>{title}</h2>
            <button onClick={onShowText}>Show text</button>
            {isTextVisible && <p>{subtitle}</p>}
        </section>
    )
}