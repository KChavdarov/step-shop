import { Shoe } from "../types/Shoe";

const test1: Shoe = {
    _id: 'test1',
    _createdAt: Date.now(),
    _ownerId: "Kiril",
    make: "new Balance",
    model: "numeric 440",
    description: "The New Balance® 440 blends premier technology with soft cushioning to create a go-to shoe for both everyday skate and wear.\nSkateboard shoes with a mix of suede, perforated leather, and durable synthetic uppers for next-level style you'll love on and off your board.",
    colors: ["black"],
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    images: ['/src/assets/images/unisex-new-balance-numeric-440-black-gum.jpg'],
    materials: ['textile', 'rubber', 'suede', 'perforated leather'],
    types: ['skateboard', 'everyday',],
    genders: ['women', 'men'],
    basePrice: 79.99,
    discountRate: 0,
    currentPrice: 49.99,
    isPromo: false
};

const test2: Shoe = {
    _id: 'test2',
    _createdAt: Date.now(),
    _ownerId: "Kiril",
    make: "hoka",
    model: "bondi 8",
    description: "One of the hardest working shoes in the HOKA lineup, the Bondi takes a bold step forward this season reworked with softer, lighter foams and a brand-new extended heel geometry. Taking on a billowed effect, the rear crash pad affords an incredibly soft and balanced ride from heel strike to forefoot transaction.\nBest for everyday run, walking, comfort.",
    colors: ["black", "colorful"],
    sizes: [42, 43, 44, 45],
    images: ['/src/assets/images/mens-hoka-bondi-8-black-citrus-glow.jpg'],
    materials: ['textile', 'foam'],
    types: ['sports', 'running',],
    genders: ['men'],
    basePrice: 102.30,
    discountRate: 0,
    currentPrice: 102.30,
    isPromo: false
};

export default { test1, test2 };