fetch("https://api.sheetbest.com/sheets/711be822-7993-4cda-bea2-aeb018f0a44e")
  .then(res => res.json())
  .then(data => {
    const tabela = document.querySelector("#tabela-respostas tbody");

    tabela.innerHTML = "";

    data.forEach(item => {
      const linha = `
        <tr>
          <td>${item.Nome}</td>
          <td>${item.Sabor}</td>
          <td>${item["Preço"]}</td>
          <td>${item["Saúde"]}</td>
          <td>${item.Disponibilidade}</td>
          <td>${item["Preferência"]}</td>
        </tr>
      `;
      tabela.innerHTML += linha;
    });
  });
