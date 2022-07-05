const getWeb3 = () => {
    return new Promise((resolve, reject) => {
        window.addEventListener('load', async () => {
            try {
                const web3 = new Web3('http://localhost:7545')
                resolve(web3)
            } catch (error) {
                reject(error)
            }
        })
    })
}

const getContract = async (web3) => {
    const data = await $.getJSON('./contracts/Greetings.json')
    const netId = await web3.eth.net.getId()
    const deployNetwork = data.networks[netId]
    const greeting = new web3.eth.Contract(
        data.abi,
        deployNetwork && deployNetwork.address
    )
    return greeting
}