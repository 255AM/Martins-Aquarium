const fishCollection = [
    {
        
        name: "Bart",
        species: 'x',
        food: "crustaceans",
        length: '25',
        location: 'round here'

    },
    {
        name: "Bart",
        species: 'x',
        food: "crustaceans",
        length: '25',
        location: 'round here',
    },
    {
        name: "Bart",
        species: 'x',
        food: "crustaceans",
        length: '25',
        location: 'round here'
    },
    {
        name: "Bart",
        species: 'x',
        food: "crustaceans",
        length: '25',
        location: 'round here'
    },
    {
        name: "Bart",
        diet: "crustaceans",
        length: '25',
        location: 'round here'
    },
    {
        name: "Bart",
        species: 'x',
        food: "crustaceans",
        length: '25',
        location: 'round here'
    }
]


// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}

