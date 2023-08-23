export const metadata = {
    title: "Manaual Next JS",
    description: "Manaual Next JS"
}

const RootLayout = ({ children }) => {
    return (
        <hmtl>
            <body>{children}</body>
        </hmtl>
    )
}

export default RootLayout