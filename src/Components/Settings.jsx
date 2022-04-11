import { useEffect, useState } from 'react'

export default function Settings() {

    //storing API data
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        const apiURL = `https://opentdb.com/api_category.php`;
    
        fetch(apiURL)
            .then((res) => res.json())
            .then((res) => {
                setSettings(res.trivia_categories);
            });
    }, [setSettings]);
    
  return (
    <div>Settings</div>
  )
}
