let tipsCollection = [
    {
    SubHeading : 'Salinity',
    tips: ['keep it salty', 'dump some salt in there', 'salty,salty']
    },
    {
        Subheading : 'Temperature',
        tips: ['Hot, Hot, Hot!', 'nit quite that hot', 'warmer though']
    }
]

// This is new code. Add this.
export const useTips = () => {
    return tipsCollection.slice()
}

