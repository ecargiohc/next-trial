import Navbar from '../components/Navbar'

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
            <Navbar/>
        </div>
    )
}
export default someFunc;