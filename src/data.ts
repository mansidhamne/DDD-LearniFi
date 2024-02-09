export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/dashboard/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/dashboard/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Students",
        url: "/dashboard/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Courses",
        url: "/products",
        icon: "product.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topStudents = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Mansi Dhamne",
    std: "Class: 10",
    score: "98.8%",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Akshay Gokhale",
    std: "Class: 12",
    score: "97.0%",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Parth Chitre",
    std: "Class: SY",
    score: "96.9%",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Vivek Gangwani",
    std: "Class: 11",
    score: "95%",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Y.S Rao",
    std: "Class: 3",
    score: "90%",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Ayush Andhale",
    std: "Class: 8",
    score: "89.6%",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Akshay Chitre",
    std: "Class: 1",
    score: "86%",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Students",
  number: "337",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Average Attendance",
  number: "85.9%",
  dataKey: "products",
  percentage: 3,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Hours",
  number: "6054.5 hours",
  dataKey: "revenue",
  percentage: -5,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Income",
  number: "$59032",
  dataKey: "ratio",
  percentage: 13,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Curriculum Covered",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 5,
    },
    {
      name: "Mon",
      profit: 10,
    },
    {
      name: "Tue",
      profit: 15,
    },
    {
      name: "Wed",
      profit: 20,
    },
    {
      name: "Thu",
      profit: 30,
    },
    {
      name: "Fri",
      profit: 45,
    },
    {
      name: "Sat",
      profit: 55,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Impressions",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Gangwani",
    firstName: "Vivek",
    email: "vivek@gmail.com",
    grade: "X",
    score: "87.5%",
    attendance: "90%",
  },
];




export const singleUser = {
  id: 1,
  title: "Proff. Siddharth Chandra",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "sidproquo",
    fullname: "Siddharth Chandra",
    email: "sidchandra@spit.ac.in",
    phone: "9876543210",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "impressions", color: "#82ca9d" },
      { name: "students", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        impressions: 40,
        students: 24,
      },
      {
        name: "Mon",
        impressions: 30,
        students: 13,
      },
      {
        name: "Tue",
        impressions: 20,
        students: 8,
      },
      {
        name: "Wed",
        impressions: 27,
        students: 10,
      },
      {
        name: "Thu",
        impressions: 18,
        students: 5,
      },
      {
        name: "Fri",
        impressions: 23,
        students: 12,
      },
      {
        name: "Sat",
        impressions: 34,
        students: 20,
      },
    ],
  },
  activities: [
    {
      text: "Conducted an English Assessment Test",
      time: "3 day ago",
    },
    {
      text: "Completed course curriculum for Semester 3",
      time: "1 week ago",
    },
    {
      text: "Certificate for Emerging Teacher",
      time: "2 weeks ago",
    },
    {
      text: "Published a Research Paper",
      time: "1 month ago",
    },
    {
      text: "Cousre Begins: Phonetics Basics",
      time: "1 month ago",
    },
    
  ],
};
