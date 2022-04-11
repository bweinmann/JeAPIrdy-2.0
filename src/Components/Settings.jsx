import { useEffect, useState } from 'react'

export default function Settings() {

    const [loading, setLoading] = useState(false);
    //storing API data
    const [settings, setSettings] = useState(null);
    //second hook for category
    const [category, setCategory] = useState("");

    useEffect(() => {
        const apiURL = `https://opentdb.com/api_category.php`;
    
        fetch(apiURL)
            .then((res) => res.json())
            .then((res) => {
                setSettings(res.trivia_categories);
            });
    }, [setSettings]);
    //when the category is chosen, event occurs
    const handleCategory = e => {
        setCategory(e.target.value)
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
            </div>
        );
     } else {
         <p>Loading...</p>
     }                   
}
