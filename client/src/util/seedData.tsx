import { Shoe } from "../types/Shoe";

const test1: Shoe = {
    _id: '3987279d-0ad4-4afb-8ca9-5b256ae3b298',
    _createdAt: Date.now(),
    _ownerId: "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
    make: "new balance",
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
    _id: '8f414b4f-ab39-4d36-bedb-2ad69da9c830',
    _createdAt: Date.now(),
    _ownerId: "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
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

const test3: Shoe = {
    _id: '847ec027-f659-4086-8032-5173e2f9c93a',
    _createdAt: Date.now(),
    _ownerId: "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
    make: "asics",
    model: "gel-venture 9",
    description: "The ASICS® Women's GEL-Venture 9 Running Shoes are a must-have if you love spending time outdoors.\nRearfoot and Forefoot GEL® Technology Cushioning System Attenuates shock during impact and toe-off phases, and allows movement in multiple planes as the foot transitions through the gait cycle.\nRemovable OrthoLite® insole for enhanced comfort.",
    colors: ["indigo blue", "papaya"],
    sizes: [35, 36, 37, 38, 39, 40, 41],
    images: ['/src/assets/images/womens-asics-gel-venture-9-indigo-blue-papaya.jpg'],
    materials: ['textile', 'foam'],
    types: ['sports', 'running',],
    genders: ['women'],
    basePrice: 80.00,
    discountRate: 0,
    currentPrice: 80.00,
    isPromo: false
};

const test4: Shoe = {
    _id: '0a272c58-b7ea-4e09-a000-7ec988248f66',
    _createdAt: Date.now(),
    _ownerId: "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
    make: "cole haan",
    model: "grandpro topspin sneaker",
    description: "Anatomical sockliner.\nEVA midsole with rubber toe and heel pods for added traction.\nCushioned GRANDFØAM footbed.\nLace-up closure.",
    colors: ["white", "dove"],
    sizes: [35, 36, 37, 38, 39, 40, 41],
    images: ['/src/assets/images/womens-cole-haan-grandpro-topspin-sneaker-white-dove.jpg'],
    materials: ['leather', 'textile',],
    types: ['everyday', 'casual',],
    genders: ['women'],
    basePrice: 149.95,
    discountRate: 0,
    currentPrice: 149.95,
    isPromo: false
};

export default { test1, test2, test3, test4 };