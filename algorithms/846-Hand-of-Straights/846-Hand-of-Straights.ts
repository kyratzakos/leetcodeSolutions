function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) return false

    const cardCount = new Map<number, number>()

    for (const card of hand) {
        cardCount.set(card, (cardCount.get(card) || 0) + 1)
    }

    const uniqueCards = Array.from(cardCount.keys()).sort((a, b) => a - b)

    for (const card of uniqueCards) {
        const count = cardCount.get(card) || 0

        if (count > 0) {
            for (let i = 0; i < groupSize; i++) {
                const currentCard = card + i
                const currentCount = cardCount.get(currentCard) || 0

                if (currentCount < count) {
                    return false
                }

                cardCount.set(currentCard, currentCount - count)
            }
        }
    }

    return true

};