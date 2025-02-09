import React from 'react';
import Header from './components/Header';
import DestinationCard from './components/DestinationCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  const destinations = [
    {
      name: "FEWA LAKE",
      image: "https://th.bing.com/th/id/OIP.qlbc-HPAN2rNfKmz89lbMgHaFC?rs=1&pid=ImgDetMain",
      description: "A refreshing lakeside view everytime, Nepal",
      bestTime: "Specially on summer season"
    },
    {
      name: "SWAYAMBU TEMPLE",
      image: "https://th.bing.com/th/id/R.89e81f95584a51d7b3cf1af35b458c86?rik=bEdRJ8ZjLAREBg&pid=ImgRaw&r=0", 
      description: "A beautiful place of Awe-Striking Architecture, Nepal",
      bestTime: "Everytime open"
    }
    ,
    {
      name: "LUMBINI",
      image: "https://www.seehertravel.com/wp-content/uploads/2015/06/P1220120.jpg", 
      description: "The birth place of lord gautam buddha, Nepal ",
      bestTime: "At Buddha purima"
    }
    ,
    {
      name: "CHITWAN NATIONAL PARK",
      image: "https://th.bing.com/th/id/R.af457f5f5496ca644badb96e618ef4c4?rik=8AKk46tjgMSpew&riu=http%3a%2f%2f4.bp.blogspot.com%2f-nsNOCVFrcBc%2fVAJxJNsYToI%2fAAAAAAAADLw%2fn2OKGmpmgz4%2fs1600%2fchitwan-national-park.jpg&ehk=T67cOHjoW9ibTqz8Kmdb%2bWXyveTWV2inWcenj0fjx%2bI%3d&risl=&pid=ImgRaw&r=0", 
      description: "A beautiful place with a amazing scenery of the nature, Nepal",
      bestTime: "Summer Season"
    },
    {
      name: "TILICHO-LAKE",
      image: "https://th.bing.com/th/id/OIP.t3L9h-MXymxrdI5OrmEISQAAAA?rs=1&pid=ImgDetMain", 
      description: "Amazing view of the lake with a beautiful scenery, Nepal ",
      bestTime: "At summer season"
    }
    ,
    {
      name: "RANI MAHAL",
      image: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/02/Rani-Mahal-Palpa-Nepal.jpg?resize=1024%2C644&ssl=1", 
      description: "A beautiful palace with a good environment, Nepal",
      bestTime: "Summer Season"
    },
    {
      name: "SAGARMATHA NATIONAL PARK",
      image: "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2018/04/Hand-Luggage-Only-12-1.jpg?resize=800%2C534&ssl=1", 
      description: "It really is one of the best places to visit in Nepal – if you’re looking for tranquil nature and wildlife, Nepal ",
      bestTime: "at winter season"
    }
    ,
    {
      name: "ILLAM",
      image: "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2018/04/Hand-Luggage-Only-14-1.jpg?resize=800%2C600&ssl=1", 
      description: "If you’d like to watch the tea pickers do their thing. It really is one of the best places to visit in Nepal, Nepal",
      bestTime: "visit between April and November"
    }
    ,
    {
      name: "ANNAPURNA BASE CAMP",
      image: "https://th.bing.com/th/id/OIP.tr1LKo61Bls9jfpxhWSjeAHaE8?rs=1&pid=ImgDetMain", 
      description: "A beautiful place with a amazing scenery also good for trekking, Nepal",
      bestTime: "Summer Season"
    }
    ,
    {
      name: "NAGARKOT",
      image: "https://adventurewhitehimalaya.com/wp-content/uploads/2023/10/Nagarkot-min.webp", 
      description: "A beautiful place with a amazing scenery , Nepal",
      bestTime: "Summer and spring Season"
    }
  ];

  return (
    <div className="App">
      <Header />
      <div className="destinations">
        {destinations.map((dest, index) => (
          <DestinationCard key={index} destination={dest} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
