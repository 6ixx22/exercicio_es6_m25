"use strict";

var alunos = [
  { nome: "Ana", nota: 7.5 },
  { nome: "Pedro", nota: 5.0 },
  { nome: "Maria", nota: 8.2 },
  { nome: "João", nota: 4.5 },
  { nome: "Carlos", nota: 6.0 }
];

var filtrarAprovados = function filtrarAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};

var aprovados = filtrarAprovados(alunos);
console.log(aprovados);
