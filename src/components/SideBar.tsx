interface Props {
    data: {
        title: string
        explanation: string
        date: string
    },
    handleToggleModal: () => void
}

export const SideBar = (
    { data, handleToggleModal }: Props
) => {
    return (
        <div className="sidebar">
            <div className="bg-overlay"></div>
            <div className="sidebar-contents">
                <h2>{data.title}</h2>
                <div className="description-container">
                    <p className="description-title">{data.date}</p>
                    <p>{data.explanation}</p>
                </div>
                <button onClick={() => handleToggleModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16m-7-7l7 7l-7 7" /></svg>
                </button>
            </div>
        </div>
    )
}
