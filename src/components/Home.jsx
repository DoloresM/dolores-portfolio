import Navbar from "./Navbar.jsx";
export default function Home(){
    return(
        <>
        <Navbar/>
        <header>
            <div className="sub-header">
                <h1>Lorem ipsum dolor </h1>
                <h2>consectetur adipiscing elit</h2>
                <div>
                    <p>Vestibulum scelerisque augue at leo facilisis</p>
                    <button>Let's Connect!</button>
                </div>
                

            </div>
            <div className="sub-header">
                <img src="https://images.unsplash.com/photo-1569396116180-210c182bedb8?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="series of zeros and ones outlined as a heart" />
            </div>
        </header>
        
        </>
    );
}