export async function getTeste(){
    await fetch(`https://viacep.com.br/ws/46114-146/json/`)
        .then(response => response.json())
        .then(json => console.log(json));
}