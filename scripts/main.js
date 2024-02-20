function getNameFromAuth(){
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("user is logged in")
            console.log(user.displayName)

            document.getElementById("name-goes-here").innerText = user.displayName
        } else {
            console.log("user is not logged in")
        }
    })
}

getNameFromAuth()