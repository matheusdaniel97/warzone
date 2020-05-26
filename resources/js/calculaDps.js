var weapons = document.querySelectorAll(".weapon")

for(var i = 0; i < weapons.length; i++){
    
    var weapon = weapons[i];

    var tdRpm = weapon.querySelector(".item-rpm")
    var rpm = tdRpm.textContent;

    var tdCloseDamage = weapon.querySelector(".item-closeDamage")
    var closeDamage = tdCloseDamage.textContent;

    var tdFarDamage = weapon.querySelector(".item-farDamage")
    var farDamage = tdFarDamage.textContent;

    var tdCloseDps = weapon.querySelector(".item-closeDPS");
    var tdFarDps = weapon.querySelector(".item-farDPS");

    var closeDps = calculaCloseDps(closeDamage, rpm)
    var farDps = calculaFarDps(farDamage, rpm)

    tdCloseDps.textContent = closeDps;
    tdFarDps.textContent = farDps;
}

function calculaCloseDps(closeDamage, rpm){
    var closeDps = 0;
    var closeDps = (rpm / 60) * closeDamage;
    return closeDps.toFixed(1);
}

function calculaFarDps(farDamage, rpm){
    var farDps = 0;
    var farDps = (rpm / 60) * farDamage;
    return farDps.toFixed(1);
}