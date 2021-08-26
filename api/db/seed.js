const { Product } = require("./models");

const allProducts = [
  {
    name: "Mostacilla Degrade",
    description:
      "Aros de plata 950 , Argolla y mostacillas en degradé. Plata 950. Libre de Níquel. Tamaño: 1.6 cm aprox",
    precio: 42990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/image_1df80f55-5272-43f1-8d00-3237f95a06a5_600x.jpg?v=1598311563",
    categoria: "Aros",
    stock: 5,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/aros/products/aros-mostacilla-degrade",
  },
  {
    name: "Aros Maida",
    description: "Aros Corazón Martillado. Plata 950. Libre de Niquel",
    precio: 68990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/image_2c3f9ba9-5ac3-4db9-a5a4-95f3a2b194af_600x.jpg?v=1594164123",
    categoria: "Aros",
    stock: 1,
    autor: "delacons",
    pagWeb: "https://www.delacons.com/collections/aros/products/aros-maida",
  },
  {
    name: "Aros Tribu",
    description:
      "Aros de plata. Plata 950. Libre de Níquel. Tamaño: 1 cm aprox.",
    precio: 45990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/image_29280219-0dde-4824-97da-14c9629e4ddf_600x.jpg?v=1604796972",
    categoria: "Aros",
    stock: 3,
    autor: "delacons",
    pagWeb: "https://www.delacons.com/collections/aros/products/aros-tribu",
  },
  {
    name: "Aros Fugaces",
    description:
      "Aros Estrella fugaz. Puedes elegir la piedra de los aros. Plata 950. Libre de Niquel",
    precio: 115990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/image_13d5b27f-ecd7-46f4-9221-9401cd92dae5_600x.jpg?v=1620879600",
    categoria: "Aros",
    stock: 3,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/aros/products/aros-fugaces-piedra-a-eleccion",
  },
  {
    name: "Anillo Leo",
    description:
      "Anillo LEO. Empelotados técnica granulado. Plata 950. Libre de Niquel. Piedra: Labrdorita. Importante: Todas las piedras al ser naturales, únicas e irrepetibles pueden variar en su forma y color",
    precio: 85990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/A46D973D-D60E-4736-AC41-171FD4DDB820_600x.jpg?v=1587938153",
    categoria: "Anillos",
    stock: 4,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/anillos/products/anillo_leo_labradorita",
  },
  {
    name: "Anillo Halo",
    description:
      "Anillo Halo Antiestress con Esfera de cuarzo giratoria. Plata 950. Piedra: Cuarzo Transparente",
    precio: 50990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/AnilloHaloFlo_ANIHALO001-3_94e49ecf-4b54-4812-8194-2388e15bf49c_800x.jpg?v=1605674200",
    categoria: "Anillos",
    stock: 0,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/anillos/products/anillo_halo_flo",
  },
  {
    name: "Anillo Rocky",
    description: "Anillo Rocky. Plata 950. Libre de Níquel",
    precio: 68990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/AnilloRocky_ANIROCK001-1_ba7435d9-b034-46f6-b5c9-6b2b9f80e3eb_700x.jpg?v=1577464478",
    categoria: "Anillos",
    stock: 10,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/anillos/products/anillo_rocky",
  },
  {
    name: "Anillo Moonchild",
    description:
      "Anillo Doble Argolla,  piedra tallada con cara del hijo de la Luna. Piedra: Piedra Luna. Plata 950. Libre de Niquel",
    precio: 75990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/image_cc923ec9-7dbc-4e81-87bb-46c7c9d79598_800x.jpg?v=1597792668",
    categoria: "Anillos",
    stock: 3,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/anillos/products/anillo-moonchild",
  },
  {
    name: "Collar Fases",
    description:
      "Collar icono de Delacons. La Luna y sus ciclos. Plata 950. Libre de Níquel. Tamaño :4 cm largo aprox. Incluye cadena Rolo aprox 40/42 cm",
    precio: 49990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/FasesLunares_FASES001-3_600x.jpg?v=1606276053",
    categoria: "Collares",
    stock: 5,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/collares/products/_fases_lunares",
  },
  {
    name: "Collar Medalla",
    description:
      "Medalla Luna con Crateres por un lado y Media Luna por el otro. Es Reversible. Plata 950. Libre de Níquel. Tamaño : 1.4 cm diametro. Incluye cadena Veneciana  o Grumet de 40 o 45 cm",
    precio: 38990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/MedallaLuna_MEDLUN001-3_377dcc6c-e5ec-4d47-b38e-679f0a75760c_900x.jpg?v=1578515865",
    categoria: "Collares",
    stock: 10,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/collares/products/medalla_luna_",
  },
  {
    name: "Collar Fine Aurora",
    description:
      "Amuleto escudo protector de todo lo malo. Plata 950. Libre de Níquel. Tamaño : 2.0 cm largo. 1.7 cm ancho. Piedra: Cristal Aurora. No incluye cadena.",
    precio: 75990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/image_af20d2ef-b8f1-4678-840f-32a8dc30112d_1000x.jpg?v=1616709580",
    categoria: "Collares",
    stock: 1,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/collares/products/collar-detente-fine-aurora",
  },
  {
    name: "Collar Fine Rubi",
    description:
      "Amuleto escudo protector de todo lo malo. Plata 950. Libre de Níquel.Tamaño : 2.0 cm largo. 1.7 cm ancho. Piedra: Rubi Fasetado.  Piedra reconstituida. No incluye cadena",
    precio: 75990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/MedallaLuna_MEDLUN001-3_377dcc6c-e5ec-4d47-b38e-679f0a75760c_900x.jpg?v=1578515865",
    categoria: "Collares",
    stock: 1,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/collares/products/collar-detente-fine-rubi",
  },
  {
    name: "Pulsera Halada + Piedra",
    description:
      "Pulsera mini eslabones que incluye un mini Halo y Medallita inicial. Puedes elegir entre varias piedras. Largo : 17 cm. Plata 950. Libre de Níquel",
    precio: 65990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/PulseraHalada_PULHALO001-1_6ae9ef17-2abd-4b86-99f3-bccb31f810b8_1000x.jpg?v=1577464575",
    categoria: "Pulseras",
    stock: 3,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/pulseras/products/pulsera_halada_onix",
  },
  {
    name: "Pulsera Mostacilla Plata + Letras",
    description:
      "Pulsera de Mostacillas de plata 950 tejida a Mano + Mostacilla con inicial para escribir nombre de Plata 950. Broche y Argolla de plata 950. Maximo Letras: 10. Largo: 18 cm aprox  ( Si la necesitas más larga o más corta, en notas escríbenos  el largo . Máximo 22 cm ) ",
    precio: 65990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/image_afe57d79-c48f-4e4e-ac4a-5a8d5a0a7831_1000x.jpg?v=1627966170",
    categoria: "Pulseras",
    stock: 5,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/pulseras/products/pulsera-mostacillas-plata-letras-plata-nombre",
  },
  {
    name: "Pulseras Fases Lunares",
    description:
      "Pulsera hecha a mano con las fases de la Luna. Esta pulsera es prima del collar de Fases. Plata 950. Libre de níquel. Tallas: M (17 cm), L (20 cm)",
    precio: 120990,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/image_373835ab-cf52-4cff-93d3-3dfe1bae2d68_800x.jpg?v=1606267342",
    categoria: "Pulseras",
    stock: 3,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/pulseras/products/pulsera-fases-lunares-1",
  },
  {
    name: "Pulsera Rolo",
    description:
      "Clásicas de siempre! Eslabón rolo macizo hecho a mano. Plata 950 . Libre de Niquel. Tamaño: 19 cm largo ",
    precio: 90999,
    img: "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/image_775ceeec-56e9-4f1e-bee7-a97022fb2020_800x.jpg?v=1620957767",
    categoria: "Pulseras",
    stock: 3,
    autor: "delacons",
    pagWeb:
      "https://www.delacons.com/collections/pulseras/products/pulsera-rolo",
  },
];

const insertingData = async () => {
  await Product.bulkCreate(allProducts);
  console.log("Productos insertados");
};

insertingData();
