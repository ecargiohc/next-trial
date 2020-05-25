import Link from 'next/link';

// const someFunction = () => (
//     <div>
//         <p>harro from Index page</p>
//     </div>
// );

// or same thing below:

const someFunc = () => {
    console.log("***running INDEX component***")
    return (
        <div>
        <Link href="/about">
            {/* must give it some content; a 'child' */}
            <a>About Page Link</a>
        </Link>
            <p>Hello from INDEX page</p>
        </div>
    )
}
export default someFunc;