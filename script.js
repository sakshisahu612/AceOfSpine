let nav = document.querySelector('nav');
let dropdown = nav.querySelector('.dropdown');
let dropdownToggle = nav.querySelector("[data-action='dropdown-toggle']");
let navToggle = nav.querySelector("[data-action='nav-toggle']");

dropdownToggle.addEventListener('click', () => {
	if (dropdown.classList.contains('show')) {
		dropdown.classList.remove('show');
	} else {
		dropdown.classList.add('show');
	}
})

navToggle.addEventListener('click', () => {
	if (nav.classList.contains('opened')) {
		nav.classList.remove('opened');
	} else {
		nav.classList.add('opened');
	}
})

//Testimonial Data

const testimonials = [
  {
    name: "Sandeep Malik",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocKzqCmP_egVn0R-apbTNaYnPkrPVzysDE4usDZ80Yz3U-A7vA=w75-h75-p-rp-mo-br100",
    testimonial:
      "I've been taking physiotherapy session here for my back pain and after that the back pain is much better than before. Dr. Shruti is very experienced, she listens to all my queries and resolved them. Thanks Dr. Shruti :)",
  },
  {
    name: "Jatin Sehrawat",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVFrHt6GhfK6IDPxCMrG8oWM5wMHrlcfSdSJazMGCnzUTdDVaQf=w75-h75-p-rp-mo-br100",
    testimonial:
      "Best place for physiotherapy and the best physiotherapist Dr. Shruti with very informative nature and skillfull treatment. Dr. Shruti explains the issue deeply and let us know the root cause of the problem and treatment to be done.",
  },
  {
    name: "Broad Dreams",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjW9Mm7AXGQPTKmrujm45QnoxhuUuCriLocKxX1nxYhywN1cfBnRtQ=w75-h75-p-rp-mo-br100",
    testimonial:
      "Highly recommended! I've been training and in sports for more than 20 years, dealing with multiple injuries. I've seen many physiotherapists, but Ace of Spine stands out. Dr. Shruti is highly skilled, and her treatment made a huge difference, the staff is professional and supportive.",
  },
];


let current = 0;

const card = document.getElementById("testimonial-card");
const dotsContainer = document.getElementById("dots");

function renderDots() {
  dotsContainer.innerHTML = "";
  testimonials.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === current) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });
}

function showTestimonial(index) {
  const t = testimonials[index];
  card.innerHTML = `
    <img src="${t.image}" alt="${t.name}" class="testimonial-img"/>
    <div class="stars">★★★★★</div>
    <p class="testimonial-text">"${t.testimonial}"</p>
    <p class="testimonial-name">${t.name}</p>
  `;
  renderDots();
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}

function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
}

// Initial load
showTestimonial(current);

// Auto-switch every 5 seconds
setInterval(nextTestimonial, 3000);



// SUCCESS STORIES

  const successStories = [
    {
      before: "https://via.placeholder.com/500x300?text=Before+1",
      after: "https://via.placeholder.com/500x300?text=After+1",
      duration: "8 Weeks Treatment",
      title: "Chronic Back Pain Recovery",
      description: "Patient suffered from severe lower back pain for 3 years. After 8 weeks of specialized treatment, they regained full mobility with no pain."
    },
    {
      before: "https://via.placeholder.com/500x300?text=Before+2",
      after: "https://via.placeholder.com/500x300?text=After+2",
      duration: "6 Weeks Treatment",
      title: "Knee Injury Rehabilitation",
      description: "After a sports injury, patient recovered full knee flexibility and strength in just 6 weeks of physiotherapy and care."
    },
    {
      before: "https://via.placeholder.com/500x300?text=Before+3",
      after: "https://via.placeholder.com/500x300?text=After+3",
      duration: "10 Weeks Treatment",
      title: "Post-Surgery Mobility Boost",
      description: "Following surgery, the patient faced severe mobility issues. With our treatment, they regained walking independence in 10 weeks."
    }
  ];

  let currentIndex = 0;

  function showSuccessStory(index) {
    const story = successStories[index];
    document.getElementById('beforeImage').src = story.before;
    document.getElementById('afterImage').src = story.after;
    document.getElementById('duration').textContent = story.duration;
    document.getElementById('title').textContent = story.title;
    document.getElementById('description').textContent = story.description;

    // Update dots
    successStories.forEach((_, i) => {
      document.getElementById('dot' + i).className =
        'h-2 rounded-full ' + (i === index ? 'w-5 bg-purple-400' : 'w-2 bg-gray-500');
    });
  }

  function nextSuccessStory() {
    currentIndex = (currentIndex + 1) % successStories.length;
    showSuccessStory(currentIndex);
  }

  function prevSuccessStory() {
    currentIndex = (currentIndex - 1 + successStories.length) % successStories.length;
    showSuccessStory(currentIndex);
  }

  // Auto slide
  setInterval(nextSuccessStory, 5000);

  // Init
  showSuccessStory(currentIndex);

// //FAQS


document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".accordion button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    // Close all accordion items
    items.forEach((item) => item.setAttribute("aria-expanded", "false"));

    // Expand clicked item if it was closed
    if (itemToggle === "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }

  items.forEach((item) => item.addEventListener("click", toggleAccordion));
});

//book
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('fullName').value;
  const phone = document.getElementById('phoneNumber').value;
  const email = document.getElementById('emailAddress').value;
  const treatment = document.getElementById('treatmentType').value;
  const date = document.getElementById('preferredDate').value;
  const time = document.getElementById('preferredTime').value;
  const notes = document.getElementById('additionalInfo').value;

  const message = `New Appointment Request:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nTreatment: ${treatment}\nDate: ${date}\nTime: ${time}\nNotes: ${notes}`;
  const whatsappNumber = "917011988084";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
});

