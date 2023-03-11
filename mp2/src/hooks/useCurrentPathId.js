import { useLocation } from "react-router-dom"


export const useCurrentPathId = () => {

  const location = useLocation()
  const  id = parseInt(location.pathname.split("/")[2])

  return id
}