import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Psychare
Therapia

`;
    },
        [title])
}
export default useTitle;