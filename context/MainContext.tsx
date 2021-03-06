import { createContext, useState, ReactNode } from 'react'
import getData from '../custom-hook/getData'

interface PropsType {
  children: ReactNode
}

interface ContextInterface {
  showMenuCard?: boolean
  setShowMenuCard?: (arg0: boolean) => void
  showProfileCard?: boolean
  setShowProfileCard?: (arg0: boolean) => void
  userProfile?: {
    data?: {
      name?: string
      bio?: string
      country?: string
      city?: string
      phone?: string
      interestedIn?: string[]
      topics_of_interest?: string[]
    }
  }
  avatarLink?: string | null
}

export const MainContext = createContext<ContextInterface>({})

export const MainContextProvider = ({ children }: PropsType) => {
  const { userProfile, avatarLink } = getData()
  const [showMenuCard, setShowMenuCard] = useState(false)
  const [showProfileCard, setShowProfileCard] = useState(false)

  return (
    <MainContext.Provider
      value={{
        showMenuCard,
        setShowMenuCard,
        showProfileCard,
        setShowProfileCard,
        userProfile,
        avatarLink,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
