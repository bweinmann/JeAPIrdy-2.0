import { useEffect, useState } from 'react'

export default function Settings() {

    const [loading, setLoading] = useState(false);
    //storing API data
    const [settings, setSettings] = useState(null);
    //second hook for category
    const [category, setCategory] = useState("");

    const [difficulty, setDifficulty] = useState("");
    const [questionNumber, setQuestionNumber] = useState(50);

    useEffect(() => {
        const apiURL = `https://opentdb.com/api_category.php`;
        setLoading(true)
        fetch(apiURL)
            .then((res) => res.json())
            .then((res) => {
                setLoading(false);
                setSettings(res.trivia_categories);
            });
    }, [setSettings]);
    //when the category is chosen, event occurs
    const handleCategory = e => {
        setCategory(e.target.value)
    }
    const handleType = e => {
        setType(e.target.value)
    }
    const handleDifficulty = e => {
        setDifficulty(e.target.value)
    }
    const handleQuestionNumber = e => {
        setQuestionNumber(e.target.value)
    }
     if(!loading) {  return (
        <div>
            <div>
                <h2>Choose a Category:</h2>
                    <select value={category} onChange={handleCategory}>
                        <option>All</option>
                        {settings && settings.map((setting) => (
                            <option value={setting} key={setting.id}>
                                {setting.name}
                            </option>
                    ))}
                </select>
            </div>
            <div>
                <h2>Choose a Difficulty:</h2>
                    <select value={difficulty} onChange={handleDifficulty}>
                        <option value="" key="difficulty-0">All</option>
                        <option value="easy" key="difficulty-1">Easy</option>
                        <option value="medium" key="difficulty-2">Medium</option>
                        <option value="hard" key="difficulty-3">Hard</option>
                    </select>
            </div>
            <div>
                <h2>Select Question Type:</h2>
                    <select value={questionType} onChange={handleType}>
                        <option value="" key="type-0">All</option>
                        <option value="multiple" key="type-1">Multiple Choice</option>
                        <option value="boolean" key="type-2">True/False</option>
                    </select>
            </div>
			<div>
                <h2>Amount of Questions:</h2>
                    <input value={questionNumber} onChange={handleQuestionNumber} />
            </div>
        </div>      
        );
     } else {
         <p>Loading...</p>
     }                   
}
