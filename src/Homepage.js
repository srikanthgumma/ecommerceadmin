import { Link } from "react-router-dom";

export default function Homepage(){
    
    return (
        <>
          <div className="text-center p-4 w-100 bg-black">
                <h1 className='text-white font-bold'>Ecommerce Admin</h1>
            </div>
            <div className="p-10 text-center mt-10">
        <Link to='signup'  className="text-white bg-black p-3 rounded-2xl font-bold">Register Now</Link>

            </div>
        </>
    )
}