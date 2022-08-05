const loginPage = document.querySelector('.loginPage');
const loginMainBlock = document.getElementById('loginMainBlock');
const rigisButtonLogin = document.querySelector('.regis')
const loginButtonLogin = document.querySelector('.login')

let viewLogin = true;
let offOn = false;
const viewFunc = () => {
    viewLogin = !viewLogin
    loginPage.style.display = viewLogin ? 'flex' : 'none'
    renderColor()
}

// ---------------- Login or Sign Up Page Funtions ----------------


const login = `
    <div class='inputInsetBlock'>
        <p>Enter your email and password to register.</p>
        <input type='text' class='input' placeholder="Username" />
        <input type='text' class='input' placeholder="Enter your email address" />
        <input type='text' class='input' placeholder="Password" />
        <input type='password' class='input' placeholder="Confirm Password" />
        <p class='forgetStyle'>Forgot Password?</p>
        <button class='button'>Register</button>
        <br>
        <br>
        <hr>
    </div>
`;
const regis = `
    <div class='inputInsetBlock'>
        <p>Enter your username and password to login.</p>
        <input type='text' class='input' placeholder="almamun_uxui@outlook.com" />
        <input type='password' class='input' placeholder="***********" />
        <p class='forgetStyle'>Forgot Password?</p>
        <button class='button'>Login</button>
        <br>
        <br>
        <hr>
        <p class='inputPInto'>Or login with</p>
    </div>
`;


// ---------------- Render Funtions ----------------


const render = () => loginMainBlock.innerHTML = offOn ? login : regis;
const renderColor = () => {
    if (offOn) loginButtonLogin.style.color = '#3D3D3D'
    else loginButtonLogin.style.color = '#46A358'
    if (offOn) rigisButtonLogin.style.color = '#46A358'
    else rigisButtonLogin.style.color = '#3D3D3D'
}



const loginButton = () => {
    offOn = false;
    render()
    renderColor()

}
const regButton = () => {
    offOn = true;
    render()
    renderColor()

}



render()
viewFunc()