// This is the page where a new user can create an account 
import Navbar from './components/Navbar';

function Register() {
  return (
    <div className="Register">
      <Navbar />
        <div className='container bg-background'>
            <h1 className='text-xl font-font-gastromond text-red-text text-center'>Register</h1>
            <p className='text-accents'>Blue wave här</p>

            <div className='bg-main-pink w-1/2 h-1/2 justify-align flex flex-col gap-5 justify-center items-center mt-10 rounded-lg'>
                <input type="email" placeholder="Email" className='bg-background h-8 w-5/6 rounded-md'></input>
                <input type="password" placeholder="Password" className='bg-background h-8 w-5/6 rounded-md'></input>
                <input type="password" placeholder="Confirm Password" className='bg-background h-8 w-5/6 rounded-md'></input>
                <input type="text" placeholder="Username" className='bg-background h-8 w-5/6 rounded-md'></input>
                <input type="text" placeholder="Display Name" className='bg-background h-8 w-5/6 rounded-md'></input>
                <button className="bg-accents rounded-lg">Let's Go!</button>
            </div>
            <div>
                <p>Already have an account?</p>
                <button className="bg-main-pink rounded-lg">Let'sign in!</button>
            </div>
            

        
        
      </div>
    </div>
  );
}

export default Register;
