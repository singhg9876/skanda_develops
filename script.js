const form = document.getElementById('contactSbt');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form); // Gather all form data
        formData.append('name', document.getElementById('name').value);
        formData.append('email', document.getElementById('email').value);
        formData.append('message', document.getElementById('message').value);
        formData.append('date', new Date())
        document.getElementById('sbtBtn').disabled = true
        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    alert("Message sent successfully!")
                } else {
                    alert('Failed to send the message. Please try again.')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                document.getElementById('sbtBtn').disabled = false
                form.reset();
            });
    });
}

// document.getElementById('contactSbt').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const form = event.target;
//     const formData = new FormData(form); // Gather all form data
//     formData.append('name', document.getElementById('name').value);
//     formData.append('email', document.getElementById('email').value);
//     formData.append('message', document.getElementById('message').value);
//     document.getElementById('sbtBtn').disabled = true
//     fetch(form.action, {
//         method: 'POST',
//         body: formData,
//     })
//         .then(response => response.json())
//         .then(data => {
//             if (data.result === 'success') {
//                 alert("Message sent successfully!")
//             } else {
//                 alert('Failed to send the message. Please try again.')
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         })
//         .finally(() => {
//             document.getElementById('sbtBtn').disabled = false
//             form.reset();
//         });
// });

document.getElementById('subsEmailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form); // Gather all form data
    formData.append('email', document.getElementById('email2').value);
    formData.append('date', new Date())
    document.getElementById('sbscBtn').disabled = true
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                alert("Email Subscribed!")
            } else {
                alert('Failed to Subscribe. Please try again.')
            }
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
            document.getElementById('sbscBtn').disabled = false
            form.reset();
        });
});

function resetBtnClass() {
    document.getElementById('OverviewBtn').className = "detailsWallBtn"
    document.getElementById('AmentiesBtn').className = "detailsWallBtn"
    document.getElementById('FloorBtn').className = "detailsWallBtn"
    document.getElementById('SpecificationsBtn').className = "detailsWallBtn"
    document.getElementById('GalleryBtn').className = "detailsWallBtn"
    document.getElementById('LocationBtn').className = "detailsWallBtn"
    document.getElementById('OverviewBtn2').className = "detailsWallBtn"
    document.getElementById('AmentiesBtn2').className = "detailsWallBtn"
    document.getElementById('FloorBtn2').className = "detailsWallBtn"
    document.getElementById('SpecificationsBtn2').className = "detailsWallBtn"
    document.getElementById('GalleryBtn2').className = "detailsWallBtn"
    document.getElementById('LocationBtn2').className = "detailsWallBtn"

    //hiding divs
    document.getElementById('overview').style.display = "none";
    document.getElementById('amenties').style.display = "none";
    document.getElementById('floorPlan').style.display = "none";
    document.getElementById('Specifications').style.display = "none";
    document.getElementById('gallery').style.display = "none";
    document.getElementById('location').style.display = "none";
}
function toggleDetails(id) {
    resetBtnClass();
    if (id == "OverviewBtn" || id == "OverviewBtn2") {
        document.getElementById('OverviewBtn').className = "detailsWallBtnActive"
        document.getElementById('OverviewBtn2').className = "detailsWallBtnActive"
        document.getElementById('overview').style.display = "block";
    }
    else if (id == "AmentiesBtn" || id == "AmentiesBtn2") {
        document.getElementById('AmentiesBtn').className = "detailsWallBtnActive"
        document.getElementById('AmentiesBtn2').className = "detailsWallBtnActive"
        document.getElementById('amenties').style.display = "block";
    }
    else if (id == "FloorBtn" || id == "FloorBtn2") {
        document.getElementById('FloorBtn').className = "detailsWallBtnActive"
        document.getElementById('FloorBtn2').className = "detailsWallBtnActive"
        document.getElementById('floorPlan').style.display = "block";
    }
    else if (id == "SpecificationsBtn" || id == "SpecificationsBtn2") {
        document.getElementById('SpecificationsBtn').className = "detailsWallBtnActive"
        document.getElementById('SpecificationsBtn2').className = "detailsWallBtnActive"
        document.getElementById('Specifications').style.display = "block";
    }
    else if (id == "GalleryBtn" || id == "GalleryBtn2") {
        document.getElementById('GalleryBtn').className = "detailsWallBtnActive"
        document.getElementById('GalleryBtn2').className = "detailsWallBtnActive"
        document.getElementById('gallery').style.display = "block";
    }
    else if (id == "LocationBtn" || id == "LocationBtn2") {
        document.getElementById('LocationBtn').className = "detailsWallBtnActive"
        document.getElementById('LocationBtn2').className = "detailsWallBtnActive"
        document.getElementById('location').style.display = "block";
    }
}

// Create the anchor element
const whatsappLink = document.createElement('a');
whatsappLink.className = 'whatsapp-float';
whatsappLink.href = 'https://wa.me/9340282848';
whatsappLink.target = '_blank';
whatsappLink.setAttribute('aria-label', 'Chat on WhatsApp');

// Create the image element
const whatsappImg = document.createElement('img');
whatsappImg.src = './images/whatsapp.png';
whatsappImg.alt = 'Chat on WhatsApp';

// Append the image to the link
whatsappLink.appendChild(whatsappImg);

// Append the link to the body
document.body.appendChild(whatsappLink);

document.querySelectorAll('.footerATag').forEach(tag => {
    if (
        tag.textContent.includes('Privacy Policy') || 
        tag.textContent.includes('Terms') && tag.textContent.includes('Conditions')
    ) {
        tag.remove();
    }
});
