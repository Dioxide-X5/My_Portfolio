// Array of testimonial objects
const testimonials = [
    {
        quote: "Paul is an amazing web developer! He always puts in the effort to make sure everything looks perfect.",
        author: "- Dioxide_X5, self."
    },
    {
        quote: "I've seen Paul grow as a programmer, and his skills in HTML and CSS are outstanding.",
        author: "- Dioxide_X5, self."
    },
    {
        quote: "I've helped Paul along the journey of programming, and he's doing very well.",
        author: "- ChatGPT himself."
    }
];

// Function to display testimonials
function displayTestimonials() {
    const container = document.getElementById('testimonial-container');

    // Loop through the testimonials and create HTML for each
    testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');
        
        const blockquote = document.createElement('blockquote');
        blockquote.textContent = testimonial.quote;
        
        const author = document.createElement('p');
        author.textContent = testimonial.author;

        // Append elements to the div
        testimonialDiv.appendChild(blockquote);
        testimonialDiv.appendChild(author);

        // Add the div to the container
        container.appendChild(testimonialDiv);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', displayTestimonials);
