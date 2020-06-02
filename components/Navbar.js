import Link from 'next/link'

const Navbar = () => {
    const styles = {
        display: "flex", 
        background: "pink",
        justifyContent: "space-between",
        padding: "1rem"
    }
    return (
        <div style={styles}>
            <Link href="/">
                <a>Home!</a>
            </Link>
            <Link href="/about">
                {/* must give it some content; a 'child' */}
                <a>About Page</a>
            </Link><br></br>
            <Link href="/contact">
                <a>Contact Page</a>
            </Link>
        </div>
    )
}
export default Navbar;