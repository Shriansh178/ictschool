let state = {
  navbar: [
    {
      title: "HOME",
      url: "/",
      submenu: null,
    },
    {
      title: "ABOUT",
      url: "/",
      submenu: [
        {
          title: "ADDMISSION",
          url: "/school-life",
          submenu: [
            {
              title: "FEES PAYMENT",
              url: "/school-life",
              submenu: null,
            },
            {
              title: "Maktab yutuqlari",
              url: "/school-achievements",
              submenu: null,
            },
            { title: "Qonun hujjatlari", url: "/law-documents", submenu: null },
          ],
        },
        {
          title: "Tuzilma",
          url: "/smth",
          submenu: [{ title: "Rahbariyat", url: "/management", submenu: null }],
        },
        {
          title: "Ta`lim tizimi",
          url: "/edu-sys",
          submenu: [{ title: "O'quv tizimi", url: "/edu-sys", submenu: null }],
        },
      ],
    },
    {
      title: "ADDMISSION",
      url: "/admission",
      submenu: [
        { title: "ADDMISSION", url: "/admission", submenu: null },
        {
          title: "ADDMISSION",
          url: "https://ariza.piima.uz/",
          submenu: null,
        },
      ],
    },
    {
      title: "Mandatory Public Disclosure ",
      url: "/smth",
      submenu: [
        {
          title: "Loyihalar",
          url: "/smth",
          submenu: [
            {
              title: "Digital Generation Uzbekistan",
              url: "/smth",
              submenu: null,
            },
            {
              title: "Olimpiada Assotsatsiyasi",
              url: "https://olympiad.uzedu.uz/",
              submenu: null,
            },
            { title: "Hour of Code", url: "/smth", submenu: null },
          ],
        },
        {
          title: "Hamkorlar",
          url: "/smth",
          submenu: [
            {
              title: "Huawei",
              url: "https://www.huawei.com/uz/",
              submenu: null,
            },
            { title: "Artel", url: "https://artelgroup.org/", submenu: null },
            {
              title: "DGUzbekistan",
              url: "https://digitalgeneration.uz/",
              submenu: null,
            },
            { title: "UzCard", url: "https://uzcard.uz/ru", submenu: null },
            { title: "Ucell", url: "https://ucell.uz/", submenu: null },
            {
              title: "Hamkor bo'lish",
              url: "https://t.me/ictschool011010",
              submenu: null,
            },
          ],
        },
        {
          title: "FACILITY",
          url: "https://www.youtube.com/@ITFizika",
          submenu: null,
        },
      ],
    },
    {
      title: "FACILITY",
      url: "https://www.youtube.com/@ITFizika",
      submenu: null,
    },
    {
      title: "CONTACT",
      url: "/smth",
      submenu: [
        {
          title: "Maktab bilan a'loqa",
          url: "/contact",
          submenu: null,
        },
      ],
    },
  ],
  footerColumnData: [
    {
      title: "Bizning maktab",
      items: [
        { title: "Bosh sahifa", url: "/" },
        { title: "Maktab haqida", url: "/" },
        // {
        //   title: "Galereya",
        //   url: "/",
        // },
        { title: "Qabul", url: "/admission" },
        { title: "Maktab hayoti", url: "/school-life" },
        // {
        //   title: "Yangiliklar",
        //   url: "/",
        // },
        { title: "Bog'lanish", url: "/contact" },
      ],
    },
    {
      title: "Onlayn darslar",
      items: [
        { title: "Matematika", url: "https://www.youtube.com/@ITFizika" },
        { title: "Fizika", url: "https://www.youtube.com/@ITFizika" },
        {
          title: "Informatika",
          url: "https://www.youtube.com/@ITFizika",
        },
        { title: "Robototexnika", url: "https://www.youtube.com/@ITFizika" },
      ],
    },
    {
      title: "Ijtimoiy tarmoqlar",
      items: [
        { title: "Telegram", url: "https://t.me/ictschooluz" },
        { title: "Instagram", url: "https://www.instagram.com/itschool.uz/" },
        {
          title: "YouTube",
          url: "https://www.youtube.com/channel/UCFIGpknr9Ub1E21NsxpAL_Q",
        },
        { title: "Facebook", url: "https://www.facebook.com/itschool.uz" },
      ],
    },
  ],
};

export default state;
