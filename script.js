const buttons = document.querySelectorAll(".filter-buttons button");
const items = document.querySelectorAll(".item");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const filter = button.getAttribute("data-filter");

        items.forEach(item => {

            if(filter === "all" || item.classList.contains(filter)){
                item.style.display = "block";
            }
            else{
                item.style.display = "none";
            }

        });

    });
});

const aiData = {

    ml: {
        title: "Machine Learning",
        image:"images/ml.jpg",
        description: "Machine Learning enables computers to learn from data and make predictions without being explicitly programmed.",
        applications: [
            "Netflix Recommendations",
            "Spam Detection",
            "Fraud Detection",
            "Stock Prediction"
        ],
        fact: "Machine Learning models become more accurate as they learn from larger datasets."
    },

    cv: {
        title: "Computer Vision",
        image:"images/cv.jpg",
        description: "Computer Vision enables machines to understand and analyze images and videos.",
        applications: [
            "Face Recognition",
            "Medical Imaging",
            "Self-driving Cars",
            "Object Detection"
        ],
        fact: "Computer Vision is used in autonomous vehicles to detect roads, signs, and pedestrians."
    },

    nlp: {
        title: "Natural Language Processing",
        image:"images/nlp.jpg",
        description: "NLP helps computers understand, interpret, and generate human language.",
        applications: [
            "Chatbots",
            "Google Translate",
            "Voice Assistants",
            "Sentiment Analysis"
        ],
        fact: "ChatGPT is one example of an NLP-powered application."
    },

    genai: {
        title: "Generative AI",
        image:"images/genai.jpg",
        description: "Generative AI creates new content such as text, images, music, videos, and code.",
        applications: [
            "ChatGPT",
            "Image Generation",
            "Code Generation",
            "Content Creation"
        ],
        fact: "Generative AI can create entirely new content from simple text prompts."
    }

};

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const popupApplications = document.getElementById("popup-applications");
const popupFact = document.getElementById("popup-fact");
const popupImage = document.getElementById("popup-image");

const learnButtons = document.querySelectorAll(".learn-btn");
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

learnButtons.forEach(button => {

    button.addEventListener("click", () => {

        const topic = button.dataset.topic;

        popupTitle.textContent = aiData[topic].title;
        popupImage.src = aiData[topic].image;
        popupImage.alt = aiData[topic].title;
        popupDescription.textContent = aiData[topic].description;

        popupApplications.innerHTML = "";

        aiData[topic].applications.forEach(app => {
            const li = document.createElement("li");
            li.textContent = app;
            popupApplications.appendChild(li);
        });

        popupFact.textContent = aiData[topic].fact;

        popup.style.display = "flex";

    });

});

learnButtons.forEach(button => {

    button.addEventListener("click", () => {

        const topic = button.dataset.topic;

        popupTitle.textContent = aiData[topic].title;
        popupDescription.textContent = aiData[topic].description;

        popupApplications.innerHTML = "";

        aiData[topic].applications.forEach(app => {
            const li = document.createElement("li");
            li.textContent = app;
            popupApplications.appendChild(li);
        });

        popupFact.textContent = aiData[topic].fact;

        popup.style.display = "flex";

    });

});
