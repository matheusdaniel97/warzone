var adicionar = document.querySelector("#insertWeapon")
adicionar.addEventListener("click", function(event){

    event.preventDefault();
    
    var form = document.querySelector(".formWeapon")

    var weapon = obtemWeapondoFormulario(form);

    var weaponTr = montaTr(weapon)

    adicionaWeaponNaTabela(weapon);

    form.reset();

});

function obtemWeapondoFormulario(form){

    
    var weapon = {
        weapon: form.weapon.value,
        rpm: form.rpm.value,
        closeDamage: form.closeDamage.value,
        closeDps: calculaCloseDps (form.closeDamage.value, form.rpm.value),
        farDamage: form.farDamage.value,
        farDps: calculaFarDps(form.farDamage.value, form.rpm.value)
    }

    return weapon;
}

function montaTr(weapon){

    var weaponTr = document.createElement("tr");
    weaponTr.classList.add("weapon")

    weaponTr.appendChild(montaTd(weapon.weapon,"item-weapon"));
    weaponTr.appendChild(montaTd(weapon.rpm,"item-rpm"));
    weaponTr.appendChild(montaTd(weapon.closeDamage,"item-closeDamage"));
    weaponTr.appendChild(montaTd(weapon.closeDps,"item-closeDPS"));
    weaponTr.appendChild(montaTd(weapon.farDamage,"item-farDamage"));
    weaponTr.appendChild(montaTd(weapon.farDps,"item-farDPS"));
    weaponTr.appendChild(montaTd("🗑️", "item-delete"));

    return weaponTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    return td;
}

function adicionaWeaponNaTabela(weapon) {
    var weaponTr = montaTr(weapon);
    var tabela = document.querySelector("#table-weapon");
    tabela.appendChild(weaponTr);
}