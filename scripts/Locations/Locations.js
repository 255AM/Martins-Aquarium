export const Locations = (location) => {
    return `
        <section class="location card">
            <div class="location__name">${location.name}</div>
            <img class='location_image' src='${location.image}' alt='location image' width='100em'>
            <p>${location.name}</p>
        </section>
    `
}