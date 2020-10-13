const citiesToVisit = [
    {
        name: "Athens"
    },
    {
        name: "Sparta"
    },
    {
        name: "Santorini"
    }
]

export const useCities = () => {
    return citiesToVisit.slice()
}