import { use, useState } from "react";

const Submit = () => {
     const [firstName, setFirstName] = useState("");
            const [lastName, setLastName] = useState("");
            const [email, setEmail] = useState("");
            const [contact, setContact] = useState("");
            const [gender, setGender] = useState("");
            const [subjects, setSubjects] = useState({
                english: true,
                maths: false,
                physics: true,
            });
            const [resume, setResume] = useState("");
            const [url, setUrl] = useState();
            const [selectedOption, setSlectedOption] = useState("");
            const [about, setAbout] = useState("");
    
            const handleSubmit = (e) => {
                e.prevent.default();
                console.log(
                    firstName,
                    lastName,
                    email,
                    contact,
                    gender, 
                    selectedOption, 
                    subjects,
                    resume, 
                    url,
                    about,
                );
            };
             
            const handleSubjectChange = (sub) =>{
                setSubjects((prev)=> ({
                    ...prev,
                    [sub]: !prev[sub],
                }));
            };
    
            const handleReset = () => {
                setFirstName("");
                setLastName("");
                setEmail("");
                setContact("");
                setGender(""); 
                setSubjects({
                    english: true,
                    maths: false,
                    physics: false
                });
                setResume("");
                setUrl("");
                setSlectedOption("");
                setAbout("");
    
           };
    
  return (
    <div className='form'>
        <fieldset>
            <form action="#" method='get'>
                <label for="firstname">Enter your firstname:</label><br/>
                <input type="text" id="firstname"name='firstname' placeholder='Enter first name' value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                <br/> <br/>
                <label for="lastname">Enter your lastname:</label><br/>
                <input type="text" placeholder='Enter last name' name='lastname' id="lastname" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                <br/><br/>
                <label for="email">Enter your email:</label><br/>
                <input type="email" placeholder="Enter email" name='email' id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                <br/><br/>
                <label for="tel">Enter your contact:</label><br/>
                <input type="tel" name='contact' placeholder="Enter mobile number" id="contact" value={contact} onChange={(e)=> setContact(e.target.value)} />
                <br/><br/>
                <label for="gender">Enter your gender:</label><br/>
                <input type="radio" name='gender' placeholder="Enter gender" id="gender" value="male" checked={gender === "male"} onChange={(e)=> setGender(e.target.value)} />
                Male
                <input type="radio" name="gender" value="female" id="female" checked={gender === "female"} onChange={(e)=> setGender(e.target.value)} />
                Female
                <input type="radio" name="gender" value="other" id="other" checked={gender === "other"} onChange={(e)=> setGender(e.target.value)} />
                <br/><br/>
                <label for="lang">Your best subject:</label><br/>
                <input type="checkbox" name="lang" id="english" checked={subjects.english === true} onChange={(e)=> handleSubjectChange("english")} />
                English
                <input type="checkbox" name="lang" id="maths" checked={subjects.maths === true} onChange={(e)=> handleSubjectChange("maths")} />
                Maths
                <input type="checkbox" name="lang" id="physics" checked={subjects.physics === true} onChange={(e)=> handleSubjectChange("physics")} />
                Physics
                <br/> <br/>
                <label for="file">Upload resume:</label><br/>
                <input type="file" name="file" id="file" onChange={(e)=> setResume(e.target.files[0])} placeholder='Enter upload file ' />
                <br/><br/>
                <label for="url">Enter URL:</label><br/>
                <input type="url" name="url" id="url" onChange={(e)=> setUrl(e.target.value)} placeholder='Enter url' />
                <br/><br/>
                <label>Select your choice</label><br/>
                <select name="select" id="select" value={selectedOption} onChange={(e)=> setSlectedOption(e.target.value)}>
                <option value="" disabled selected={selectedOption === ""}>Selct your answer</option>
                <optgroup label='Beginers'>
                    <option value="1">HTML</option>
                    <option value="2">CSS</option>
                    <option value="3">Javascript</option>
                </optgroup>
                <optgroup label='Advance'>
                    <option value="4">React</option>
                    <option value="5">Node</option>
                    <option value="6">Express</option>
                    <option value="t">MongoDB</option>
                </optgroup>
                </select>
                <br/><br/>
                <label for="about">About</label>
                <textarea name="about" id="about" cols={30} rows={10} onChange={(e)=> setAbout(e.target.value)} placeholder='About yourself'></textarea>
                <br/><br/>
                <button>Submit</button>
            </form>
        </fieldset>
    </div>
  );
  
}

export default Submit