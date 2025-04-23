// About.js
export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-emerald-200 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src=
"https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
                    alt="About"
                    className="w-full h-full bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-emerald-500 
                                   text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <p>
                    As I said, I am your friendly
                    beginner developer...
                </p>
                <p>
                I am a skilled Internship Trainee with over 6 months of hands-on experience in full-stack web development. My expertise includes using technologies such as Node.js, 
                    Java, JSP, HTML, CSS, and Bootstrap. As a problem solver, I have successfully designed and developed user-friendly, responsive web applications.</p>
           
                
            </div>
        </section>
    );
}
