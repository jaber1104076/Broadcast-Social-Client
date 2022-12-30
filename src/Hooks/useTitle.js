import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}--BroadCast Social`
    }, [title])
}

export default useTitle;