const nav = document.querySelector(".nav");
const username = document.querySelector(".username");
function checkAccount(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
        nav.innerHTML = `
        <nav>
        <button class="btn btn-success">
            <a href="/myComputers/myComputers.html">My computers</a>
        </button>
        <button class="btn btn-warning">
            <a href="/computers/computers.html">Computers</a>
        </button>
        <button class="logOutBtn btn btn-danger">
            Log Out
        </button>
    </nav>
        `
        document.querySelector(".logOutBtn").addEventListener("click", () => {
            localStorage.setItem("user", JSON.stringify(""));
            checkAccount()
        })
        username.innerHTML = user.username;
    } else {
        nav.innerHTML = `
        <button class="btn btn-warning">
        <a href="/computers/computers.html">Computers</a>
    </button>
    <button class="btn btn-success">
        <a href="/logIn/logIn.html">Log in</a>
    </button>
        `
        username.innerHTML = ""
    }
}

checkAccount()


