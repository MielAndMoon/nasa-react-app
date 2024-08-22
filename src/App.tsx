import { useEffect, useState } from "react"
import { Footer } from "./components/Footer"
import { Main } from "./components/Main"
import { SideBar } from "./components/SideBar"

function App() {
    const [showModal, setShowModal] = useState(false)

    const handleToggleModal = () => {
        setShowModal(!showModal)
    }

    useEffect(() => {
        async function fetchApiData() {
            const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY
            const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`

            try {
                const response = await fetch(url)
                const data = await response.json()
                console.log(data);
            } catch (err) {
                console.log(err.message);

            }
        }

        fetchApiData()
    }, [])

    return (
        <>
            <Main />
            {showModal && (
                <SideBar handleToggleModal={handleToggleModal}/>
            )}
            <Footer handleToggleModal={handleToggleModal} />
        </>
    )
}

export default App
