import React from 'react'

const getInterestId = (path) => path.slice(1)

let interests = [
    {
        title: "History",
        label: "History",
        path: "/history",
        url: "",
        img: "https://oneclassblog.com/wp-content/uploads/2018/03/Fotolia_80243101_Subscription_Monthly_M.jpg",
        alt: "Logo of history",
        description: "This is some history"
    },
    {
        title: "Tea",
        label: "Tea",
        path: "/tea",
        url: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHACDxsxy019b6VLA_E0fZdte9a1X7oXBPgg445Iz3JOHkDjbQ2g",
        alt: "Logo of tea",
        description: "This is some tea info"
    },
    {
        title: "Biking",
        label: "Biking",
        path: "/biking",
        url: "https://www.citibikenyc.com/",
        img: "https://d21xlh2maitm24.cloudfront.net/nyc/01unlock2.JPG?mtime=20160428123800",
        alt: "Logo of Citibike"
    },
    {
        title: "Books",
        label: "Books",
        path: "/books",
        url: "",
        img: "https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?size=338&ext=jpg",
        alt: "Logo of books"
    },
    {
        title: "Music",
        label: "Music",
        path: "/music",
        url: "",
        img: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/578650fe544c4.jpg",
        alt: "Logo of music"
    },
    {
        title: "Programming",
        label: "Programming",
        path: "/programming",
        url: "",
        img: "https://www.class-central.com/bundles/classcentralsite/images/icon-programming-and-software-development.png",
        alt: "Logo of programming"
    },
    {
        title: "Guitars",
        label: "Guitars",
        path: "/guitars",
        url: "",
        img: "https://media.sweetwater.com/api/i/f-webp__q-82__ha-8ddb83907276bbcf__hmac-6ad6119bc41cc0f2ed2cbb2567235e35f91807fb/images/closeup/750-GRX20ZBKN_detail1.jpg.auto.webp",
        alt: "Logo of Guitar"
    }
];

interests.map((interest) => {
    interest["interestId"] = getInterestId(interest["path"])
})

export default interests;