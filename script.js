function Jogador(nome, vitorias, empates, derrotas, pontos) {
  ;(this.nome = nome),
    (this.vitorias = vitorias),
    (this.empates = empates),
    (this.derrotas = derrotas),
    (this.pontos = pontos)
}

var jogador1 = new Jogador('João', 0, 0, 0, 0)
var jogador2 = new Jogador('Lucas', 0, 0, 0, 0)
var jogador3 = new Jogador('Clara', 0, 0, 0, 0)

function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates
  return pontos
}

var jogadores = [jogador1, jogador2, jogador3]

function exibirNaTela(jogadores) {
  var elemento = ''
  for (let i = 0; i < jogadores.length; i++) {
    elemento += '<tr><td class="nome">' + jogadores[i].nome + '</td>'
    elemento += '<td>' + jogadores[i].vitorias + '</td>'
    elemento += '<td>' + jogadores[i].empates + '</td>'
    elemento += '<td>' + jogadores[i].derrotas + '</td>'
    elemento += '<td>' + jogadores[i].pontos + '</td>'
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    elemento +=
      "<td><button onClick='excluirJogador(" + i + ")'>❌</button></td>"
    elemento += '</tr>'
  }
  var tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = elemento
}

exibirNaTela(jogadores)

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calcularPontos(jogador)
  exibirNaTela(jogadores)
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calcularPontos(jogador)
  exibirNaTela(jogadores)
}

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calcularPontos(jogador)
  exibirNaTela(jogadores)
}

function limparTabela() {
  for (let i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0
    jogadores[i].empates = 0
    jogadores[i].derrotas = 0
    jogadores[i].pontos = 0
  }
  exibirNaTela(jogadores)
}

function adicionarJogador() {
  var adicionar = document.getElementById('adicionar').value
  var novoJogador = new Jogador(adicionar, 0, 0, 0, 0)
  jogadores.push(novoJogador)
  novoJogador.pontos = calcularPontos(novoJogador)
  exibirNaTela(jogadores)
  document.getElementById('adicionar').value = ''
}

function excluirJogador(i) {
  var jogador = jogadores[i]
  for (let i = 0; i < jogadores.length; i++) {
    if (jogadores[i] == jogador) {
      var indice = jogadores.indexOf(jogador)
      if (indice > -1) {
        jogadores.splice(indice, 1)
      }
    }
  }
  exibirNaTela(jogadores)
}
