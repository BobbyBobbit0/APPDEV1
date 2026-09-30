function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { name: "Bogart", age: 22 };
            resolve(user);
        }, 1000);
    });
}

async function getUserData() {
    try {
        const user = await fetchUser();
        console.log(user);
    } catch (error) {
        console.log("Error fetching user:", error.message);
    }
}

getUserData();