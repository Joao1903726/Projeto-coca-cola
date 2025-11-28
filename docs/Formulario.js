document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const sabor = document.querySelector('input[name="sabor"]:checked');
  const preco = document.querySelector('input[name="preco"]:checked');
  const saude = document.querySelector('input[name="saude"]:checked');
  const disponibilidade = document.querySelector('input[name="disponibilidade"]:checked');
  const preferencia = document.querySelector('input[name="preferencia"]:checked');

  if (!nome || !sabor || !preco || !saude || !disponibilidade || !preferencia) {
    alert("Por favor, preencha o nome e responda todas as perguntas.");
    return;
  }

  const data = {
    Nome: nome,
    Sabor: sabor.value,
    Preço: preco.value,
    Saúde: saude.value,
    Disponibilidade: disponibilidade.value,
    Preferência: preferencia.value
  };

  fetch("https://api.sheetbest.com/sheets/711be822-7993-4cda-bea2-aeb018f0a44e", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {
    alert("Resposta enviada com sucesso!");
    document.getElementById("form").reset();
  });
});
