const displayGreeting = async (greeting, contract) => {
    greeting = await contract.methods.sayHello().call()
    console.log(greeting)
    $('h2').html(greeting)
}

const updateGreeting = async (greeting, contract, accounts) => {
    let input
    greeting = await contract.methods.sayHello().call()
    $('input').on('change', (e) => {
        input = e.target.value
        console.log(input)
    })

    $('form').on('submit', async (e) => {
        console.log('submit')
        e.preventDefault()
        await contract.methods.updateGreetings(input)
        .send({ from: accounts[0], gas: 40000 })
        displayGreeting(greeting, contract)
    })
}

async function greetingApp() {
    const web3 = await getWeb3()
    const accounts = await web3.eth.getAccounts()
    const contract = await getContract(web3)

    console.log([web3, accounts, contract])

    let greeting
    displayGreeting(greeting, contract)
    updateGreeting(greeting, contract, accounts)
}

greetingApp()