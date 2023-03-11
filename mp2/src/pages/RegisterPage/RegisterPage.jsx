import './RegisterPage.css'

export function RegisterPage(){
    return(
        <div className='fondo'>
          <form>
            <h1 className='titulo'>Register</h1>
            <label>
              <input placeholder='Name' className='username'></input>
            </label>
            <label>
              <input placeholder='Username' className='username'></input>
            </label>
            <label>
              <input type={"email"} placeholder='Mail' className='username'></input>
            </label>
            <label>
              <input type={'password'} placeholder='Password' className='password'></input>
            </label>
            <label>
              <input type={'password'} placeholder='Confirm Password' className='password'></input>
            </label>

            <button className='button-login'>Register</button>
            <button className='button-google'>With google</button>
          </form>
        </div>
    )
}