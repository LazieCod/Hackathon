document.addEventListener("DOMContentLoaded", () => {
  // Define features and their content
  const features = {
    homework: {
      title: "Homework Submission",
      content: `
        <form id="homework-form">
          <label for="student-name">Name:</label>
          <input type="text" id="student-name" required><br><br>
          <label for="homework-file">Upload File:</label>
          <input type="file" id="homework-file" required><br><br>
          <button type="submit">Submit</button>
        </form>
        <p id="form-message"></p>
      `,
    },
    grades: {
      title: "Past Grades",
      content: `
        <p>Select a subject to view grades:</p>
        <div id="grades-buttons" class="button-group">
          <button class="subject-btn" data-subject="maths">Maths</button>
          <button class="subject-btn" data-subject="physics">Physics</button>
          <button class="subject-btn" data-subject="chemistry">Chemistry</button>
          <button class="subject-btn" data-subject="english">English</button>
        </div>
        <div id="grades-content" style="margin-top: 20px;"></div>
      `,
    },
    chat: {
      title: "Chat with Teachers",
      content: `<p>The chat feature is under development. Stay tuned!</p>`,
    },
    calendar: {
      title: "Academic Calendar",
      content: `<p>Your academic calendar will appear here.</p>`,
    },
    resources: {
      title: "Resources",
      content: `
        <p>Select a subject to access resources:</p>
        <div id="resources-buttons" class="button-group">
          <button class="subject-btn" data-subject="maths">Maths</button>
          <button class="subject-btn" data-subject="physics">Physics</button>
          <button class="subject-btn" data-subject="chemistry">Chemistry</button>
          <button class="subject-btn" data-subject="english">English</button>
        </div>
        <div id="resources-content" style="margin-top: 20px;"></div>
      `,
    },
    announcements: {
      title: "School Announcements",
      content: `<p>Find the latest announcements here.</p>`,
    },
    feedback: {
      title: "Submit Feedback",
      content: `
        <textarea id="feedback-text" placeholder="Write your feedback here..."></textarea><br><br>
        <button id="feedback-submit">Submit</button>
        <p id="feedback-message"></p>
      `,
    },
    help: {
      title: "Help Center",
      content: `
        <p>For help, contact us at:</p>
        <ul>
          <li>Email: help@homeroom.com</li>
          <li>Phone: +123-456-7890</li>
        </ul>
      `,
    },
  };

  // Modal elements
  const modal = document.getElementById("dynamic-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const closeModalButton = document.querySelector(".close-btn");

  // Close modal functionality
  const closeModal = () => {
    modal.style.display = "none";
  };

  closeModalButton.addEventListener("click", closeModal);

  // Add event listeners to grid items
  document.querySelectorAll(".grid-item").forEach((item) => {
    item.addEventListener("click", () => {
      const featureKey = item.getAttribute("data-feature");
      const feature = features[featureKey];

      if (feature) {
        // Update modal content
        modalTitle.textContent = feature.title;
        modalBody.innerHTML = feature.content;
        modal.style.display = "flex";

        // Add specific functionality for grades and resources
        if (featureKey === "grades" || featureKey === "resources") {
          const buttonGroupId = featureKey === "grades" ? "grades-buttons" : "resources-buttons";
          const contentId = featureKey === "grades" ? "grades-content" : "resources-content";

          document.getElementById(buttonGroupId).addEventListener("click", (e) => {
            if (e.target.classList.contains("subject-btn")) {
              const subject = e.target.getAttribute("data-subject");
              const contentElement = document.getElementById(contentId);

              if (featureKey === "grades") {
                contentElement.innerHTML = `<p>Grades for ${subject.charAt(0).toUpperCase() + subject.slice(1)}: <strong>Coming Soon!</strong></p>`;
              } else if (featureKey === "resources") {
                contentElement.innerHTML = `<p>Resources for ${subject.charAt(0).toUpperCase() + subject.slice(1)}: <strong>Available Soon!</strong></p>`;
              }
            }
          });
        }

        // Add functionality for feedback form
        if (featureKey === "feedback") {
          document
            .getElementById("feedback-submit")
            .addEventListener("click", () => {
              const feedbackMessage = document.getElementById("feedback-text").value;
              const feedbackResponse = document.getElementById("feedback-message");
              if (feedbackMessage.trim() !== "") {
                feedbackResponse.textContent = "Thank you for your feedback!";
                feedbackResponse.style.color = "green";
              } else {
                feedbackResponse.textContent = "Please enter your feedback.";
                feedbackResponse.style.color = "red";
              }
            });
        }

        // Add functionality for homework submission
        if (featureKey === "homework") {
          document
            .getElementById("homework-form")
            .addEventListener("submit", (e) => {
              e.preventDefault();
              const formMessage = document.getElementById("form-message");
              formMessage.textContent = "Homework submitted successfully!";
              formMessage.style.color = "green";
            });
        }
      }
    });
  });

  // Close modal when clicking outside the content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const features = {
    homework: {
      title: "Homework Submission",
      content: `
        <form id="homework-form">
          <label for="student-name">Name:</label>
          <input type="text" id="student-name" required><br><br>
          <label for="homework-file">Upload File:</label>
          <input type="file" id="homework-file" required><br><br>
          <button type="submit">Submit</button>
        </form>
        <p id="form-message"></p>
      `,
    },
    grades: {
      title: "Past Grades",
      content: `
        <div class="button-group">
          <button class="subject-btn">Maths</button>
          <button class="subject-btn">Physics</button>
          <button class="subject-btn">Chemistry</button>
          <button class="subject-btn">English</button>
        </div>
      `,
    },
    chat: {
      title: "Chat with Teachers",
      content: `
        <div class="button-group">
          <button class="subject-btn teacher-btn" data-teacher="Maths Teacher">Maths Teacher</button>
          <button class="subject-btn teacher-btn" data-teacher="Physics Teacher">Physics Teacher</button>
          <button class="subject-btn teacher-btn" data-teacher="Chemistry Teacher">Chemistry Teacher</button>
          <button class="subject-btn teacher-btn" data-teacher="English Teacher">English Teacher</button>
        </div>
      `,
    },
    calendar: {
      title: "Academic Calendar",
      content: `<p>View your academic calendar here.</p>`,
    },
    resources: {
      title: "Resources",
      content: `
        <div class="button-group">
          <button class="subject-btn">Maths</button>
          <button class="subject-btn">Physics</button>
          <button class="subject-btn">Chemistry</button>
          <button class="subject-btn">English</button>
        </div>
      `,
    },
    announcements: {
      title: "School Announcements",
      content: `<p>Check the latest announcements here.</p>`,
    },
    feedback: {
      title: "Submit Feedback",
      content: `
        <textarea id="feedback-text" placeholder="Write your feedback..."></textarea><br><br>
        <button id="feedback-submit">Submit</button>
        <p id="feedback-message"></p>
      `,
    },
    help: {
      title: "Help Center",
      content: `
        <p>Need help? Check our FAQs or reach out for support.</p>
        <div class="button-group">
          <button class="subject-btn">FAQs</button>
          <button class="subject-btn">Support</button>
          <button class="subject-btn">Contact Admin</button>
        </div>
      `,
    },
  };

  const modal = document.getElementById("dynamic-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const closeModal = () => (modal.style.display = "none");

  document.querySelectorAll(".grid-item").forEach((item) => {
    item.addEventListener("click", () => {
      const featureKey = item.getAttribute("data-feature");
      const feature = features[featureKey];
      modalTitle.textContent = feature.title;
      modalBody.innerHTML = feature.content;
      modal.style.display = "flex";

      // Chat feature: Show chatbox after selecting a teacher
      if (featureKey === "chat") {
        document.querySelectorAll(".teacher-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const teacherName = btn.dataset.teacher;
            modalTitle.textContent = teacherName; // Update modal title
            modalBody.innerHTML = `
              <div id="chatbox">
                <div id="chat-messages"></div>
                <div id="chat-input-container">
                  <input type="text" id="chat-input" placeholder="Type your message..." />
                  <button id="send-message-btn">Send</button>
                </div>
              </div>
            `;

            const chatInput = document.getElementById("chat-input");
            const chatMessages = document.getElementById("chat-messages");
            const sendButton = document.getElementById("send-message-btn");

            sendButton.addEventListener("click", () => {
              const userMessage = chatInput.value.trim();
              if (userMessage) {
                const messageElement = document.createElement("div");
                messageElement.className = "chat-message user";
                messageElement.textContent = userMessage;
                chatMessages.appendChild(messageElement);
                chatInput.value = "";

                // Simulate teacher's reply
                setTimeout(() => {
                  const replyElement = document.createElement("div");
                  replyElement.className = "chat-message teacher";
                  replyElement.textContent = `${teacherName} says: Thank you for your question!`;
                  chatMessages.appendChild(replyElement);
                  chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);

                chatMessages.scrollTop = chatMessages.scrollHeight;
              }
            });
          });
        });
      }

      // Feedback submission
      if (featureKey === "feedback") {
        document.getElementById("feedback-submit").addEventListener("click", () => {
          const feedbackText = document.getElementById("feedback-text").value.trim();
          const message = feedbackText
            ? "Thank you for your feedback!"
            : "Please write some feedback before submitting.";
          document.getElementById("feedback-message").textContent = message;
        });
      }
    });
  });

  document.querySelector(".close-btn").addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const features = {
    // Other features...

    calendar: {
      title: "Academic Calendar",
      content: `
        <div id="full-year-calendar" class="year-calendar-container">
          <h3>Academic Calendar - 2025</h3>
          <div id="year-calendar-grid"></div>
        </div>
      `,
    },

    // Remaining features...
  };

  const modal = document.getElementById("dynamic-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const closeModal = () => (modal.style.display = "none");

  document.querySelectorAll(".grid-item").forEach((item) => {
    item.addEventListener("click", () => {
      const featureKey = item.getAttribute("data-feature");
      const feature = features[featureKey];
      modalTitle.textContent = feature.title;
      modalBody.innerHTML = feature.content;
      modal.style.display = "flex";

      // Academic Calendar functionality
      if (featureKey === "calendar") {
        const yearCalendarGrid = document.getElementById("year-calendar-grid");

        // Define months and number of days for 2025
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const daysInMonth = [
          31, // January
          28, // February (not a leap year)
          31, // March
          30, // April
          31, // May
          30, // June
          31, // July
          31, // August
          30, // September
          31, // October
          30, // November
          31, // December
        ];

        // Generate calendar for the entire year
        months.forEach((month, monthIndex) => {
          const monthContainer = document.createElement("div");
          monthContainer.className = "month-container";

          const monthTitle = document.createElement("h4");
          monthTitle.className = "month-title";
          monthTitle.textContent = month;

          const daysGrid = document.createElement("div");
          daysGrid.className = "days-grid";

          // Add day names as headers
          const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          dayHeaders.forEach((day) => {
            const dayHeader = document.createElement("div");
            dayHeader.className = "day-header";
            dayHeader.textContent = day;
            daysGrid.appendChild(dayHeader);
          });

          // Get first day of the month
          const firstDay = new Date(2025, monthIndex, 1).getDay();

          // Add blank spaces for days before the 1st of the month
          for (let i = 0; i < firstDay; i++) {
            const blankCell = document.createElement("div");
            blankCell.className = "day-blank";
            daysGrid.appendChild(blankCell);
          }

          // Add day numbers
          for (let day = 1; day <= daysInMonth[monthIndex]; day++) {
            const dayCell = document.createElement("div");
            dayCell.className = "day-cell";
            dayCell.textContent = day;
            daysGrid.appendChild(dayCell);
          }

          monthContainer.appendChild(monthTitle);
          monthContainer.appendChild(daysGrid);
          yearCalendarGrid.appendChild(monthContainer);
        });
      }
    });
  });

  document.querySelector(".close-btn").addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
const features = {
  // Other features remain unchanged...

  announcements: {
    title: "School Announcements",
    content: `
      <div class="announcement-box">
        <h3>Latest Announcements</h3>
        <ul id="announcement-list">
          <li>Holiday on Republic Day (26th January 2025)</li>
          <li>Parent-Teacher Meeting on 10th February 2025</li>
          <li>Sports Day scheduled for 15th March 2025</li>
        </ul>
        <button id="add-announcement-btn">Add Announcement</button>
        <div id="new-announcement-form" style="display:none; margin-top: 10px;">
          <textarea id="new-announcement-text" placeholder="Enter new announcement"></textarea><br><br>
          <button id="submit-announcement-btn">Submit</button>
        </div>
      </div>
    `,
  },

  feedback: {
    title: "Submit Feedback",
    content: `
      <div class="feedback-box">
        <h3>Submit Feedback</h3>
        <textarea id="feedback-text" placeholder="Write your feedback..." rows="4"></textarea><br><br>
        <button id="feedback-submit">Submit Feedback</button>
        <p id="feedback-message"></p>
      </div>
    `,
  },
};

// Announcements functionality
document.addEventListener("click", (e) => {
  if (e.target.id === "add-announcement-btn") {
    document.getElementById("new-announcement-form").style.display = "block";
  }

  if (e.target.id === "submit-announcement-btn") {
    const newAnnouncement = document.getElementById("new-announcement-text").value.trim();
    if (newAnnouncement) {
      const list = document.getElementById("announcement-list");
      const newItem = document.createElement("li");
      newItem.textContent = newAnnouncement;
      list.appendChild(newItem);
      document.getElementById("new-announcement-text").value = ""; // Clear input
      document.getElementById("new-announcement-form").style.display = "none";
    } else {
      alert("Please enter an announcement before submitting.");
    }
  }
});

// Feedback submission functionality remains unchanged
document.addEventListener("click", (e) => {
  if (e.target.id === "feedback-submit") {
    const feedbackText = document.getElementById("feedback-text").value.trim();
    const message = feedbackText
      ? "Thank you for your feedback!"
      : "Please write some feedback before submitting.";
    document.getElementById("feedback-message").textContent = message;
  }
});