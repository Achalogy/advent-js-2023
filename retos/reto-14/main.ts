function maxGifts(houses) {
  let incluir = 0;
  let excluir = 0;
  let noIncluirAnterior;

  for (let h of houses) {
    noIncluirAnterior = [excluir, incluir][+(incluir > excluir)];

    incluir = excluir + h;
    excluir = noIncluirAnterior;
  }

  return [excluir, incluir][+(incluir > excluir)];
}