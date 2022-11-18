export const times = (amount: number, cb: () => boolean | void): number => {
  for (let i = 0; i < amount; i++) {
    if (cb() === false) {
      return i
    }
  }

  return amount
}
