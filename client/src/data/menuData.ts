export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  prices: {
    small?: number;
    medium?: number;
    large?: number;
    regular?: number;
  };
}

export const menuItems: MenuItem[] = [
  // Cơm Category
  {
    id: "com-suon-nuong",
    name: "Cơm Sườn Nướng",
    description: "Cơm trắng thơm, sườn nướng thơm lừng, kèm rau sống và nước mắm chua ngọt",
    category: "com",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 80000,
      large: 100000
    }
  },
  {
    id: "com-tam-ga-nuong",
    name: "Cơm Tấm Gà Nướng",
    description: "Cơm tấm thơm bùi, gà nướng mật ong, chả trứng, bì cuốn",
    category: "com",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 65000,
      medium: 85000,
      large: 110000
    }
  },
  {
    id: "com-nieu-lap-xuong",
    name: "Cơm Niêu Lạp Xưởng",
    description: "Cơm niêu cháy thơm, lạp xưởng, nấm hương, rau cải",
    category: "com",
    image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 70000,
      medium: 90000,
      large: 120000
    }
  },
  {
    id: "com-ga-xoi-mo",
    name: "Cơm Gà Xôi Mỡ",
    description: "Cơm nếp thơm, gà ta luộc, kèm gừng tỏi ngâm chua ngọt",
    category: "com",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d29a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 75000,
      medium: 95000,
      large: 125000
    }
  },

  // Bún/Miến Category
  {
    id: "bun-bo-hue",
    name: "Bún Bò Huế",
    description: "Bún tươi, nước dùng cay nồng, thịt bò, chả, huyết",
    category: "bun",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 45000,
      medium: 55000,
      large: 65000
    }
  },
  {
    id: "bun-thit-nuong",
    name: "Bún Thịt Nướng",
    description: "Bún tươi, thịt nướng thơm phức, rau sống, nước mắm chua ngọt",
    category: "bun",
    image: "https://images.unsplash.com/photo-1559314809-0f31657daf05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 50000,
      medium: 65000,
      large: 80000
    }
  },
  {
    id: "bun-ca-loc-nuong",
    name: "Bún Cá Lóc Nướng",
    description: "Bún tươi, cá lóc nướng lá chuối, rau thơm miền Tây",
    category: "bun",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 75000,
      large: 95000
    }
  },
  {
    id: "mien-ga",
    name: "Miến Gà",
    description: "Miến dong tươi, gà ta ninh nhừ, nước dùng trong vắt",
    category: "bun",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 40000,
      medium: 50000,
      large: 60000
    }
  },

  // Món Xào Category
  {
    id: "rau-muong-xao-toi",
    name: "Rau Muống Xào Tỏi",
    description: "Rau muống tươi xào tỏi phi thơm, giòn ngon",
    category: "xao",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 35000,
      medium: 45000,
      large: 55000
    }
  },
  {
    id: "bo-xao-sa-ot",
    name: "Bò Xào Sả Ớt",
    description: "Thịt bò tươi xào sả ớt cay nồng, thơm lừng",
    category: "xao",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 80000,
      medium: 110000,
      large: 140000
    }
  },
  {
    id: "tom-rang-me",
    name: "Tôm Rang Me",
    description: "Tôm su tươi rang me chua ngọt, đậm đà hương vị miền Tây",
    category: "xao",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 120000,
      medium: 160000,
      large: 200000
    }
  },
  {
    id: "ca-kho-to",
    name: "Cá Kho Tộ",
    description: "Cá basa kho nước dừa, đậm đà đúng điệu miền Tây",
    category: "xao",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 90000,
      medium: 120000,
      large: 150000
    }
  },

  // Nước Uống Category
  {
    id: "ca-phe-sua-da",
    name: "Cà Phê Sữa Đá",
    description: "Cà phê rang xay truyền thống, sữa đặc ngọt ngào",
    category: "nuoc",
    image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 25000
    }
  },
  {
    id: "nuoc-dua-tuoi",
    name: "Nước Dừa Tươi",
    description: "Nước dừa tươi mát, ngọt tự nhiên từ miền Tây",
    category: "nuoc",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 20000
    }
  },
  {
    id: "tra-da-chanh",
    name: "Trà Đá Chanh",
    description: "Trà đá mát lạnh, chanh tươi chua ngọt",
    category: "nuoc",
    image: "https://images.unsplash.com/photo-1571167960056-dd4f6df7e6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 15000
    }
  },
  {
    id: "nuoc-mia-tuoi",
    name: "Nước Mía Tươi",
    description: "Nước mía ép tươi, ngọt thanh không pha trộn",
    category: "nuoc",
    image: "https://images.unsplash.com/photo-1597318043559-2d9b28638bb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 18000
    }
  },

  // Tráng Miệng Category
  {
    id: "che-ba-mau",
    name: "Chè Ba Màu",
    description: "Chè đậu xanh, đậu đỏ, thạch rau câu, nước cốt dừa",
    category: "trangmieng",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 30000
    }
  },
  {
    id: "banh-chuoi-nuong",
    name: "Bánh Chuối Nướng",
    description: "Bánh chuối nướng lá chuối, thơm ngon truyền thống",
    category: "trangmieng",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 35000
    }
  },
  {
    id: "che-thai-do",
    name: "Chè Thái Đỏ",
    description: "Chè thái đỏ mát lạnh, đậu phộng rang, nước cốt dừa",
    category: "trangmieng",
    image: "https://images.unsplash.com/photo-1567735053062-ee66a4512ee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 28000
    }
  },
  {
    id: "banh-flan",
    name: "Bánh Flan",
    description: "Bánh flan mềm mịn, caramel đậm đà",
    category: "trangmieng",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 25000
    }
  }
];

export const categories = [
  { id: 'all', name: 'Tất cả' },
  { id: 'com', name: 'Cơm' },
  { id: 'bun', name: 'Bún/Miến' },
  { id: 'xao', name: 'Món Xào' },
  { id: 'nuoc', name: 'Nước Uống' },
  { id: 'trangmieng', name: 'Tráng Miệng' }
];
