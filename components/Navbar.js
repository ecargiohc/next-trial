import Link from 'next/link'

const Navbar = () => {
    const styles = {
        display: "flex", 
        background: "purple",
        alignItems: "space-between"
    }
    return (
        <div style={styles}>
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