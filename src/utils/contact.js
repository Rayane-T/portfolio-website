// Keep address parts split and encoded to reduce basic bot scraping from static HTML.
const EMAIL_PARTS = [
  [114, 97, 121, 97, 110, 101],
  [116, 97, 121, 97, 99, 104, 101],
  [101, 116, 117],
  [117, 110, 105, 115, 116, 114, 97],
  [102, 114],
]

const decodePart = (codes) => String.fromCharCode(...codes)

export function getContactEmail() {
  const local = `${decodePart(EMAIL_PARTS[0])}.${decodePart(EMAIL_PARTS[1])}`
  const domain = `${decodePart(EMAIL_PARTS[2])}.${decodePart(EMAIL_PARTS[3])}.${decodePart(EMAIL_PARTS[4])}`
  return `${local}@${domain}`
}

export function openContactEmail() {
  if (typeof window === "undefined") {
    return
  }

  window.location.href = `mailto:${getContactEmail()}`
}