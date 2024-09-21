import { ReactNode } from "react"

export interface MenuItemInfos {
 label: string
 icon: ReactNode
 onClick: () => void
}