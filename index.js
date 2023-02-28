const prompt = require("prompt-sync")()
const nomeEmpresa = "Sistema Omma"
console.log(nomeEmpresa)

const listaDeReceitas = [
  {
    id: 1,
    titulo: "Purê de batatas",
    dificuldade: "moderada",
    ingredientes: [
      "3 batatas",
      "1col.sopa de manteiga",
      "400ml leite",
      "sal a gosto",
    ],
    preparo:
      "cozinhe as bastatas descascadas e amasse-as, coloque em uma panela com manteiga, adicione leite e sal.",
    link: "http://youtube.com",
    vegano: false,
  },
]

const cadastrarReceita = (
  id,
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegano
) => {
  const novaReceita = {
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  }
  listaDeReceitas.push(novaReceita)
  console.log(`Cadastro da receita ${titulo} feito com sucesso!`)
}

console.log(listaDeReceitas)

cadastrarReceita(
  2,
  "Calabresa acebolada",
  "simples",
  ["500g calabresa", "1 cebola pequena"],
  "corte a linguiça e a cebola em rodelas finas, coloque a linguiça na frigideira, adicione a cebola.",
  "https://google.com.br",
  false
)

console.log(listaDeReceitas)

const exibirReceitas = () => {
  console.log("Receitas:")
  for (let i = 0; i < listaDeReceitas.length; i++) {
    console.log("=-=-=-=-=")
    console.log(`Titulo: ${listaDeReceitas[i].titulo}`)
    console.log(
      `- Ingredientes( ${listaDeReceitas[i].ingredientes.join(", ")} )`
    )
    console.log(`- Vegano: ${listaDeReceitas[i].vegano ? "Sim" : "Não"}\n`)
  }
}
exibirReceitas()

const deletarReceita = (id) => {
  for (let i = 0; i < listaDeReceitas.length; i++) {
    if (listaDeReceitas[i].id === id) {
      listaDeReceitas.splice(i, 1)
      console.log("Receita deletada com sucesso.")
      return
    }
  }
  console.log("Receita não encontrada.")
}

deletarReceita(1)

console.log(listaDeReceitas)
