interface Props {
    data: {
        url: string
        title: string
    }
}

export const Main = ({ data }: Props) => {
    return (
        <div className="img-container">
            <img src={data.url} alt={data.title || 'bg image'} className="bg-image" />
        </div>
    )
}
