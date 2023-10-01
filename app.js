let clickUpgrades = [
    {
        name: 'Light Saber',
        price: 50,
        quantity: 1,
        multiplier: 1
    },

    {
        name: 'Ray Gun',
        price: 500,
        quantity: 0,
        multiplier: 0
    }
];

let autoUpgrades = [
    {
        name: 'Alien Farm',
        price: 1000,
        quantity: 0,
        multiplier: 0
    },

    {
        name: 'Alien Factory',
        price: 5000,
        quantity: 0,
        multiplier: 0
    }
];


let aliens = 0

function mine() {
    const lightsaber = clickUpgrades.find(click => click.name == "Light Saber")
    const raygun = clickUpgrades.find(click => click.name == "Ray Gun")

    aliens += lightsaber.multiplier + raygun.multiplier
    console.log(aliens)
    drawAliens()
}

function autoMine() {
    const alienfarm = autoUpgrades.find(auto => auto.name == 'Alien Farm')
    const alienfactory = autoUpgrades.find(auto => auto.name == 'Alien Factory')

    aliens += alienfactory.multiplier + alienfarm.multiplier
    drawAliens()
}

function drawAliens() {
    document.getElementById('aliens').innerText = aliens
}

function buyLightSaber() {
    const LightSaber = clickUpgrades.find(click => click.name == 'Light Saber')
    if (aliens >= LightSaber.price) {
        aliens -= LightSaber.price
        LightSaber.quantity++
        LightSaber.multiplier++
        LightSaber.price += LightSaber.price
        console.log(LightSaber)
        drawAliens()
        drawClickStats()
        calculateClickPower()
    }
}

function buyRayGun() {
    const RayGun = clickUpgrades.find(click => click.name == 'Ray Gun')
    if (aliens >= RayGun.price) {
        aliens -= RayGun.price

        RayGun.quantity++
        RayGun.multiplier += 20
        RayGun.price += RayGun.price
        console.log(RayGun)
        drawClickStats()
        drawAliens()
        calculateClickPower()

    }
}

function buyAlienFarm() {
    const AlienFarm = autoUpgrades.find(auto => auto.name == 'Alien Farm')
    if (aliens >= AlienFarm.price) {
        aliens -= AlienFarm.price
        AlienFarm.multiplier += 20
        AlienFarm.quantity++
        AlienFarm.price += AlienFarm.price
        console.log(AlienFarm)
        drawClickStats()
        drawAliens()
        calculateAutoPower()
    }
}

function buyAlienFactory() {
    const AlienFactory = autoUpgrades.find(auto => auto.name == 'Alien Factory')
    if (aliens >= AlienFactory.price) {
        aliens -= AlienFactory.price
        AlienFactory.multiplier += 200
        AlienFactory.quantity++
        AlienFactory.price += AlienFactory.price
        drawClickStats()
        drawAliens()
        calculateAutoPower()
    }
}

function drawClickStats() {
    const lightsaber = clickUpgrades.find(click => click.name == 'Light Saber')
    const alienfarm = autoUpgrades.find(auto => auto.name == 'Alien Farm')
    const raygun = clickUpgrades.find(click => click.name == 'Ray Gun')
    const alienfactory = autoUpgrades.find(auto => auto.name == 'Alien Factory')


    document.getElementById('alienfarm').innerText = alienfarm.multiplier
    document.getElementById('lightsaber').innerText = lightsaber.multiplier
    document.getElementById('saberquantity').innerText = lightsaber.quantity
    document.getElementById('farmquantity').innerText = alienfarm.quantity
    document.getElementById('raygun').innerText = raygun.multiplier
    document.getElementById('raygunquantity').innerText = raygun.quantity
    document.getElementById('alienfactory').innerText = alienfactory.multiplier
    document.getElementById('factoryquantity').innerText = alienfactory.quantity
    document.getElementById('lightsaberprice').innerText = lightsaber.price
    document.getElementById('raygunprice').innerText = raygun.price
    document.getElementById('alienfarmprice').innerText = alienfarm.price
    document.getElementById('alienfactoryprice').innerText = alienfactory.price
}

function calculateClickPower() {
    let clickTotal = 0
    clickUpgrades.forEach(click => {
        const totalClickPower = click.multiplier
        clickTotal += totalClickPower
        console.log(clickTotal)

        document.getElementById('totalclickpower').innerText = clickTotal

    })

}

function calculateAutoPower() {
    let autoTotal = 0
    autoUpgrades.forEach(auto => {
        const totalAutoPower = auto.multiplier
        autoTotal += totalAutoPower

        document.getElementById('totalautopower').innerText = autoTotal
    })
}
const autofarm = autoUpgrades.find(auto => auto.name == 'Alien Farm')
const autofactory = autoUpgrades.find(auto => auto.name == 'Alien Factory')
const autoquantity = autofarm.quantity += autofactory.quantity

if (autoquantity >= 0) {
    setInterval(autoMine, 5000)
    drawAliens()
}

