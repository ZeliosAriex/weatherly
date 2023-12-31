const timestampToLocale = (timestamp: number) =>
  new Date(timestamp * 1000).toLocaleString('es-ES', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

export default timestampToLocale
