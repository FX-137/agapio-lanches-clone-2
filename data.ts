
import { BusinessInfo, MenuCategory } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Cardápio Agapio Lanches",
  address: "Av. José de Alencar, 869 - Menino Deus, Porto Alegre",
  googleMapsQuery: "Av.+José+de+Alencar,+869",
  phone: "(51) 3026-0902",
  secondaryPhone: "(51) 99214-1406",
  whatsapp: "5551992141406",
  devWhatsapp: "5551992496479",
  openingHours: [
    "ABERTO DE SEGUNDA À DOMINGO DAS 11H À MEIA-NOITE"
  ]
};

export const MENU_DATA: MenuCategory[] = [
  {
    id: "xis_tradicionais",
    title: "Lanches Tradicionais",
    items: [
      {
        id: "01",
        name: "Xis Salada",
        description: "Pão massinha, hambúrguer bovino, tomate, alface, milho, ervilha, queijo, ovo e maionese.",
        price: 18.00
      },
      {
        id: "02",
        name: "Xis Salada Simples",
        description: "Hambúrguer bovino, maionese, queijo e ovo.",
        price: 14.00
      },
      {
        id: "03",
        name: "Xis Strogonoff",
        description: "Pão massinha, contrafilé, tomate, alface, champignon, batata palha, queijo, ovo, maionese e molho especial.",
        price: 32.00
      },
      {
        id: "04",
        name: "Xis da Casa",
        description: "Pão massinha, hambúrguer bovino, alface, tomate, milho, ervilha, pepino, maionese, palmito, presunto, queijo e ovo.",
        price: 24.00
      },
      {
        id: "05",
        name: "Xis Frango",
        description: "Pão massinha, peito de frango, tomate, alface, milho, ervilha, queijo, ovo e maionese.",
        price: 19.00
      },
      {
        id: "06",
        name: "Xis Coração",
        description: "Pão massinha, coração, tomate, alface, milho, ervilha, queijo, ovo e maionese.",
        price: 25.00
      },
      {
        id: "07",
        name: "Xis Bacon",
        description: "Pão massinha, hambúrguer bovino, bacon, tomate, alface, milho, ervilha, queijo, ovo e maionese.",
        price: 25.00
      },
      {
        id: "08",
        name: "Xis Calabresa",
        description: "Pão massinha, calabresa, tomate, alface, milho, ervilha, queijo, ovo, e maionese.",
        price: 19.00
      },
      {
        id: "09",
        name: "Xis Lombo",
        description: "Pão massinha, lombo, tomate, alface, milho, ervilha, queijo, ovo e maionese.",
        price: 19.00
      },
      {
        id: "10",
        name: "Xis Misto",
        description: "Pão massinha, coração, calabresa, contrafilé, bacon, tomate, alface, milho, ervilha, queijo, ovo e maionese.",
        price: 27.00
      },
      {
        id: "11",
        name: "Xis Acebolado",
        description: "Pão massinha, bife de hambúrguer, tomate, alface, milho, ervilha, queijo, ovo, maionese e cebola.",
        price: 20.00
      }
    ]
  },
  {
    id: "dogs_torradas",
    title: "Cachorros e Torradas",
    items: [
      {
        id: "12",
        name: "Cachorro Quente",
        description: "Pão de cachorro, salsicha, presunto, tomate, alface, milho, ervilha, queijo e maionese.",
        price: 14.00
      },
      {
        id: "13",
        name: "Cachorro Quente Simples",
        description: "2 salsichas, maionese, catchup, batata palha e queijo.",
        price: 13.00
      },
      {
        id: "14",
        name: "Dog Linguiça",
        description: "Pão de cachorro, linguiça calabresa, presunto, tomate, alface, milho, ervilha, queijo e maionese.",
        price: 21.00
      },
      {
        id: "15",
        name: "Dog Coração",
        description: "Pão de cachorro, alface, tomate, milho, ervilha, maionese, coração e queijo.",
        price: 9.00
      },
      {
        id: "16",
        name: "Torrada",
        description: "Três fatias de pão de forma, 2 fatias de queijo, 2 fatias de presunto e maionese.",
        price: 13.00
      },
      {
        id: "17",
        name: "Prensado 1",
        description: "Pão de xis, 2 fatias de queijo, 2 fatias de presunto, ovo e maionese.",
        price: 14.00
      },
      {
        id: "18",
        name: "Prensado 2",
        description: "Pão de xis, alface, tomate, milho, ervilha, 2 fatias de queijo, 2 fatias de presunto, ovo e maionese.",
        price: 13.00
      },
      {
        id: "19",
        name: "Sambidi",
        description: "Sanduíche frio: 3 fatias de pão de forma, 2 fatias de queijo, 2 de presunto, alface, tomate, palmito, pepino e maionese.",
        price: 17.00
      }
    ]
  },
  {
    id: "baurus",
    title: "Baurus",
    items: [
      {
        id: "20",
        name: "Bauru Mercosul",
        description: "Pão cervejinha, contrafilé, tomate, alface, queijo, ovo, presunto, bacon e maionese.",
        price: 30.00
      },
      {
        id: "21",
        name: "Bauru Master",
        description: "Pão cervejinha, contrafilé, provolone, catupiry, tomate, alface, queijos, ovo, presunto, bacon e maionese.",
        price: 36.00
      },
      {
        id: "22",
        name: "Bauru Contrafilé Tradicional",
        description: "Pão cervejinha, contrafilé, lombo, tomate, alface, queijo, ovo e maionese.",
        price: 28.00
      },
      {
        id: "23",
        name: "Bauru Peito de Frango",
        description: "Pão cervejinha, peito de frango, tomate, alface, queijo, ovo e maionese.",
        price: 25.00
      },
      {
        id: "24",
        name: "Bauru Peito de Frango Master",
        description: "Pão cervejinha, peito de frango, tomate, alface, queijo, provolone, catupiry, ovo e maionese.",
        price: 30.00
      }
    ]
  },
  {
    id: "especiais",
    title: "Lanches Especiais",
    items: [
      {
        id: "25",
        name: "Xis Frango com Catupiry",
        description: "Pão massinha, peito de frango, tomate, alface, milho, ervilha, catupiry, ovo e maionese.",
        price: 25.90
      },
      {
        id: "26",
        name: "Xis Frango a Punta Del Este",
        description: "Pão massinha, filé de frango em pedaços, tomate seco, nata, alcaparras, champignon, queijo gorgonzola e ovo.",
        price: 32.00
      },
      {
        id: "27",
        name: "Xis Frango C/ Cheddar",
        description: "Pão massinha, peito de frango, queijo cheddar, tomate alface, milho, ervilha, queijo, ovo e maionese.",
        price: 25.90
      },
      {
        id: "28",
        name: "Xis Filadélia",
        description: "Pão cervejinha, contrafilé, champignon, cebola, pimentão, queijo, ovo e maionese.",
        price: 28.90
      },
      {
        id: "29",
        name: "Xis Gaúcho",
        description: "Pão cervejinha, contrafilé, lombo, salsichão, cebola, pimentão, tomate em rodelas, queijo, ovo e maionese.",
        price: 28.90
      },
      {
        id: "30",
        name: "Xis 4 Queijos",
        description: "Pão massinha, hambúrguer bovino, tomate, alface, milho, ervilha, queijos: provolone, gorgonzola, queijo prato, cheddar, ovo e maionese.",
        price: 28.00
      },
      {
        id: "31",
        name: "Xis 5 Queijos",
        description: "Pão massinha, hambúrguer bovino, tomate, alface, milho, ervilha, queijos: provolone, gorgonzola, queijo prato, cheddar, catupiry, ovo e maionese.",
        price: 28.00
      },
      {
        id: "32",
        name: "Big Agápio",
        description: "Pão massinha, 2 hambúrgueres bovinos, tomate, alface, milho, ervilha, palmito, pepino, presunto, queijo, ovo e maionese.",
        price: 30.00
      },
      {
        id: "33",
        name: "Xis Contrafilé",
        description: "Pão massinha, contrafilé, alface, tomate, milho, ervilha, queijo, ovo e maionese.",
        price: 28.00
      },
      {
        id: "34",
        name: "Xis Contrafilé 4 Queijos",
        description: "Pão de xis, maionese, contrafilé em pedaços, provolone, gorgonzola, queijo prato, cheddar, ovo, alface, tomate, ervilha e milho.",
        price: 35.00
      },
      {
        id: "35",
        name: "Xis Contrafilé 5 Queijos",
        description: "Pão de xis, maionese, contrafilé em pedaços, provolone, gorgonzola, queijo prato, cheddar, catupiry, ovo, alface, tomate, ervilha e milho.",
        price: 38.00
      },
      {
        id: "36",
        name: "Xis Mega",
        description: "Pão massinha, calabresa, champignon, tomate, alface, milho, ervilha, maionese, 2 fatias de queijo e ovo.",
        price: 32.00
      },
      {
        id: "37",
        name: "Xis Passo Fundo",
        description: "Pão massinha, iscas de contrafilé ou frango, bacon, milho, ervilha, alface, tomate, palmito, aspargos, maionese, queijo e ovo.",
        price: 25.00
      },
      {
        id: "38",
        name: "Xis Erechim",
        description: "Pão massinha, coração, cebola, alho, orégano, queijo, tomate, ovo e maionese.",
        price: 17.00
      },
      {
        id: "39",
        name: "Xis Vegetariano",
        description: "Pão massinha, tomate, alface, milho, ervilha, palmito, pepino, cebola, pimentão, champignon, maionese, queijo e ovo.",
        price: 24.00
      },
      {
        id: "40",
        name: "Xis Vegetariano 2",
        description: "Pão massinha, tomate, alface, milho, ervilha, palmito, pepino, champignon, maionese, queijo e ovo.",
        price: 24.90
      },
      {
        id: "41",
        name: "Xis Pantaneiro",
        description: "Pão massinha, peito de frango, bacon, alho, alface, tomate, queijo, ovo e maionese.",
        price: 24.00
      },
      {
        id: "42",
        name: "Xis Suprema",
        description: "Pão massinha, calabresa, champignon, azeitona preta, cebola, pimentão, queijo, ovo e maionese.",
        price: 25.00
      },
      {
        id: "43",
        name: "Xis Lombo aos Queijos",
        description: "Pão massinha, filé de lombo, alface, tomate, queijos: parmesão ralado, prato e catupiry e ovo.",
        price: 29.00
      },
      {
        id: "44",
        name: "Xis Sigo",
        description: "Pão massinha, lombo, frango, contrafilé, coração, bacon, provolone, ovo, queijo e maionese.",
        price: 29.90
      },
      {
        id: "45",
        name: "Xis Michelona",
        description: "Pão massinha, contrafilé, coração, champignon, palmito, pepino, tomate, alface, queijo, ovo e maionese.",
        price: 29.00
      },
      {
        id: "46",
        name: "Xis Portuguesa",
        description: "Pão cervejinha, contrafilé, cebola, pimentão, tomate em rodelas, azeitona, queijo, ovo e maionese.",
        price: 29.00
      },
      {
        id: "47",
        name: "Penta 1",
        description: "Pão cervejinha, contrafilé, lombo, frango, coração, bacon, tomate e cebola na chapa, queijo, ovo e maionese.",
        price: 29.00
      },
      {
        id: "48",
        name: "Penta 2",
        description: "Pão massinha, contrafilé, lombo, frango, coração, bacon, tomate, alface, palmito, queijo, ovo e maionese.",
        price: 29.90
      },
      {
        id: "49",
        name: "Xis Wesley",
        description: "Pão de xis, maionese, hamburguer bovino, pepino, queijo, ovo, alface e molho rosê.",
        price: 17.00
      },
      {
        id: "50",
        name: "Xis Mc Luíza",
        description: "Pão de xis, hamburguer bovino, bacon em tiras, tomate, alface, cebola na chapa, maionese e cheddar.",
        price: 24.00
      }
    ]
  },
  {
    id: "extras",
    title: "Porções e Extras",
    items: [
      {
        id: "E1",
        name: "Batata Combo",
        description: "Porção de batata frita.",
        price: 5.00
      },
      {
        id: "E2",
        name: "Porções Extra",
        description: "Bacon, alcaparras, tomates secos, cheddar, catupiry, aspargos, cebola, provolone, palmito.",
        price: 6.00
      },
      {
        id: "E3",
        name: "Ovo Extra",
        description: "Ovo adicional.",
        price: 3.00
      }
    ]
  },
  {
    id: "picadinhos",
    title: "Picadinhos",
    items: [
      {
        id: "P1",
        name: "Picadinho de Frango",
        description: "Porção de picadinho de frango.",
        price: 28.00
      },
      {
        id: "P2",
        name: "Picadinho de Coração",
        description: "Porção de picadinho de coração.",
        price: 35.00
      },
      {
        id: "P3",
        name: "Fritas",
        description: "Porção de batatas fritas.",
        price: 23.00
      }
    ]
  },
  {
    id: "alaminutas",
    title: "Alaminutas",
    items: [
      {
        id: "A1",
        name: "Alaminuta de Carne",
        description: "Arroz, batata frita e carne.",
        price: 24.00
      },
      {
        id: "A2",
        name: "Alaminuta de Frango",
        description: "Arroz, batata frita e frango.",
        price: 20.90
      },
      {
        id: "A3",
        name: "Alaminuta de Lombo",
        description: "Arroz, batata frita e lombo.",
        price: 19.90
      },
      {
        id: "A4",
        name: "Alaminuta de Filé",
        description: "Arroz, batata frita e filé.",
        price: 45.00
      }
    ]
  },
  {
    id: "combos",
    title: "Combos",
    items: [
      {
        id: "C1",
        name: "Combo 1",
        description: "2 Xis Salada + Fritas 250gr.",
        price: 35.00
      },
      {
        id: "C2",
        name: "Combo 2",
        description: "1 Xis Salada ou 1 Xis Calabresa + 1 Refri Fruki Lata + 1 Batata Mini.",
        price: 23.90
      }
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      {
        id: "B1",
        name: "Refrigerante Lata 350ml",
        description: "Coca-cola, Guaraná, Sprite, Fanta.",
        price: 6.00
      },
      {
        id: "B2",
        name: "Refrigerante 2L",
        description: "Coca-cola ou Guaraná.",
        price: 14.00
      },
      {
        id: "B3",
        name: "Água Mineral 500ml",
        description: "Com ou sem gás.",
        price: 4.00
      }
    ]
  },
  {
    id: "mais_pedidos",
    title: "Lanches Mais Pedidos",
    items: [
      {
        id: "MP1",
        name: "Xis Salada",
        description: "Pão massinha, hambúrguer bovino, tomate, alface, milho, ervilha, queijo, ovo e maionese.",
        price: 18.00,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTWDzcUULQ7kGgZoQVPt35VlKb_LA9bi6uScAiOfmxBTbVS2RO7PmyCngL-hnc1AbWWohujnVQ5itW_9c-LyYpumIJ7JhI247weB4XmKMeZQLRve0zJU0CnPiumx3x00kghFr46zwCTF3k4evN4JHrHPWjLpxzHKGuNtklGnRFlqN2zERu_YMpp4b_P1A/s1536/Xis%20salada%20cenario%203.png"
      },
      {
        id: "MP2",
        name: "Big Agápio",
        description: "Pão massinha, 2 hambúrgueres bovinos, tomate, alface, milho, ervilha, palmito, pepino, presunto, queijo, ovo e maionese.",
        price: 30.00,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTkS-tpqWFbQJ90d0AhYD8aFPNvaEr17HQVwyFwDvhRbTutHAoYLLJ68IU80sQdOB-njylmFm-C5-dS8QkktQhwkpLXnpBdF18C_kMVDDm_5zakHs_uQHfx62ilw3-mY2pZZp3Ub-QLD-njQEix0sSBK40KupsY4j9_ABrouQVI53CxLQM0g41BXhMwXk/s1536/Big%20agapio%20chat.png"
      },
      {
        id: "MP3",
        name: "Bauru Master",
        description: "Pão cervejinha, contrafilé, provolone, catupiry, tomate, alface, queijos, ovo, presunto, bacon e maionese.",
        price: 36.00,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0iQ5YOoVU23DM1qtztSFCbd7hQFgausdqeuJ8EqdpfMdeGKWdOI7T5QWqHI45fmo8Px9Tp0q_-l4V_IRiuuu43E5IPZ6AR7O8olgvQC92UkkZ2bVXABzp5rqU61-gOLYP3Sug-i8O1tC7dzBVW40U4l8Ie55yAv7WgtuRX21xy5BP9C3jdmP_tiefDJo/s1536/Bauru%20master%20chat.png"
      },
      {
        id: "MP4",
        name: "Xis Bacon",
        description: "Pão massinha, hambúrguer bovino, bacon, tomate, alface, milho, ervilha, queijo, ovo e maionese.",
        price: 25.00,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNnOVYzmQMexWvd8Q93-15Wi4IS2c0k6UIAp80TLzTiJjoaU6xqiNT89b1Y9TvEuZoK0BMVk9Dws4oOLCrtFa5tYbqzVKAZRtgr9m8wuRlSUy5qe6usQNZ6lImrch2AW8GQPL84jArR4jjwXW1EN68qnyIXak23tLW-3HtlBH3N3HWmh4i4zMFa4rgvAw/s1536/Xis%20bacon%20cenario.png"
      }
    ]
  }
];
