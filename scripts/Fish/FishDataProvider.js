const fishCollection = [
    {
        
        name: "Bart",
        species: 'fdasfdafda',
        food: "crustaceans",
        length: '25',
        location: 'round here'

    },
    {
        name: "Bart",
        species: 'fdafdafdsaf',
        food: "crustaceans",
        length: '256',
        location: 'round here',
    },
    {
        name: "Bart",
        species: '4q3gtgaergfad',
        food: "crustaceans",
        length: '3',
        location: 'round here'
    },
    {
        name: "Bart",
        species: '4r4r4r4r4r4r4',
        food: "crustaceans",
        length: '7',
        location: 'round here'
    },
    {
        name: "Bart",
        species: '44t45tgtrgfdagfsd',
        diet: "crustaceans",
        length: '255',
        location: 'round here'
    },
    {
        name: "Bart",
        species: 'bgfsgfsdgfsdg',
        food: "crustaceans",
        length: '5473',
        location: 'round here'
    }
]


// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}

export const useFish3 = () => {
    let multOf3Arr = [];
    for (const fish of fishCollection){
        if (fish.length%3===0){
            multOf3Arr.push(fish)
        }
    
    }
    console.log(multOf3Arr);
    return multOf3Arr
}

export const useFish5 = () => {
    let multOf5Arr = [];
    for (const fish of fishCollection){
        if (fish.length%5===0){
            multOf5Arr.push(fish)
        }
    
    }
    console.log(multOf5Arr);
    return multOf5Arr
}

export const useFishOther = () => {
    let multOfOtherArr = [];
    for (const fish of fishCollection){
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0){
            multOfOtherArr.push(fish)
        }
    
    }
    console.log(multOfOtherArr);
    return multOfOtherArr
}
