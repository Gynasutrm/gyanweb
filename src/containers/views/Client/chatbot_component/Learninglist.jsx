import React from 'react'
import './Learninglist.css';

const Learninglist = () => {
     
    const optionLinks = [

        {
            text: "Title1",

            id: 1,
          },
        {
            text: "Title2",

            id: 2,
          },
        {
            text: "Title3",

            id: 3,
          },
]

    const linkMarkUp = optionLinks.map((link) => (
        <li key={link.id} className="link-list-item">
        {link.text}
        </li>
    ));

    return <ul className="link-list">{linkMarkUp}</ul>
}

export default Learninglist
