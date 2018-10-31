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
        description: "I have been fascinated by History as a subject since childhood. Often, I can be found reading about the historical battles that encountered by mankind. I am currently reading this very interesting book that discusses the world history from the perspective of the Middle East and Asia."
    },
    {
        title: "Tea",
        label: "Tea",
        path: "/tea",
        url: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHACDxsxy019b6VLA_E0fZdte9a1X7oXBPgg445Iz3JOHkDjbQ2g",
        alt: "Logo of tea",
        description: "I am a hardcore fan of tea and never forget my cup of tea before leaving for " +
        "work every morning. I hail from this state called Assam in India, which is where the British cultivated Tea fist in India, to tackle the Chinese monopoly. " +
        "Whenevr I visit Assam, I never forget to purchase tea belonging to various world-class tea estates in the region."
    },
    {
        title: "Biking",
        label: "Biking",
        path: "/biking",
        url: "https://www.citibikenyc.com/",
        img: "https://d21xlh2maitm24.cloudfront.net/nyc/01unlock2.JPG?mtime=20160428123800",
        alt: "Logo of Citibike",
        description: "I am a fan of biking. Though, I am not into crazy expensive bikes, but I regularly utilize my citibike membership while commuting to work. That is one of hte best times of the day for me."
    },
    {
        title: "Books",
        label: "Books",
        path: "/books",
        url: "",
        img: "https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?size=338&ext=jpg",
        alt: "Logo of books",
        description: "I am into all kinds of topics. They could be Political Thrillers, History, Light reads, Detective novels etc. Well, I HATE Harry Potter for whatever reason :)"
    },
    {
        title: "Music",
        label: "Music",
        path: "/music",
        url: "",
        img: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/578650fe544c4.jpg",
        alt: "Logo of music",
        description: "I don't think I can discuss music in this limited space. I am building something BIG for it. Watch out for the space"
    },
    {
        title: "Programming",
        label: "Programming",
        path: "/programming",
        url: "",
        img: "https://www.class-central.com/bundles/classcentralsite/images/icon-programming-and-software-development.png",
        alt: "Logo of programming",
        description: "Java, JS, Python, C blah blah"
    },
    {
        title: "Guitars",
        label: "Guitars",
        path: "/guitars",
        url: "",
        img: "https://media.sweetwater.com/api/i/f-webp__q-82__ha-8ddb83907276bbcf__hmac-6ad6119bc41cc0f2ed2cbb2567235e35f91807fb/images/closeup/750-GRX20ZBKN_detail1.jpg.auto.webp",
        alt: "Logo of Guitar",
        description: " Recently broke my Ibanez acoustic. Did not get a chance to purchase a new one. Waiting for someone to push me enough to purchase the new Fender :) ( I sold my previous Fender Stratocaster )"
    }
];

interests.map((interest) => {
    interest["interestId"] = getInterestId(interest["path"])
})

export default interests;