const form = document.querySelector('#search-form > form');
const input = document.querySelector('#input-localizacao');
const sectionTempoInfo = document.querySelector('#tempo-info');
form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!input || !sectionTempoInfo)
        return;
    const localizacao = input.value;
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=9d9ac1ee71f15eb488cbff6181a21a28&lang=pt_br&units=metric`);
    const dados = await resposta.json();
    const infos = {
        temperatura: Math.round(dados.main.temp),
        local: dados.name,
        icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
    };
    sectionTempoInfo.innerHTML = `
        <div class="tempo-dados">
            <h2>${infos.local}</h2>
            <span>${infos.temperatura}°C</span>
            
        </div>
        <img src="${infos.icone}"/>
    `;
});
export {};
//# sourceMappingURL=index.js.map