interface Props {

}

export const SideBar = (props: Props) => {
    return (
        <div className="sidebar">
            <div className="bg-overlay"></div>
            <div className="sidebar-contents">
                <h2>The brutan Marcial landspace</h2>
                <div>
                    <p>Description</p>
                    <p>This is a descripton of the image of Marcial planet</p>
                </div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16m-7-7l7 7l-7 7" /></svg>
                </button>
            </div>
        </div>
    )
}
