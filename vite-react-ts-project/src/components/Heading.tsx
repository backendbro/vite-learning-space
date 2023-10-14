type HeadingProps = {title:string}


const Heading = (prop:HeadingProps) => {
    return (
        <div>{prop.title}</div>
    )
}

export default Heading 