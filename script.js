document.addEventListener("DOMContentLoaded", function () {
    // Select the send email button correctly
    const sendEmailButton = document.getElementById('sendEmailButton');
    
    fetch('congressmen.json')
        .then(response => response.json())
        .then(data => {
            const congressmen = data.congressmen;

            // Select the email text area for displaying the default message
            const emailTextArea = document.getElementById('emailText');

            // Default email body 
//             const defaultEmailBody = `Dear Sir/Madam,

// We wish to draw your urgent attention to the serious humanitarian and public safety consequences resulting from the activities of the Joint Awami Action Committee (JAAC) in Azad Jammu and Kashmir.

// Over recent months, JAAC-led actions have increasingly moved beyond peaceful protest and have caused significant disruption to the daily lives of ordinary citizens. Prolonged road blockades, forced closures of markets and businesses, restrictions on transportation and coercive strike calls have effectively held entire communities hostage, depriving citizens of their freedom of movement and access to essential services.

// These actions have resulted in shortages of food items, medicines, fuel and other daily-use commodities, particularly affecting children, women, the elderly and vulnerable communities. Patients requiring urgent medical care have faced delays, while economic activity and livelihoods have suffered considerable damage.

// Numerous reports indicate that shops and businesses have been forcibly closed through intimidation and coercion, denying citizens their right to earn a livelihood and conduct lawful commercial activity. Public transport services have also been disrupted, affecting workers, students and patients.

// Of particular concern are incidents involving violence against law enforcement personnel, including the killing of police officers during clashes associated with JAAC-led agitation. Such acts represent a grave violation of the rule of law and endanger both public officials and civilians alike.

// Equally alarming were incidents in which groups affiliated with the agitation stormed sensitive installations, including a military hospital, thereby threatening the safety of medical facilities, patients and healthcare personnel. Attacks on or interference with medical institutions undermine universally accepted humanitarian principles.

// Continued use of inflammatory rhetoric, incitement against state institutions, obstruction of public services, intimidation of businesses and disruption of civic life have created an atmosphere of fear, uncertainty and insecurity for ordinary residents of Azad Jammu and Kashmir.

// People of the region deserve protection of their fundamental rights, including freedom of movement, access to healthcare, education, livelihood and personal security. No political objective can justify actions that inflict hardship upon civilians or place public safety at risk.

// We respectfully urge all international humanitarian and human rights organizations to take cognizance of the suffering endured by ordinary citizens, objectively assess the humanitarian impact of these activities and reaffirm the principles of peaceful civic engagement, protection of civilians and respect for the rule of law.

// Voices of those affected families, small business owners, daily wage earners, patients and vulnerable communities must not remain unheard.

// Sincerely,`;

            const defaultEmailBody = `Dear Sir/Madam,

We, the undersigned citizens of Pakistan, call upon the relevant constitutional and legal authorities to ensure a transparent, impartial, and comprehensive investigation into allegations involving Imran Khan and the Pakistan Tehreek-e-Insaf (PTI).

We demand accountability for allegations relating to violence, incitement, attacks on state institutions and public property, disruption of public order, and the alleged misuse of government machinery for political purposes. Any individual or political party found responsible must be held accountable strictly in accordance with the Constitution and the law.

Political leadership cannot place anyone above the law. Pakistan’s institutions, public property, and constitutional order must be protected from political violence and unlawful interference.

We therefore demand equal application of the law, credible investigations, due process, and appropriate legal action wherever wrongdoing is established by evidence.

No one is above the law. Pakistan belongs to its people, and its Constitution and institutions must be protected.

Sincerely,`;
            // Display the initial default email body
            emailTextArea.textContent = defaultEmailBody;

            // Concatenate all emails into a single string
            const allEmailAddresses = congressmen.map(congressman => congressman.email).join(',');

            // Add event listener to the send email button
            sendEmailButton.addEventListener("click", function () {
                const mailtoLink = `mailto:${allEmailAddresses}?subject=${encodeURIComponent('Petition For Accountability Of Imran Khan & PTI')}&body=${encodeURIComponent(defaultEmailBody)}`;
                
                // Set mailto link and update email content preview in textarea
                sendEmailButton.href = mailtoLink;
                emailTextArea.textContent = defaultEmailBody;
            });
        })
        .catch(error => console.error('Error loading congressman data:', error));
});
