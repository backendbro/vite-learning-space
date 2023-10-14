import { ReactNode } from "react"

type SectionProps = {
    title?:string,
    children:ReactNode
}

export const Section = ({children, title = "My subheading"}: SectionProps) => {
    return(
        <section>
            <h1>{title}</h1>
            <p>{children}</p>
        </section>
    )
}