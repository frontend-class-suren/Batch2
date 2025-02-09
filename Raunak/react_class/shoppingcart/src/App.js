import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';

function App() {
  const [courses, setCourses] = useState([
    { id: 1, 
    name: 'GFG T-shirt', 
    price: 499, 
    image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png'
    },
    { id: 2, 
    name: 'GFG Bag', 
    price: 699, 
    image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg'
    },
    { id: 3, 
    name: 'GFG Hoodie', 
    price: 799, 
    image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg'
    }
]);

const [cartCourses, setCartCourses] = useState([]);
const [searchCourse, setSearchCourse] = useState('');

const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses
                        .find(item => item.product.id === GFGcourse.id);
    if (alreadyCourses) {
        const latestCartUpdate = cartCourses.map(item =>
            item.product.id === GFGcourse.id ? { 
            ...item, quantity: item.quantity + 1 } 
            : item
        );
        setCartCourses(latestCartUpdate);
    } else {
        setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
    }
};

const deleteCourseFromCartFunction = (GFGCourse) => {
    const updatedCart = cartCourses
                        .filter(item => item.product.id !== GFGCourse.id);
    setCartCourses(updatedCart);
};

const totalAmountCalculationFunction = () => {
    return cartCourses
        .reduce((total, item) => 
                    total + item.product.price * item.quantity, 0);
};

const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
};

const filterCourseFunction = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
);

return (
    <div className="App">
        <SearchComponent searchCourse={searchCourse} 
                        courseSearchUserFunction=
                            {courseSearchUserFunction} />
        <main className="App-main">
            <ShowCourseComponent
                courses={courses}
                filterCourseFunction={filterCourseFunction}
                addCourseToCartFunction={addCourseToCartFunction}
            />

            <UserCartComponent
                cartCourses={cartCourses}
                deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                totalAmountCalculationFunction={
                    totalAmountCalculationFunction
                }
                setCartCourses={setCartCourses}
            />
        </main>
    </div>
);
}

export default App;
