import './main.css'

const spans = [
    'Learn.',
    'Create.',
    'Develop.',
]

const Main = () => {
    return (
        <>
            {
                spans.map((elem, index) => {
                    return (<span>{spans[index]}</span>)
                })
            }
        </>
    )
}

export default Main