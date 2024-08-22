interface Props {
    handleToggleModal: () => void
}

export const Footer = (
    { handleToggleModal }: Props
) => {
    return (
        <footer>
            <div className="bg-gradient"></div>
            <div>
                <h2>The brutal Marcial Landscape</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={() => handleToggleModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m-.5 5a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2zM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1z" clipRule="evenodd" /></svg>
            </button>
        </footer>
    )
}
