import './LoginPage.css'

export function LoginPage(){
    return(
        <div className='fondo'>
          <form>
            <h1 className='titulo'>Login</h1>
            <label>
              <input placeholder='Usuario' className='username'></input>
            </label>
            <label>
              <input type={'password'} placeholder='Password' className='password'></input>
            </label>

            <button className='button-login'>Login</button>
            <button className='button-google'>With google</button>
          </form>
        </div>
    )
}