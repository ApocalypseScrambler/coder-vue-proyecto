const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
  
  export function formattedDate() {
    const date = new Date()
    const timestamp = date.toLocaleDateString('es-ES', options)
    return timestamp + 'hs.'
  }