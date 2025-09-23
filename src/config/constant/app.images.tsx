type ImageMap = Record<string, string>;

interface AppImagesType {
  categories: ImageMap;
  team: ImageMap;
  about: ImageMap;
  banner: ImageMap;
  footerImg: ImageMap;
  searchImg: ImageMap;
  home2: {
    categories: ImageMap;
    customers: ImageMap;
    products: ImageMap;
  };
}

const AppImages: AppImagesType = {
  categories: {
    bagelMix: "/images/categories/bagelmt3fod.png",
    beauty: "/images/categories/beauty_vfbmzc.png",
    cabbage: "/images/categories/cabbage_n59uv3.png",
    carpFish: "/images/categories/carpfish.png",
    cat: "/images/categories/cat_tznwmq.png",
    cookie: "/images/categories/cookie_1_ugipqa.png",
    flyingPan: "/images/categories/frying-pan_vglm5c.png",
    juice: "/images/categories/juice_p5gv5k.png",
    manPerfume: "/images/categories/manPerfumes.jpg",
    milk: "/images/categories/milk_dcl0dr.png",
    placeholder: "/images/categories/placeholder.png",
    spray: "/images/categories/spray_pebsjt.png",
    strawberryJam: "/images/categories/strawberryjam.png",
    ins1: "/images/categories/ins1.jpg",
  },

  team: {
    team1: "/images/team-img/team-1.webp",
    team2: "/images/team-img/team-2.webp",
    team3: "/images/team-img/team-3.webp",
    team4: "/images/team-img/team-4.webp",
    team5: "/images/team-img/team-5.jpg",
  },

  about: {
    aboutTop: "/images/about/aboutTop.webp",
    about: "/images/about/aboutbottom.jpg",
  },

  banner: {
    banner1: "/images/banner/bannerimg1.webp",
    banner2: "/images/banner/bannerimg2.webp",
    banner3: "/images/banner/bannerimg3.webp",
    banner4: "/images/banner/bannerimg1.jpg",
  },

  footerImg: {
    appStoreLogo: "/images/footer-img/appStoreLogo.svg",
    googleApp: "/images/footer-img/googleApp.png",
    googlePlay: "/images/footer-img/googlePlay.png",
    paymentLogo: "/images/footer-img/paymentlogo.webp",
    playStoreLogo: "/images/footer-img/playStoreLogo.svg",
  },

  searchImg: {
    ctaBg1: "/images/searchImg/cta-bg-1.webp",
    ctaBg2: "/images/searchImg/cta-bg-2.webp",
    ctaBg3: "/images/searchImg/cta-bg-3.webp",
  },

  home2: {
    categories: {
      acces: "/images/home2/categories/acces.jpg",
      bags: "/images/home2/categories/bags.jpg",
      linen: "/images/home2/categories/linen.jpg",
      menShirts: "/images/home2/categories/menshirt.jpg",
      partyDress: "/images/home2/categories/partydress.jpg",
      summer: "/images/home2/categories/summer.jpg",
    },
    customers: {
      boxWoman: "/images/home2/customers/boxswomen.jpg",
      menB: "/images/home2/customers/MENImg.jpg",
      menBanner: "/images/home2/customers/menbanner.jpg",
      miniDress: "/images/home2/customers/MINIDRESS.jpg",
      newBags: "/images/home2/customers/newbg.jpg",
      women1: "/images/home2/customers/women1.jpg",
      women2: "/images/home2/customers/women2.jpg",
      women4: "/images/home2/customers/women4.jpg",
    },
    products: {
      product1: "/images/home2/products/product1.jpg",
      product2: "/images/home2/products/product2.jpg",
      product3: "/images/home2/products/product3.jpg",
      product4: "/images/home2/products/product4.jpg",
      product5: "/images/home2/products/product5.jpg",
      product6: "/images/home2/products/product6.jpg",
      product7: "/images/home2/products/product7.jpg",
      product8: "/images/home2/products/product8.jpg",
      bottomBanner: "/images/home2/products/bottombanner.jpg",
      topBanner: "/images/home2/products/homeBanner.jpg",
    },
  },
};

export default AppImages;
