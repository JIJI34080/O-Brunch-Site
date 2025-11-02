export type MenuCategory = {
  id: string;
  items: Array<{
    name: string;
    description: string;
    price: string;
  }>;
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'brunch',
    items: [
      {
        name: 'Plateau O’Brunch',
        description: 'Sélection gourmande de brunch avec spécialités maison, pains et confitures.',
        price: '32.-'
      },
      {
        name: 'Brunch végétarien',
        description: 'Assortiment de légumes rôtis, houmous aux pois chiches et salade fraîche.',
        price: '28.-'
      }
    ]
  },
  {
    id: 'waffles',
    items: [
      {
        name: 'Gaufre caramel beurre salé',
        description: 'Gaufre croustillante avec sauce caramel maison et chantilly.',
        price: '9.-'
      },
      {
        name: 'Gaufre chocolat noisette',
        description: 'Crème pralinée, noisettes torréfiées et copeaux de chocolat suisse.',
        price: '9.5'
      }
    ]
  },
  {
    id: 'snacks',
    items: [
      {
        name: 'Avocado toast',
        description: 'Pain aux céréales, avocat écrasé, feta, grenade et citron vert.',
        price: '14.-'
      },
      {
        name: 'Croque halal',
        description: 'Pain de mie brioché, dinde fumée halal, fromage suisse et sauce maison.',
        price: '15.-'
      }
    ]
  },
  {
    id: 'drinks',
    items: [
      {
        name: 'Latte maison',
        description: 'Café de torréfacteur local avec lait bio ou alternative végétale.',
        price: '5.5'
      },
      {
        name: 'Mocktail signature',
        description: 'Jus de fruits pressés, sirop artisanal et herbes fraîches.',
        price: '8.-'
      }
    ]
  }
];
