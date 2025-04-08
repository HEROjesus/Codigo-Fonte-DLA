/*
Para cada dia da semana defina a quantidade de horas trabalhas.
e some o total de horas trabalhadas na semana.
*/

const semana = () => {
  dias = {
    Segunda: 8,
    Terca: 8,
    Quarta: 8,
    Quinta: 8,
    Sexta: 8,
    Sabado: 0,
    Domingo: 0,
  };

  const totalHorasTrabalhadas =
    dias.Segunda +
    dias.Terca +
    dias.Quarta +
    dias.Quinta +
    dias.Sexta +
    dias.Sabado +
    dias.Domingo;

  console.log(`Total de horas trabalhadas na semana: ${totalHorasTrabalhadas} Horas`);
};

semana();