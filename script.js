let isIgite = true
function changeCard(event) {
    const card = event.currentTarget
    const bg = isIgite ? "explorer" : "ignite"
    isIgite = !isIgite
    card.style.backgroundImage = `url(./assets/bg_${bg}.svg)`
}