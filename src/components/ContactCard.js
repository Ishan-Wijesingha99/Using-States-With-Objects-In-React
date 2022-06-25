import React from "react";



export const ContactCard = function() {

    // making an object the state variable
    const [contact, setContact] = React.useState({
        firstName: "Eren",
        lastName: "Yeager",
        phone: "+1800 Freedom",
        email: "finallyfree@freemail.com",
        isFavorite: false
    })


    // changing a property inside that object state variable
    const toggleFavorite = function() {

        // remember, whatever is returned by the setState function is what the new object will be. If that's the case, and we only want to change one property of the original object, we need to return the entire object with all it's properties, and only change one of them
        setContact(contact => {
            return {
            // this is really cool, we are copying ALL the properties of the original object, including the properties we want to change!
            ...contact,
            // but, we then REWRITE the properties we want to change. JavaScript will give precedence to the last one
            isFavorite: !contact.isFavorite
            }
        });

    }


    // conditional rendering using ternary operator
    let starIconBoolean = contact.isFavorite ? 'images/star-filled.png' : 'images/star.png'; 
    

    
    return (
        <main>
            <article className="card">
                <img src="images/eren-yeager.png" className="card--image" />

                <div className="card--info">
                    <img 
                        src={starIconBoolean}
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />

                    <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>

                    <p className="card--contact">{contact.phone}</p>

                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}