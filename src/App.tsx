import { useEffect, useState } from "react"
import { Footer } from "./components/Footer"
import { Main } from "./components/Main"
import { SideBar } from "./components/SideBar"

function App() {
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState(null)

    const handleToggleModal = () => {
        setShowModal(!showModal)
    }

    useEffect(() => {
        async function fetchApiData() {
            const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY
            const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`

            const today = (new Date()).toDateString()
            const localKey = `NASA-${today}`
            const localData = localStorage.getItem(localKey)
            if (localData) {
                const apiData = JSON.parse(localData)
                setData(apiData)
                return
            }

            localStorage.clear()

            try {
                const response = await fetch(url)
                const apiData = await response.json()
                localStorage.setItem(localKey, JSON.stringify(apiData))
                setData(apiData)
                console.table(apiData);
            } catch (err: any) {
                console.log(err);
            }
        }
        fetchApiData()

    }, [])

    return (
        <>
            {data ? (<Main data={data} />) : (
                <div className="loading-state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269c0 .578-.396 1.074-.935 1.286c-.085.034-.17.07-.253.106c-.531.23-1.162.16-1.572-.249a1.269 1.269 0 0 0-1.794 0L4.412 5.446a1.269 1.269 0 0 0 0 1.794c.41.41.48 1.04.248 1.572a7.946 7.946 0 0 0-.105.253c-.212.539-.708.935-1.286.935C2.568 10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14c.578 0 1.074.396 1.286.935c.034.085.07.17.105.253c.231.531.161 1.162-.248 1.572a1.269 1.269 0 0 0 0 1.794l1.034 1.034a1.269 1.269 0 0 0 1.794 0c.41-.41 1.04-.48 1.572-.249c.083.037.168.072.253.106c.539.212.935.708.935 1.286c0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.269-.568 1.269-1.269c0-.578.396-1.074.935-1.287c.085-.033.17-.068.253-.104c.531-.232 1.162-.161 1.571.248a1.269 1.269 0 0 0 1.795 0l1.034-1.034a1.269 1.269 0 0 0 0-1.794c-.41-.41-.48-1.04-.249-1.572c.037-.083.072-.168.106-.253c.212-.539.708-.935 1.286-.935c.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269c-.578 0-1.074-.396-1.287-.935a7.755 7.755 0 0 0-.105-.253c-.23-.531-.16-1.162.249-1.572a1.269 1.269 0 0 0 0-1.794l-1.034-1.034a1.269 1.269 0 0 0-1.794 0c-.41.41-1.04.48-1.572.249a7.913 7.913 0 0 0-.253-.106C14.396 4.343 14 3.847 14 3.27z" /><path d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z" /></g></svg>
                </div>
            )}
            {showModal && (
                data && <SideBar data={data} handleToggleModal={handleToggleModal} />
            )}
            {data && (
                <Footer data={data} showModal={showModal} handleToggleModal={handleToggleModal} />
            )}
        </>
    )
}

export default App
