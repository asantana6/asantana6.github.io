document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const outputDiv = document.getElementById("output");
    const coursesDiv = document.getElementById("courses");
    const addCourseBtn = document.getElementById("addCourse");



    function loadImage(){
        var image = document.getElementById('introImage').files[0];

        const imageUrl = URL.createObjectURL(image);

        var text = "<img src\"" + imageURL + "\"";

        document.getElementById('loadImage').innerHTML = text;
    }
    // Prevent form submission if required fields are missing
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        if(document.getElementById("image") === ""){
            document.imageFile.value="images/prom.png";
        }

        // Validate image file type
        const imageFile = document.getElementById("image").files[0];
        if (imageFile && !["image/png", "image/jpeg"].includes(imageFile.type)) {
            alert("Please upload a valid PNG or JPG image.");
            return;
        }

        // Collect form data
        const formData = {
            name: document.getElementById("name").value,
            mascot: document.getElementById("mascot").value,
            caption: document.getElementById("caption").value,
            personalBackground: document.getElementById("personalBackground").value,
            professionalBackground: document.getElementById("professionalBackground").value,
            academicBackground: document.getElementById("academicBackground").value,
            webDevBackground: document.getElementById("webDevBackground").value,
            computerPlatform: document.getElementById("computerPlatform").value,
            funnyThing: document.getElementById("funnyThing").value,
            anythingElse: document.getElementById("anythingElse").value,
            courses: Array.from(document.querySelectorAll(".courseField")).map(input = () => input.value)
        };

        
    // Add new course input field
    function addCourseField() {
        const courseField = document.createElement("div");
        courseField.innerHTML = `
            <input type="text" class="courseField" required>
            <button type="button" class="removeCourse">X</button>
        `;
        coursesDiv.appendChild(courseField);

        // Remove button for courses
        courseField.querySelector(".removeCourse").addEventListener("click", function() {
            courseField.remove();
        });
    }

    addCourseBtn.addEventListener("click", addCourseField);
});

        // Display the collected data
        outputDiv.innerHTML = `
            <h2>${formData.name} 🐟 ${formData.mascot}</h2>
          
            ${imageFile ? `<img src="${URL.createObjectURL(imageFile)}" alt="User Image" width="200">` : ""}
            <p><strong>Image Caption:</strong> ${formData.caption}</p>
            <p><strong>Personal Background:</strong> ${formData.personalBackground}</p>
            <p><strong>Professional Background:</strong> ${formData.professionalBackground}</p>
            <p><strong>Academic Background:</strong> ${formData.academicBackground}</p>
            <p><strong>Web Development Background:</strong> ${formData.webDevBackground}</p>
            <p><strong>Primary Computer Platform:</strong> ${formData.computerPlatform}</p>
            <p><strong>Courses Currently Taking:</strong> ${formData.courses.join(", ") || "None"}</p>
            <p><strong>Funny Thing:</strong> ${formData.funnyThing}</p>
            <p><strong>Anything Else:</strong> ${formData.anythingElse}</p>
            <button id="restart">Reset</button>
        `;

        // Hide form and show output
        form.style.display = "none";
        outputDiv.style.display = "block";

        // Restart button to reset form
        document.getElementById("restart").addEventListener("click", function() {
            outputDiv.style.display = "none";
            form.style.display = "block";
            form.reset();
            document.getElementById("courses").innerHTML = `<button type="button" id="addCourse">Add Course</button>`;
            document.getElementById("addCourse").addEventListener("click", addCourseField);
        });
    });
