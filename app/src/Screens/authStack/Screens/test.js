import { imgs } from "../../../assets/img/imgs";

const data = [
   
    {
      id: 1,
      label: 'A partner for you',
      svg: <NewUsers width={wp(10)} height={wp(10)} />,
      options: [{img: imgs.obj1.img1 , txt: 'A Relationship'}, {img: imgs.obj1.img2, txt:'Nothing Serious'}, {img: imgs.obj1.img3 , txt:"I'll know when i find it"}],
    },
    {
      id: 2,
      label: "Exercise Habits",
      svg: <NewUsers width={wp(10)} height={wp(10)} />,
      options: [
        {img: imgs.obj2.img1, txt :'Occasional Exercise'},
        {img: imgs.obj2.img2, txt:'Enough Cardio to keep on'},
        {img: imgs.obj2.img3, txt:'Exercise all the time'},
      ],
  
    },
    {
      id: 3,
      label: "Cooking Skills",
      svg: <NewUsers width={wp(10)} height={wp(10)} />,
      options: [
       { img: imgs.obj3.img1,txt: "I'm a microwave master"},
        {img: imgs.obj3.img2, txt: "I'm a delivery expert"},
        {img: imgs.obj3.img3, txt:'I know a few good recipes'},
        {img: imgs.obj3.img4, txt: "I'm a master chef"},
      ],
    },
    {
      id: 4,
      label: 'Travel Buddy',
      svg: <NewUsers width={wp(10)} height={wp(10)} />,
      options: [
        {img: imgs.obj4.img1,txt:'Hiking & Backpack'},
        {img: imgs.obj4.img2, txt:'Museum & Postcards'},
        {img: imgs.obj4.img3, txt:'Deckchair & Sunscreen'},
      ],
    },
    {
      id: 5,
      label: "Night Life",
      svg: <NewUsers width={wp(10)} height={wp(10)} />,
      options: [
        {img: imgs.obj6.img1, txt:"I'm in bed by midnight"},
        {img: imgs.obj6.img2,txt:"I'm a night owl"},
        {img: imgs.obj6.img3,txt:'I party in moderation'},
      ],
    },
    {
      id: 6,
      label: 'Smoking',
      svg: <NewUsers width={wp(10)} height={wp(10)} />,
      options: [{img: imgs.obj5.img1,txt:'I smoke'}, {img: imgs.obj5.img2,txt:'Not a fan but whatever'}, {img: imgs.obj5.img3,txt:'Zero tolerance'}],
    },
    {
      id: 7,
      label: 'About Kids',
      svg: <NewUsers width={wp(10)} height={wp(10)} />,
      options: [
        {img: imgs.obj7.img1,txt:'I love the one I have'},
        {img: imgs.obj7.img2, txt: "I'd like some"},
        {img: imgs.obj7.img3,txt:'I have some but want more'},
        {img: imgs.obj7.img4,txt: 'Thanks but no thanks'},
      ],
    },
    {
      id: 8,
      label: 'Eating Habits',
      svg: <NewUsers width={wp(10)} height={wp(10)} />,
      options: [
        {img: imgs.obj8.img1, txt: 'A little of everything'},
        {img: imgs.obj8.img2, txt:'Vegon'},
        {img: imgs.obj8.img3, txt:'Flexitarian'},
        {img: imgs.obj8.img4, txt:'Vegetarian'},
        {img: imgs.obj8.img5, txt:'Junk food forever'},
        {img: imgs.obj8.img6, txt:'halal'},
      ],
    },
  ];